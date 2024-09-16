import { createSlice } from '@reduxjs/toolkit'

interface IUser {
  isAuthenticated: boolean
  user: {
    _id: string
    name: string
    email: string
    isAuthorized: string
  } | null
}

const initialState: IUser = {
  isAuthenticated: false,
  user: null,
}

export const useSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload
    },
  },
})

export const { setIsAuthenticated, setUser } = useSlice.actions

export default useSlice.reducer
