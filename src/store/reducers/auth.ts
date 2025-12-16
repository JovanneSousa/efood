import { createAsyncThunk } from '@reduxjs/toolkit'
import apiAuth from '../../services/apiAuth'
import axios from 'axios'

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

export const login = createAsyncThunk<
  ResponsePayload<LoginResponse>,
  { email: string; password: string },
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
      const data = err.response?.data.details[0]
      if (data) return rejectWithValue(data)
    }
    return rejectWithValue('Erro ao fazer login')
  }
})
