import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/cart'
import checkoutReducer from './reducers/checkout'
import authReducer from './reducers/auth'
import uiReducer from './reducers/sideModal'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer,
    checkout: checkoutReducer,
    auth: authReducer,
    sideModal: uiReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
