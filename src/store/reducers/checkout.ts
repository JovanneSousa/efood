import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type CheckoutState = {
  isPaying: boolean
  isFinished: boolean
  inDelivery: boolean
  orderId: string
}

const initialState: CheckoutState = {
  isPaying: false,
  isFinished: false,
  inDelivery: true,
  orderId: ''
}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setIspaying: (state, action: PayloadAction<boolean>) => {
      state.isPaying = action.payload
    },
    setIsFinished: (state, action: PayloadAction<boolean>) => {
      state.isFinished = action.payload
    },
    setInDelivery: (state) => {
      state.inDelivery = !state.inDelivery
    },
    resetCheckout: () => initialState,
    setOrderId: (state, action: PayloadAction<string>) => {
      state.orderId = action.payload
    }
  }
})

export const {
  setOrderId,
  resetCheckout,
  setIsFinished,
  setIspaying,
  setInDelivery
} = checkoutSlice.actions

export default checkoutSlice.reducer
