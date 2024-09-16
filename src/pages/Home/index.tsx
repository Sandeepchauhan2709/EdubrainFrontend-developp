import React from 'react'
import Navbar from '../../components/navbar'
import Home from './Home'
import { type JSX } from 'react'
import FloatingCart from './FloatingCart'
import { useDispatch, useSelector } from 'react-redux'
import { type RootState } from '../../store'
import { setIsModalOpen } from '../../store/slices/modalSlices'

const HomePage = (): JSX.Element => {
  const dispatch = useDispatch()
  const { isModalOpen } = useSelector((state: RootState) => state.modalSlice)

  const handleModal = (): void => {
    dispatch(setIsModalOpen(!isModalOpen))
  }
  return (
    <div className="dark bg-background">
      <Navbar onClick={handleModal} />
      <main className="mt-[64px] xl:mt-[80px]">
        <Home
          isModalOpen={isModalOpen}
          handleModal={handleModal}
          setIsModalOpen={setIsModalOpen}
        />
      </main>
      <FloatingCart />
    </div>
  )
}
export default HomePage
