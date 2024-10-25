import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import Navbar from '../../../components/navbar'
import UI from './UI'
import { getAllCourses } from '../../../api/courses'
import type { ICourse } from '../../../types/course.types'

interface UIDataType {
  title: string
  subtitle: string
  subtitle1: string
  poster: string
  Cardtitle: string
}

const HomePage = (): JSX.Element => {
  const { page } = useParams<{ page: string }>()
  const navigate = useNavigate()

  const {
    data: courses,
    isLoading,
    isError,
  } = useQuery<ICourse[]>({
    queryKey: ['courses'],
    queryFn: getAllCourses,
  })

  useEffect(() => {
    if (page && courses && !courses.some((course) => course.slug === page)) {
      toast.error('Route not matched. Redirecting to home page...')
      setTimeout(() => {
        navigate('/')
      }, 2000)
    }
  }, [page, courses, navigate])

  if (isLoading) {
    return (
      <div className="dark bg-background">
        <Navbar />
        <main className="mt-[64px] xl:mt-[80px]">
          <div>Loading...</div>
        </main>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="dark bg-background">
        <Navbar />
        <main className="mt-[64px] xl:mt-[80px]">
          <div>Error loading courses. Please try again later.</div>
        </main>
      </div>
    )
  }

  const currentCourse = courses?.find((course) => course.slug === page)

  const transformCourseData = (course: ICourse): UIDataType => {
    return {
      title: course.title,
      subtitle: course.description || '',
      subtitle1: course.category || '',
      poster: course.poster?.url || '',
      Cardtitle: course.title,
    }
  }

  return (
    <div className="dark bg-background">
      <Navbar />
      <main className="mt-[64px] xl:mt-[80px]">
        {page && currentCourse && (
          <UI data={transformCourseData(currentCourse)} />
        )}
        {page && !currentCourse && <div>Course not found</div>}
      </main>
    </div>
  )
}

export default HomePage
