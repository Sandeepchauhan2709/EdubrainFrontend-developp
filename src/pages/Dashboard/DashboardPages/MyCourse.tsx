import React from 'react'
import DashboardLayout from '../../../components/layouts/DashboardLayout'
import CourseDataProvider from './CourseDataProvider/CourseDataProvider'

const MyCourse = (): JSX.Element => {
  return (
    <DashboardLayout>
      <div>
        <CourseDataProvider />
      </div>
    </DashboardLayout>
  )
}

export default MyCourse
