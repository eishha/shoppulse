import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../component/cart/CartSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})
