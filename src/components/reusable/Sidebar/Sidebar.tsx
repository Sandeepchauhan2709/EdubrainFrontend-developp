import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { PiNoteBlankLight } from 'react-icons/pi'
import { IoLogoGameControllerB } from 'react-icons/io'
import { IoCheckmarkDoneCircle } from 'react-icons/io5'
import { GrCertificate } from 'react-icons/gr'
import { TbLogout2 } from 'react-icons/tb'
import logo from '../../../assets/logo.png'
import Togglebtn from './Togglebtn'
import { handleLogout } from '../../../api/user'
import toast from 'react-hot-toast'
import { useQueryClient } from '@tanstack/react-query'
import { setIsAuthenticated, setUser } from '../../../store/slices/userSlices'
import { useDispatch } from 'react-redux'

const Sidebar = (): JSX.Element => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const dispatch = useDispatch()

  const logout = (): void => {
    handleLogout()
      .then(async () => {
        dispatch(setIsAuthenticated(false))
        dispatch(setUser(null))
        await queryClient.invalidateQueries({
          queryKey: ['user'],
        })
        toast.success('Logged out successfully.')
        navigate('/')
      })
      .catch((error) => {
        console.error(error)
        toast.error('Failed to log out. Please try again.')
      })
  }

  // const logout = async (): Promise<void> => {
  //   try {
  //     await handleLogout()
  //     dispatch(setIsAuthenticated(false))
  //     dispatch(setUser(null))
  //     await queryClient.invalidateQueries({
  //       queryKey: ['user'],
  //     })
  //     toast.success('Logged out successfully.')
  //     navigate('/')
  //     console.log("err");
  //   } catch (error) {
  //     console.error(error)
  //     toast.error('Failed to log out. Please try again.')
  //   }
  // }

  return (
    <div className=" dark:bg-background bg-neutral-5 w-[290px] p-5 h-screen sticky top-0 hidden lg:block">
      {/* Logo */}
      <Link to={'/'} className="flex justify-center">
        <img className="w-16 mb-16" src={logo} alt="" />
      </Link>

      {/* Navlinks */}
      <div className="flex flex-col gap-4">
        <NavLink
          to={'/dashboard/myCourse'}
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
                ? 'text-primary-55 h-[45px] rounded-xl dark:bg-primary-95 bg-primary-35/15 p-3 flex items-center gap-3 text-[16px] font-roboto font-normal'
                : ' dark:text-neutral-40 text-neutral-60 h-[45px] rounded-xl p-3 flex items-center gap-3 text-[16px] font-roboto font-normal'
          }
        >
          <MdOutlineSpaceDashboard /> My Course
        </NavLink>

        <NavLink
          to={'/dashboard/myAssignment'}
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
                ? 'text-primary-55 h-[45px] rounded-xl dark:bg-primary-95 bg-primary-35/15 p-3 flex items-center gap-3 text-[16px] font-roboto font-normal'
                : ' dark:text-neutral-40 text-neutral-60 h-[45px] rounded-xl p-3 flex items-center gap-3 text-[16px] font-roboto font-normal'
          }
        >
          <PiNoteBlankLight /> My Assignment
        </NavLink>

        <NavLink
          to={'/'}
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
                ? 'text-primary-55 h-[45px] rounded-xl dark:bg-primary-95 bg-primary-35/15 p-3 flex items-center gap-3 text-[16px] font-roboto font-normal'
                : ' dark:text-neutral-40 text-neutral-60 h-[45px] p-3 flex items-center gap-3 text-[16px] font-roboto font-normal'
          }
        >
          <IoLogoGameControllerB /> Games
        </NavLink>

        <NavLink
          to={'/'}
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
                ? 'text-primary-55 h-[45px] rounded-xl dark:bg-primary-95 bg-primary-35/15 p-3 flex items-center gap-3 text-[16px] font-roboto font-normal'
                : ' dark:text-neutral-40 text-neutral-60 h-[45px] p-3 flex items-center gap-3 text-[16px] font-roboto font-normal'
          }
        >
          <IoCheckmarkDoneCircle /> Refer & Earn
        </NavLink>

        <NavLink
          to={'/dashboard/certification'}
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
                ? 'text-primary-55 h-[45px] rounded-xl dark:bg-primary-95 bg-primary-35/15 p-3 flex items-center gap-3 text-[16px] font-roboto font-normal'
                : ' dark:text-neutral-40 text-neutral-60 h-[45px] p-3 flex items-center gap-3 text-[16px] font-roboto font-normal'
          }
        >
          <GrCertificate /> Certificate
        </NavLink>
      </div>

      <div className="flex flex-col gap-6 mt-5">
        {/* Light & Dark mode button */}
        <Togglebtn></Togglebtn>

        <button
          onClick={logout}
          // onClick={() => { logout().catch(console.error) }}
          className="dark:text-neutral-40 text-neutral-60 h-[45px] p-3 flex items-center gap-3 text-[16px] font-roboto font-normal transform transition-transform duration-300 hover:-translate-y-0.5"
        >
          <TbLogout2 /> Logout
        </button>
      </div>
    </div>
  )
}

export default Sidebar
