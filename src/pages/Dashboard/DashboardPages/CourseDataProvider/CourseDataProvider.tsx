// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import CarouselComponent from '../CarouselComponent/CarouselComponent'
// import API from '../../../../api/index'
// import { getAllEnrolledCourses } from '../../../../api/enrolledCourses'
// import { type IEnrollmentDetails } from '../../../../types/enrollment.types'

// export interface CourseDetails {
//   img: string
//   courseName: string
//   enrollDate?: string
//   time?: string
//   module?: string
//   completedModule?: string
//   lecture?: string
//   duration?: string
//   startDate?: string
//   startTime?: string
//   startIn?: string
//   slug: string
//   isEnrolled?: boolean
// }

// interface ApiCourseDetails {
//   _id: string
//   title: string
//   description: string
//   poster: {
//     url: string
//   }
//   numOfVideos: number
//   total_duration: string
//   slug: string
// }

// const CourseDataProvider = (): JSX.Element => {
//   const [enrolledCourses, setEnrolledCourses] = useState<CourseDetails[]>([])
//   const [recommendedCourses, setRecommendedCourses] = useState<CourseDetails[]>([])

//   useEffect(() => {
//     const fetchEnrolledCourses = async (): Promise<void> => {
//       try {
//         const enrollmentDetails = await getAllEnrolledCourses()
//         console.log(enrollmentDetails)
//         const formattedCourses: CourseDetails[] = enrollmentDetails.map((course : IEnrollmentDetails) => ({
//           img: course.poster.url,
//           courseName: course.title,
//           enrollDate: `Enrolled on ${new Date(course.enrollmentDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`,
//           time: `Last Read: ${course.lastLectureName}`,
//           module: course.totalLectures.toString(),
//           completedModule: course.completedLectures.toString(),
//           slug: `${course.slug}`,
//           duration: `${course.overallProgress}% Completed`,
//           isEnrolled: true
//         }))
//         setEnrolledCourses(formattedCourses)
//       } catch (error) {
//         console.error('Error fetching enrolled courses:', error)
//       }
//     }

//     fetchEnrolledCourses()
//   }, [])

//   useEffect(() => {
//     const fetchRecommendedCourses = async (): Promise<void> => {
//       try {
//         const response = await axios.get<{ courses: ApiCourseDetails[] }>(API.courses)
//         const apiCourses: ApiCourseDetails[] = response.data.courses

//         const formattedCourses: CourseDetails[] = apiCourses.map((course) => ({
//           img: course.poster.url,
//           courseName: course.title,
//           lecture: `${course.numOfVideos} Lecture${course.numOfVideos !== 1 ? 's' : ''}`,
//           duration: course.total_duration,
//           slug: course.slug,
//           isEnrolled: false
//         }))

//         setRecommendedCourses(formattedCourses)
//       } catch (error) {
//         console.error('Error fetching recommended courses:', error)
//       }
//     }

//     fetchRecommendedCourses()
//   }, [])

//   const tabs = [
//     { tabName: 'All', link: 'tab1' },
//     { tabName: 'In progress', link: 'tab2' },
//     { tabName: 'Yet to start', link: 'tab3' },
//     { tabName: 'Completed', link: 'tab4' },
//   ]

//   return (
//     <div className="">
//       <CarouselComponent
//         tabs={tabs}
//         courseHeading={'Enrolled Courses'}
//         courseDetails={enrolledCourses}
//       />
//       <CarouselComponent
//         courseDetails={recommendedCourses}
//         tabs={tabs}
//         courseHeading={'Recommended Courses'}
//       />

//     </div>
//   )
// }

// export default CourseDataProvider

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CarouselComponent from '../CarouselComponent/CarouselComponent'
import API from '../../../../api/index'
import { getAllEnrolledCourses } from '../../../../api/enrolledCourses'
import { type IEnrollmentDetails } from '../../../../types/enrollment.types'

export interface CourseDetails {
  img: string
  courseName: string
  enrollDate?: string
  lastRead?: string
  totalLecture?: string
  completedLecture?: string
  lecture?: string
  overallProgress?: string
  durantion?: string
  startDate?: string
  startTime?: string
  startIn?: string
  slug: string
  isEnrolled: boolean
  enrolledOrRecommended?: boolean
  courseDetailsId?: string
  price?: number
}

interface ApiCourseDetails {
  _id: string
  title: string
  description: string
  poster: {
    url: string
  }
  numOfVideos: number
  total_duration: string
  slug: string
}

const CourseDataProvider = (): JSX.Element => {
  const [enrolledCourses, setEnrolledCourses] = useState<CourseDetails[]>([])
  const [recommendedCourses, setRecommendedCourses] = useState<CourseDetails[]>(
    []
  )

  useEffect(() => {
    const fetchEnrolledCourses = async (): Promise<void> => {
      try {
        const enrollmentDetails = await getAllEnrolledCourses()
        console.log(enrollmentDetails)
        const formattedCourses: CourseDetails[] = enrollmentDetails.map(
          (course: IEnrollmentDetails) => ({
            img: course.poster.url,
            courseName: course.title,
            enrollDate: `Enrolled on ${new Date(course.enrollmentDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`,
            lastRead: `Last Read: ${course.lastLectureName}`,
            totalLecture: course.totalLectures.toString(),
            completedLecture: course.completedLectures.toString(),
            slug: `${course.slug}`,
            overallProgress: course.overallProgress.toString(),
            isEnrolled: true,
            enrolledOrRecommended: true,
          })
        )
        setEnrolledCourses(formattedCourses)
      } catch (error) {
        console.error('Error fetching enrolled courses:', error)
      }
    }

    fetchEnrolledCourses()
  }, [])

  useEffect(() => {
    const fetchRecommendedCourses = async (): Promise<void> => {
      try {
        const response = await axios.get<{ courses: ApiCourseDetails[] }>(
          API.courses
        )
        const apiCourses: ApiCourseDetails[] = response.data.courses

        const formattedCourses: CourseDetails[] = apiCourses.map((course) => ({
          img: course.poster.url,
          courseDetailsId: course._id,
          courseName: course.title,
          lecture: `${course.numOfVideos} Lecture${course.numOfVideos !== 1 ? 's' : ''}`,
          duration: course.total_duration,
          slug: course.slug,
          enrolledOrRecommended: false,
          isEnrolled: enrolledCourses.some(
            (enrolledCourse) => enrolledCourse.slug === course.slug
          ),
        }))

        setRecommendedCourses(formattedCourses)
      } catch (error) {
        console.error('Error fetching recommended courses:', error)
      }
    }

    fetchRecommendedCourses()
  }, [enrolledCourses]) // Add enrolledCourses as a dependency

  const tabs = [
    { tabName: 'All', link: 'tab1' },
    { tabName: 'In progress', link: 'tab2' },
    { tabName: 'Yet to start', link: 'tab3' },
    { tabName: 'Completed', link: 'tab4' },
  ]

  return (
    <div className="">
      <CarouselComponent
        tabs={tabs}
        courseHeading={'Enrolled Courses'}
        courseDetails={enrolledCourses}
      />
      <CarouselComponent
        courseDetails={recommendedCourses}
        tabs={tabs}
        courseHeading={'Recommended Courses'}
      />
    </div>
  )
}

export default CourseDataProvider

// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import CarouselComponent from '../CarouselComponent/CarouselComponent'
// import API from '../../../../api/index'

// export interface CourseDetails {
//   img: string
//   courseName: string
//   enrollDate?: string
//   time?: string
//   module?: string
//   completedModule?: string
//   lecture?: string
//   duration?: string
//   startDate?: string
//   startTime?: string
//   startIn?: string
// }

// interface ApiCourseDetails {
//   _id: string
//   title: string
//   description: string
//   poster: {
//     url: string
//   }
//   numOfVideos: number
//   total_duration: string
// }

// const CourseDataProvider = (): JSX.Element => {
//   const [recommendedCourses, setRecommendedCourses] = useState<CourseDetails[]>(
//     []
//   )

//   useEffect(() => {
//     const fetchRecommendedCourses = async (): Promise<void> => {
//       try {
//         const response = await axios.get(API.courses)
//         const apiCourses: ApiCourseDetails[] = response.data.courses

//         const formattedCourses: CourseDetails[] = apiCourses.map((course) => ({
//           img: course.poster.url,
//           courseName: course.title,
//           lecture: `${course.numOfVideos} Lecture${course.numOfVideos !== 1 ? 's' : ''}`,
//           duration: course.total_duration,
//         }))

//         setRecommendedCourses(formattedCourses)
//       } catch (error) {
//         console.error('Error fetching recommended courses:', error)
//       }
//     }

//     fetchRecommendedCourses()
//   }, [])

//   // Course Details (unchanged)
//   const courseDetails: CourseDetails[] = [
//     {
//       img: 'https://i.ibb.co/dcQynTD/ui-ux-design.png',
//       courseName: 'UI/UX design',
//       enrollDate: 'Enrolled on 12 may, 2023',
//       time: 'Last Read: Introduction of UI/UX',
//       module: '154',
//       completedModule: '12',
//     },

//     {
//       img: 'https://i.ibb.co/VBJZcwK/data-science.png',
//       courseName: 'Data Science',
//       enrollDate: 'Enrolled on 12 may, 2023',
//       time: 'Last Read: Learn Data Science',
//       module: '154',
//       completedModule: '10',
//     },

//     {
//       img: 'https://i.ibb.co/2qYdCVc/Mern-stark.png',
//       courseName: 'Mern Stack',
//       enrollDate: 'Enrolled on 23 June, 2023',
//       time: 'Last Read: Learn Mern Stack',
//       module: '154',
//       completedModule: '50',
//     },
//     {
//       img: 'https://i.ibb.co/dcQynTD/ui-ux-design.png',
//       courseName: 'UI/UX design',
//       enrollDate: 'Enrolled on 12 may, 2023',
//       time: 'Last Read: Introduction of UI/UX',
//       module: '154',
//       completedModule: '12',
//     },

//     {
//       img: 'https://i.ibb.co/VBJZcwK/data-science.png',
//       courseName: 'Data Science',
//       enrollDate: 'Enrolled on 12 may, 2023',
//       time: 'Last Read: Learn Data Science',
//       module: '154',
//       completedModule: '1',
//     },

//     {
//       img: 'https://i.ibb.co/2qYdCVc/Mern-stark.png',
//       courseName: 'Mern Stack',
//       enrollDate: 'Enrolled on 23 June, 2023',
//       time: 'Last Read: Learn Mern Stack',
//       module: '154',
//       completedModule: '50',
//     },

//     {
//       img: 'https://i.ibb.co/2qYdCVc/Mern-stark.png',
//       courseName: 'Mern Stack',
//       enrollDate: 'Enrolled on 23 June, 2023',
//       time: 'Last Read: Learn Mern Stack',
//       module: '154',
//       completedModule: '50',
//     },
//   ]

//   // Workshop Course Details (unchanged)
// const workshopCourseDetails: CourseDetails[] = [
//   {
//     img: 'https://i.ibb.co/sH2NrNp/image-112.png',
//     courseName: 'The Basics of UI/UX design principals',
//     startDate: '12 May, 2024',
//     startTime: '12 pm to 2 pm',
//     startIn: '02hr :01min',
//   },

//   {
//     img: 'https://i.ibb.co/S08f1yk/image-113.png',
//     courseName: 'The Basics of UI/UX design principals',
//     startDate: '12 May, 2024',
//     startTime: '12 pm to 2 pm',
//     startIn: '02hr :01min',
//   },

//   {
//     img: 'https://i.ibb.co/BGGkVfx/image-114.png',
//     courseName: 'The Basics of UI/UX design principals',
//     startDate: '12 May, 2024',
//     startTime: '12 pm to 2 pm',
//     startIn: '02hr :01min',
//   },

//   {
//     img: 'https://i.ibb.co/BGGkVfx/image-114.png',
//     courseName: 'The Basics of UI/UX design principals',
//     startDate: '12 May, 2024',
//     startTime: '12 pm to 2 pm',
//     startIn: '02hr :01min',
//   },
//   {
//     img: 'https://i.ibb.co/S08f1yk/image-113.png',
//     courseName: 'The Basics of UI/UX design principals',
//     startDate: '12 May, 2024',
//     startTime: '12 pm to 2 pm',
//     startIn: '02hr :01min',
//   },

//   {
//     img: 'https://i.ibb.co/BGGkVfx/image-114.png',
//     courseName: 'The Basics of UI/UX design principals',
//     startDate: '12 May, 2024',
//     startTime: '12 pm to 2 pm',
//     startIn: '02hr :01min',
//   },

//   {
//     img: 'https://i.ibb.co/BGGkVfx/image-114.png',
//     courseName: 'The Basics of UI/UX design principals',
//     startDate: '12 May, 2024',
//     startTime: '12 pm to 2 pm',
//     startIn: '02hr :01min',
//   },
// ]

//   const tabs = [
//     { tabName: 'All', link: 'tab1' },
//     { tabName: 'In progress', link: 'tab2' },
//     { tabName: 'Yet to start', link: 'tab3' },
//     { tabName: 'Completed', link: 'tab4' },
//   ]

//   return (
//     <div className="">
//       <CarouselComponent
//         tabs={tabs}
//         courseHeading={'Enrolled Courses'}
//         courseDetails={courseDetails}
//       />

//       <CarouselComponent
//         courseDetails={recommendedCourses}
//         tabs={tabs}
//         courseHeading={'Recommended Courses'}
//       />

//       <CarouselComponent
//         tabs={tabs}
//         courseHeading={'Workshop'}
//         courseDetails={workshopCourseDetails}
//       />
//     </div>
//   )
// }

// export default CourseDataProvider

// import React from 'react'
// import CarouselComponent from '../CarouselComponent/CarouselComponent'

// export interface CourseDetails {
//   img: any
//   courseName: string
//   enrollDate?: string
//   time?: string
//   module?: string
//   completedModule?: string
//   lecture?: string
//   duration?: string
//   startDate?: string
//   startTime?: string
//   startIn?: string
// }

// const EnrolledCourse = (): JSX.Element => {
//   // Course Details
// const courseDetails: CourseDetails[] = [
//   {
//     img: 'https://i.ibb.co/dcQynTD/ui-ux-design.png',
//     courseName: 'UI/UX design',
//     enrollDate: 'Enrolled on 12 may, 2023',
//     time: 'Last Read: Introduction of UI/UX',
//     module: '154',
//     completedModule: '12',
//   },

//   {
//     img: 'https://i.ibb.co/VBJZcwK/data-science.png',
//     courseName: 'Data Science',
//     enrollDate: 'Enrolled on 12 may, 2023',
//     time: 'Last Read: Learn Data Science',
//     module: '154',
//     completedModule: '10',
//   },

//   {
//     img: 'https://i.ibb.co/2qYdCVc/Mern-stark.png',
//     courseName: 'Mern Stack',
//     enrollDate: 'Enrolled on 23 June, 2023',
//     time: 'Last Read: Learn Mern Stack',
//     module: '154',
//     completedModule: '50',
//   },
//   {
//     img: 'https://i.ibb.co/dcQynTD/ui-ux-design.png',
//     courseName: 'UI/UX design',
//     enrollDate: 'Enrolled on 12 may, 2023',
//     time: 'Last Read: Introduction of UI/UX',
//     module: '154',
//     completedModule: '12',
//   },

//   {
//     img: 'https://i.ibb.co/VBJZcwK/data-science.png',
//     courseName: 'Data Science',
//     enrollDate: 'Enrolled on 12 may, 2023',
//     time: 'Last Read: Learn Data Science',
//     module: '154',
//     completedModule: '1',
//   },

//   {
//     img: 'https://i.ibb.co/2qYdCVc/Mern-stark.png',
//     courseName: 'Mern Stack',
//     enrollDate: 'Enrolled on 23 June, 2023',
//     time: 'Last Read: Learn Mern Stack',
//     module: '154',
//     completedModule: '50',
//   },

//   {
//     img: 'https://i.ibb.co/2qYdCVc/Mern-stark.png',
//     courseName: 'Mern Stack',
//     enrollDate: 'Enrolled on 23 June, 2023',
//     time: 'Last Read: Learn Mern Stack',
//     module: '154',
//     completedModule: '50',
//   },
// ]

//   const recomendedCourseDetails: CourseDetails[] = [
//     {
//       img: 'https://i.ibb.co/CsLGHy8/image-38.png',
//       courseName: 'UI/UX design',
//       lecture: '120 Lecture',
//       duration: '12hr duration',
//     },

//     {
//       img: 'https://i.ibb.co/CsLGHy8/image-38.png',
//       courseName: 'Data Science',
//       lecture: '120 Lecture',
//       duration: '12hr duration',
//     },

//     {
//       img: 'https://i.ibb.co/CsLGHy8/image-38.png',
//       courseName: 'Mern Stack',
//       lecture: '120 Lecture',
//       duration: '12hr duration',
//     },
//     {
//       img: 'https://i.ibb.co/CsLGHy8/image-38.png',
//       courseName: 'Mern Stack',
//       lecture: '120 Lecture',
//       duration: '12hr duration',
//     },
//     {
//       img: 'https://i.ibb.co/CsLGHy8/image-38.png',
//       courseName: 'Mern Stack',
//       lecture: '120 Lecture',
//       duration: '12hr duration',
//     },
//   ]

// const workshopCourseDetails: CourseDetails[] = [
//   {
//     img: 'https://i.ibb.co/sH2NrNp/image-112.png',
//     courseName: 'The Basics of UI/UX design principals',
//     startDate: '12 May, 2024',
//     startTime: '12 pm to 2 pm',
//     startIn: '02hr :01min',
//   },

//   {
//     img: 'https://i.ibb.co/S08f1yk/image-113.png',
//     courseName: 'The Basics of UI/UX design principals',
//     startDate: '12 May, 2024',
//     startTime: '12 pm to 2 pm',
//     startIn: '02hr :01min',
//   },

//   {
//     img: 'https://i.ibb.co/BGGkVfx/image-114.png',
//     courseName: 'The Basics of UI/UX design principals',
//     startDate: '12 May, 2024',
//     startTime: '12 pm to 2 pm',
//     startIn: '02hr :01min',
//   },

//   {
//     img: 'https://i.ibb.co/BGGkVfx/image-114.png',
//     courseName: 'The Basics of UI/UX design principals',
//     startDate: '12 May, 2024',
//     startTime: '12 pm to 2 pm',
//     startIn: '02hr :01min',
//   },
//   {
//     img: 'https://i.ibb.co/S08f1yk/image-113.png',
//     courseName: 'The Basics of UI/UX design principals',
//     startDate: '12 May, 2024',
//     startTime: '12 pm to 2 pm',
//     startIn: '02hr :01min',
//   },

//   {
//     img: 'https://i.ibb.co/BGGkVfx/image-114.png',
//     courseName: 'The Basics of UI/UX design principals',
//     startDate: '12 May, 2024',
//     startTime: '12 pm to 2 pm',
//     startIn: '02hr :01min',
//   },

//   {
//     img: 'https://i.ibb.co/BGGkVfx/image-114.png',
//     courseName: 'The Basics of UI/UX design principals',
//     startDate: '12 May, 2024',
//     startTime: '12 pm to 2 pm',
//     startIn: '02hr :01min',
//   },
// ]

//   //  const tabs = ["All", "In progress", "Yet to start", "Completed"];
//   const tabs = [
//     {
//       tabName: 'All',
//       link: 'tab1',
//     },
//     {
//       tabName: 'In progress',
//       link: 'tab2',
//     },
//     {
//       tabName: 'Yet to start',
//       link: 'tab3',
//     },
//     {
//       tabName: 'Completed',
//       link: 'tab4',
//     },
//   ]

//   return (
//     <div className="">
//       <CarouselComponent
//         tabs={tabs}
//         courseHeading={'Enrolled Courses'}
//         courseDetails={courseDetails}
//       ></CarouselComponent>

//       <CarouselComponent
//         courseDetails={recomendedCourseDetails}
//         tabs={tabs}
//         courseHeading={'Recommended Courses'}
//       ></CarouselComponent>

//       <CarouselComponent
//         tabs={tabs}
//         courseHeading={'Workshop'}
//         courseDetails={workshopCourseDetails}
//       ></CarouselComponent>
//       {/* ["All", "Upcoming workshop", "Attended"] */}
//     </div>
//   )
// }

// export default EnrolledCourse
