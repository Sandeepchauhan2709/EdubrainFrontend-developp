import React from 'react'
import type { ReactNode } from 'react'
import DashboardHeader from '../../pages/Dashboard/DashboardHeader/DashboardHeader'
import Sidebar from '../reusable/Sidebar/Sidebar'

interface Props {
  children: ReactNode
}

const DashboardLayout = ({ children }: Props): JSX.Element => {
  return (
    <div className="flex">
      {/* Dashboard left sidebar */}
      <Sidebar />

      {/* All Pages */}
      <div className="dark:bg-neutral-100 bg-neutral-10 w-full px-7 md:px-10 py-5 overflow-hidden">
        <DashboardHeader />
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout
