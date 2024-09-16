import { configureStore } from '@reduxjs/toolkit'
import cartSliceReducers from './slices/cartSlice'
import modalSlice from './slices/modalSlices'
import userSlice from './slices/userSlices'

export const store = configureStore({
  reducer: {
    cartItems: cartSliceReducers,
    modalSlice,
    userSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
