import { createSlice } from '@reduxjs/toolkit'

interface IModal {
  activeTab: string
  isModalOpen: boolean
}

const initialState: IModal = {
  activeTab: 'login',
  isModalOpen: false,
}

export const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    setIsModalOpen: (state, action) => {
      state.isModalOpen = action.payload
    },

    setActiveTab: (state, action) => {
      state.activeTab = action.payload
    },
  },
})

export const { setActiveTab, setIsModalOpen } = modalSlice.actions

export default modalSlice.reducer
