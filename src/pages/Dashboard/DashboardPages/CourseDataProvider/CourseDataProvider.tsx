import React from 'react'
import CarouselComponent from '../CarouselComponent/CarouselComponent'

export interface CourseDetails {
  img: any
  courseName: string
  enrollDate?: string
  time?: string
  module?: string
  completedModule?: string
  lecture?: string
  duration?: string
  startDate?: string
  startTime?: string
  startIn?: string
}

const EnrolledCourse = (): JSX.Element => {
  // Course Details
  const courseDetails: CourseDetails[] = [
    {
      img: 'https://i.ibb.co/dcQynTD/ui-ux-design.png',
      courseName: 'UI/UX design',
      enrollDate: 'Enrolled on 12 may, 2023',
      time: 'Last Read: Introduction of UI/UX',
      module: '154',
      completedModule: '12',
    },

    {
      img: 'https://i.ibb.co/VBJZcwK/data-science.png',
      courseName: 'Data Science',
      enrollDate: 'Enrolled on 12 may, 2023',
      time: 'Last Read: Learn Data Science',
      module: '154',
      completedModule: '10',
    },

    {
      img: 'https://i.ibb.co/2qYdCVc/Mern-stark.png',
      courseName: 'Mern Stack',
      enrollDate: 'Enrolled on 23 June, 2023',
      time: 'Last Read: Learn Mern Stack',
      module: '154',
      completedModule: '50',
    },
    {
      img: 'https://i.ibb.co/dcQynTD/ui-ux-design.png',
      courseName: 'UI/UX design',
      enrollDate: 'Enrolled on 12 may, 2023',
      time: 'Last Read: Introduction of UI/UX',
      module: '154',
      completedModule: '12',
    },

    {
      img: 'https://i.ibb.co/VBJZcwK/data-science.png',
      courseName: 'Data Science',
      enrollDate: 'Enrolled on 12 may, 2023',
      time: 'Last Read: Learn Data Science',
      module: '154',
      completedModule: '1',
    },

    {
      img: 'https://i.ibb.co/2qYdCVc/Mern-stark.png',
      courseName: 'Mern Stack',
      enrollDate: 'Enrolled on 23 June, 2023',
      time: 'Last Read: Learn Mern Stack',
      module: '154',
      completedModule: '50',
    },

    {
      img: 'https://i.ibb.co/2qYdCVc/Mern-stark.png',
      courseName: 'Mern Stack',
      enrollDate: 'Enrolled on 23 June, 2023',
      time: 'Last Read: Learn Mern Stack',
      module: '154',
      completedModule: '50',
    },
  ]

  const recomendedCourseDetails: CourseDetails[] = [
    {
      img: 'https://i.ibb.co/CsLGHy8/image-38.png',
      courseName: 'UI/UX design',
      lecture: '120 Lecture',
      duration: '12hr duration',
    },

    {
      img: 'https://i.ibb.co/CsLGHy8/image-38.png',
      courseName: 'Data Science',
      lecture: '120 Lecture',
      duration: '12hr duration',
    },

    {
      img: 'https://i.ibb.co/CsLGHy8/image-38.png',
      courseName: 'Mern Stack',
      lecture: '120 Lecture',
      duration: '12hr duration',
    },
    {
      img: 'https://i.ibb.co/CsLGHy8/image-38.png',
      courseName: 'Mern Stack',
      lecture: '120 Lecture',
      duration: '12hr duration',
    },
    {
      img: 'https://i.ibb.co/CsLGHy8/image-38.png',
      courseName: 'Mern Stack',
      lecture: '120 Lecture',
      duration: '12hr duration',
    },
  ]

  const workshopCourseDetails: CourseDetails[] = [
    {
      img: 'https://i.ibb.co/sH2NrNp/image-112.png',
      courseName: 'The Basics of UI/UX design principals',
      startDate: '12 May, 2024',
      startTime: '12 pm to 2 pm',
      startIn: '02hr :01min',
    },

    {
      img: 'https://i.ibb.co/S08f1yk/image-113.png',
      courseName: 'The Basics of UI/UX design principals',
      startDate: '12 May, 2024',
      startTime: '12 pm to 2 pm',
      startIn: '02hr :01min',
    },

    {
      img: 'https://i.ibb.co/BGGkVfx/image-114.png',
      courseName: 'The Basics of UI/UX design principals',
      startDate: '12 May, 2024',
      startTime: '12 pm to 2 pm',
      startIn: '02hr :01min',
    },

    {
      img: 'https://i.ibb.co/BGGkVfx/image-114.png',
      courseName: 'The Basics of UI/UX design principals',
      startDate: '12 May, 2024',
      startTime: '12 pm to 2 pm',
      startIn: '02hr :01min',
    },
    {
      img: 'https://i.ibb.co/S08f1yk/image-113.png',
      courseName: 'The Basics of UI/UX design principals',
      startDate: '12 May, 2024',
      startTime: '12 pm to 2 pm',
      startIn: '02hr :01min',
    },

    {
      img: 'https://i.ibb.co/BGGkVfx/image-114.png',
      courseName: 'The Basics of UI/UX design principals',
      startDate: '12 May, 2024',
      startTime: '12 pm to 2 pm',
      startIn: '02hr :01min',
    },

    {
      img: 'https://i.ibb.co/BGGkVfx/image-114.png',
      courseName: 'The Basics of UI/UX design principals',
      startDate: '12 May, 2024',
      startTime: '12 pm to 2 pm',
      startIn: '02hr :01min',
    },
  ]

  //  const tabs = ["All", "In progress", "Yet to start", "Completed"];
  const tabs = [
    {
      tabName: 'All',
      link: 'tab1',
    },
    {
      tabName: 'In progress',
      link: 'tab2',
    },
    {
      tabName: 'Yet to start',
      link: 'tab3',
    },
    {
      tabName: 'Completed',
      link: 'tab4',
    },
  ]

  return (
    <div className="">
      <CarouselComponent
        tabs={tabs}
        courseHeading={'Enrolled Courses'}
        courseDetails={courseDetails}
      ></CarouselComponent>

      <CarouselComponent
        courseDetails={recomendedCourseDetails}
        tabs={tabs}
        courseHeading={'Recommended Courses'}
      ></CarouselComponent>

      <CarouselComponent
        tabs={tabs}
        courseHeading={'Workshop'}
        courseDetails={workshopCourseDetails}
      ></CarouselComponent>
      {/* ["All", "Upcoming workshop", "Attended"] */}
    </div>
  )
}

export default EnrolledCourse
