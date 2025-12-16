import {
  createAsyncThunk,
  createSlice,
  type PayloadAction
} from '@reduxjs/toolkit'
import apiAuth from '../../services/apiAuth'
import axios from 'axios'

export type LoginFormData = {
  email: string
  password: string
}

interface ResponsePayload<T> {
  success: boolean
  data: T
}

interface ErrorPayload {
  status: number
  details: string
}

interface LoginResponse {
  token: {
    accessToken: string
    expiresIn: number
    userToken: {
      id: string
      name: string
      claims: [
        {
          value: string
          type: string
        }
      ]
    }
  }
}

interface AuthState {
  loading: boolean
  error: string | null
  logged: boolean
}

const initialState: AuthState = {
  loading: false,
  error: null,
  logged: Boolean(localStorage.getItem('token'))
}

export const login = createAsyncThunk<
  ResponsePayload<LoginResponse>,
  LoginFormData,
  { rejectValue: string }
>('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const response = await apiAuth.post<ResponsePayload<LoginResponse>>(
      `api/auth/login`,
      credentials
    )
    return response.data
  } catch (err: unknown) {
    if (axios.isAxiosError<ErrorPayload>(err)) {
      const data = err.response?.data.details
      if (data) return rejectWithValue(data)
    }
    return rejectWithValue('Erro ao fazer login')
  }
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout() {
      localStorage.clear()
    }
  },
  extraReducers: (builder) => {
    const setPending = (state: AuthState) => {
      state.loading = true
      state.error = null
      state.logged = false
    }

    const setRejected = (
      state: AuthState,
      action: ReturnType<typeof login.rejected>
    ) => {
      state.loading = false
      state.error = action.payload!
      state.logged = false
    }

    const salvaDados = (
      state: AuthState,
      action: PayloadAction<ResponsePayload<LoginResponse>>
    ) => {
      const { token } = action.payload.data

      state.loading = false
      state.error = null
      state.logged = true

      localStorage.setItem('token', token.accessToken)
      localStorage.setItem('user', token.userToken.name)
      localStorage.setItem('userId', token.userToken.id)
      localStorage.setItem(
        'expiresIn',
        (Date.now() + token.expiresIn * 1000).toString()
      )
    }

    builder
      .addCase(login.pending, setPending)
      .addCase(login.rejected, setRejected)
      .addCase(login.fulfilled, salvaDados)
  }
})

export const { logout } = authSlice.actions
export default authSlice.reducer
