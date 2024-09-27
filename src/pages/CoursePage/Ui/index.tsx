import Navbar from '../../../components/navbar'
import type { JSX } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import UI from './UI'
import Course from '../../../assets/data/CourseData/CourseData'

type CoursePage = 'mernstack' | 'uiux' | 'python' | 'powerbi' | 'datascience'
const pages: CoursePage[] = [
  'mernstack',
  'uiux',
  'python',
  'powerbi',
  'datascience',
]

const HomePage = (): JSX.Element => {
  const { page } = useParams<{ page: CoursePage }>()
  const navigate = useNavigate()

  useEffect(() => {
    if (page && !pages.includes(page)) {
      toast.error('Route not matched. Redirecting to home page...')
      setTimeout(() => {
        navigate('/')
      }, 2000)
    }
  }, [page, navigate])

  return (
    <div className="dark bg-background">
      <Navbar />
      <main className="mt-[64px] xl:mt-[80px]">
        {page && pages.includes(page) && <UI data={Course[page]} />}
      </main>
    </div>
  )
}

export default HomePage
