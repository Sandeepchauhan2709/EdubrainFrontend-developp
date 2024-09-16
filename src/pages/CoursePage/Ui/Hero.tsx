import React from 'react'
// import { useQuery } from '@tanstack/react-query'
// import { useParams } from 'react-router-dom'
import Video from './Video'
import PrimaryButton from '../../../components/buttons/PrimaryButton'
import SecondaryButton from '../../../components/buttons/SecondaryButton'
// import { getAllCourses } from '../../../api/courses'
// import { type ICourse } from '../../../types/course.types'

interface HeroProps {
  title: string
  subtitle: string
  subtitle1: string
  videoSrc: string
  poster: string
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  subtitle1,
  videoSrc,
  poster,
}) => {
  // const { page } = useParams()
  // const { data, isLoading, isError } = useQuery<ICourse[]>({
  //   queryKey: ['courses'],
  //   queryFn: getAllCourses,
  // })

  // Default values
  // let courseTitle = title
  // let courseDesc = subtitle
  // let coursePoster = poster

  // Determine specific course details based on 'page'
  // if (data && data.length > 0) {
  //   if (page === 'uiux') {
  //     courseTitle = data[0].category
  //     coursePoster = data[0].poster.url
  //     courseDesc = data[0].description
  //   }
  //   if (page === 'mernstack') {
  //     courseTitle = data[1].category
  //     coursePoster = data[1].poster.url
  //     courseDesc = data[0].description
  //   }
  //   if (page === 'python') {
  //     courseTitle = data[2].category
  //     coursePoster = data[2].poster.url
  //     courseDesc = data[2].description
  //   }
  // }

  // if (isLoading) {
  //   return <div>Loading...</div>
  // }

  // if (isError) {
  //   return <div>Error loading course data.</div>
  // }

  return (
    <div className="flex flex-col text-white pt-[60px] font-bold gap-6">
      <div className="flex justify-center">
        <div className="flex flex-col gap-4">
          <span className="text-[48px] font-Lato font-extrabold text-center max-sm:text-[26px]">
            {title}
          </span>
          <div className="flex flex-col">
            <span className="text-[36px] font-medium font-Lato text-[#ABAEB2] text-center max-sm:text-[22px]">
              {subtitle}
            </span>
            <span className="text-[36px] font-medium font-Lato text-[#ABAEB2] text-center max-sm:text-[22px]">
              {subtitle1}
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-3 py-6 justify-center">
        <SecondaryButton>See the curriculum</SecondaryButton>
        <PrimaryButton>Enroll Now</PrimaryButton>
      </div>
      <div className="flex justify-center">
        <Video videoSrc={videoSrc} poster={poster} />
      </div>
    </div>
  )
}

export default Hero
