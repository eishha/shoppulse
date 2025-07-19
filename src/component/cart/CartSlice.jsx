import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload
      const existingItem = state.items.find((item) => item.id === newItem.id)

      if (existingItem) {
        existingItem.quantity += newItem.quantity || 1
      } else {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          image: newItem.image,
          quantity: newItem.quantity || 1,
        })
      }

      state.totalQuantity += newItem.quantity || 1
      state.totalAmount += newItem.price * (newItem.quantity || 1)
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload
      const existingItem = state.items.find((item) => item.id === id)

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== id)
        } else {
          existingItem.quantity--
        }

        state.totalQuantity--
        state.totalAmount -= existingItem.price
      }
    },
    deleteItemFromCart: (state, action) => {
      const id = action.payload
      const existingItem = state.items.find((item) => item.id === id)

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity
        state.totalAmount -= existingItem.price * existingItem.quantity
        state.items = state.items.filter((item) => item.id !== id)
      }
    },
    clearCart: (state) => {
      state.items = []
      state.totalQuantity = 0
      state.totalAmount = 0
    },
  },
})

export const {
  addItemToCart,
  removeItemFromCart,
  deleteItemFromCart,
  clearCart,
} = cartSlice.actions
export default cartSlice.reducer
