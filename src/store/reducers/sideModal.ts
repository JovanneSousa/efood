import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type SidebarType = 'cart' | 'profile' | null

interface UiState {
  sidebarOpen: boolean
  sidebarType: SidebarType
}

const initialState: UiState = {
  sidebarOpen: false,
  sidebarType: null
}

const UiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openSideBar: (state, action: PayloadAction<SidebarType>) => {
      state.sidebarOpen = true
      state.sidebarType = action.payload
      console.log(state.sidebarOpen)
      console.log(state.sidebarType)
    },
    closeSidebar: () => initialState
  }
})

export const { closeSidebar, openSideBar } = UiSlice.actions
export default UiSlice.reducer
