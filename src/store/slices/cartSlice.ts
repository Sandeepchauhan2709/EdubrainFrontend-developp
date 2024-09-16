import { createSlice } from '@reduxjs/toolkit'
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage'

interface ICartItem {
  id: string
  title: string
  discountedPercent: number
  basePrice: number
}

const initialState = {
  cartItems: (() => getLocalStorage<ICartItem[]>('cartItems', []))(),
}

export const cartSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    addToCard: (state, action) => {
      state.cartItems.push(action.payload as ICartItem)
      setLocalStorage('cartItems', state.cartItems)
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      )
      setLocalStorage('cartItems', state.cartItems)
    },
  },
})

export const { addToCard, removeFromCart } = cartSlice.actions

export default cartSlice.reducer
