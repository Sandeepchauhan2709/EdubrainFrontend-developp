import React, { useState, useEffect } from 'react'
import Card from './Card'
import Hero from './Hero'
import Curriculum from './Curriculum'
import SliderCard from './Slider'
import Certification from './Certification'
import Sectionlearn from './Sectionlearn'
import Payment from './Subscrition'
import FAQSection from '../../Home/FAQSection'
import SecondaryButton from '../../../components/buttons/SecondaryButton'
import PrimaryButton from '../../../components/buttons/PrimaryButton'
import API from '../../../api'
import { handleGetUser } from '../../../api/user'
import { useQuery } from '@tanstack/react-query'

interface UiProps {
  data: {
    title: string
    subtitle: string
    subtitle1: string
    poster: string
    Cardtitle: string
  }
}

interface Course {
  _id: string
  course_name: string
  sections: Section[]
}

interface Section {
  _id: string
  section_no: number
  section_name: string
  section_lectures: Lecture[]
}

interface Lecture {
  _id: string
  lecture_no: number
  lecture_name: string
}

const UI: React.FC<UiProps> = ({ data }) => {
  const [courseData, setCourseData] = useState<Course | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { data: userData } = useQuery({
    queryKey: ['user'],
    queryFn: handleGetUser,
    retry: 0,
  })
  const user: any = userData
  const useremail: string = user?.email || ''
  const handleEnroll = (courseName: string): void => {
    useremail
      ? (window.location.href = `https://pages.razorpay.com/pl_PCndOh475OhoA1/view?product=${courseName}&email=${useremail}`)
      : (window.location.href = `https://pages.razorpay.com/pl_PCndOh475OhoA1/view?product=${courseName}`)
  }
  useEffect(() => {
    const fetchCourseData = async (): Promise<void> => {
      try {
        setIsLoading(true)
        const response = await fetch(API.coursedata)
        if (!response.ok) {
          throw new Error('Failed to fetch course data')
        }
        const fetchedData = (await response.json()) as Course | Course[]
        setCourseData(Array.isArray(fetchedData) ? fetchedData[0] : fetchedData)
      } catch (error) {
        console.error('Error fetching course data:', error)
        setError('Failed to load course data. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchCourseData()
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div className="overflow-hidden">
      <Hero
        title={data.title}
        subtitle={data.subtitle}
        subtitle1={data.subtitle1}
        // videoSrc=""
        poster={data.poster}
      />
      <Card title1={data.Cardtitle} />
      {courseData && (
        <Curriculum
          sections={courseData.sections}
          courseTitle={courseData.course_name}
        />
      )}
      <SliderCard />
      <Certification />
      <Sectionlearn />
      <Payment
        package1={{
          title: 'Self-Paced',
          description:
            'Unlock foundational knowledge with our Basic Plan. Ideal for self-paced learners',
          oldPrice: 100,
          price: 20,
          features: [
            'Access to all course materials',
            'Self-paced learning',
            'Certificate of completion',
          ],
          buttonLabel: 'Start Learning Today',
        }}
        package2={{
          title: 'Mentor Support',
          description:
            'Unlock foundational knowledge with our Basic Plan. Ideal for self-paced learners',
          oldPrice: 1999,
          price: 1299,
          features: [
            'Dedicated mentor support',
            'Interactive live sessions',
            'Engaging assignments and projects',
          ],
          buttonLabel: 'Upgrade to Premium Excellence',
        }}
      />
      <FAQSection />
      <div className="py-10">
        <div className="flex flex-col items-center">
          <span className="text-[48px] font-700 font-Roboto text-white max-sm:text-[24px]">
            Are you Ready to become
          </span>
          <span className="text-[48px] font-700 font-Roboto text-white max-sm:text-[24px]">
            Master in {data ? data.title : 'this course'}?
          </span>
          <div className="flex gap-3 py-6 justify-center">
            <SecondaryButton>See the curriculum</SecondaryButton>
            <PrimaryButton
              onClick={() => {
                handleEnroll(data.title)
              }}
            >
              Enroll Now
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UI
