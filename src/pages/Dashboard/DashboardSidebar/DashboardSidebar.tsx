import React, { useEffect, useState } from 'react'
import { MdMenu, MdOutlineSpaceDashboard } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import { PiNoteBlankLight } from 'react-icons/pi'
import { IoLogoGameControllerB } from 'react-icons/io'
import { IoCheckmarkDoneCircle } from 'react-icons/io5'
import { GrCertificate } from 'react-icons/gr'
import { TbLogout2 } from 'react-icons/tb'
import Togglebtn from '../../../components/reusable/Sidebar/Togglebtn'

const DashboardSidebar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleSidebar = (): void => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent): void => {
      const closestDropdown = (event.target as HTMLElement).closest('.sidebar')
      if (isOpen && closestDropdown === null) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isOpen])

  return (
    <div className="relative sidebar">
      {/* Sidebar hamburger menu */}
      <MdMenu
        onClick={toggleSidebar}
        className="text-neutral-10 cursor-pointer text-3xl"
      />
      <div
        className={`fixed inset-y-0 left-0 z-50 bg-gray-800 w-64 h-screen transition-all duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {isOpen && (
          <div className="menu bg-background w-[270px] p-5 h-full overflow-y-scroll">
            {/* Logo */}
            <div className="flex justify-center">
              <img className="w-16 mb-16" src={logo} alt="" />
            </div>

            {/* Navlinks */}
            <div className="flex flex-col justify-center gap-4">
              <NavLink
                to={'/dashboard/myCourse'}
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'pending'
                    : isActive
                      ? 'text-primary-60 h-[45px] rounded-xl bg-primary-95 p-3 flex items-center gap-3 text-[16px] font-roboto font-normal'
                      : ' text-neutral-40 h-[45px] rounded-xl bg-neutral-100 p-3 flex items-center gap-3 text-[16px] font-roboto font-normal'
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
                      ? 'text-primary-60 h-[45px] rounded-xl bg-primary-95 p-3 flex items-center gap-3 text-[16px] font-roboto font-normal'
                      : ' text-neutral-40 h-[45px] rounded-xl bg-neutral-100 p-3 flex items-center gap-3 text-[16px] font-roboto font-normal'
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
                      ? 'text-primary-60 h-[45px] rounded-xl bg-primary-95 p-3 flex items-center gap-3 text-[16px] font-roboto font-normal'
                      : ' text-neutral-40 h-[45px] p-3 flex items-center gap-3 text-[16px] font-roboto font-normal'
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
                      ? 'text-primary-60 h-[45px] rounded-xl bg-primary-95 p-3 flex items-center gap-3 text-[16px] font-roboto font-normal'
                      : ' text-neutral-40 h-[45px] p-3 flex items-center gap-3 text-[16px] font-roboto font-normal'
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
                      ? 'text-primary-60 h-[45px] rounded-xl bg-primary-95 p-3 flex items-center gap-3 text-[16px] font-roboto font-normal'
                      : ' text-neutral-40 h-[45px] p-3 flex items-center gap-3 text-[16px] font-roboto font-normal'
                }
              >
                <GrCertificate /> Certificate
              </NavLink>
            </div>

            <div className="flex flex-col gap-6 mt-5">
              {/* Light & Dark mode button */}
              <Togglebtn></Togglebtn>

              <button className="text-neutral-40 h-[45px] p-3 flex items-center gap-3 text-[16px] font-roboto font-normal transform transition-transform duration-300 hover:-translate-y-0.5">
                <TbLogout2 /> Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default DashboardSidebar
