// import React from 'react'
// import calender from '../../../../assets/calendar.svg'
// import timer from '../../../../assets/timer-start.png'
// import { FaPlay } from 'react-icons/fa'
// import clock from '../../../../assets/clock.png'
// import userIcon from '../../../../assets/user-square.png'
// import { useNavigate } from "react-router-dom";

// interface CourseDetails {
//   img: string
//   courseName: string
//   lecture?: string
//   duration?: string
//   startDate?: string
//   startTime?: string
//   enrollDate?: string
//   time?: string
//   completedModule?: string
//   module?: string
//   startIn?: string
//   isEnrolled?: boolean
//   slug: string
// }

// const CourseCard = ({ details }: { details: CourseDetails }): JSX.Element => {

//   const navigate = useNavigate();
//   const handleClickCourse = () : void => {
//     navigate(`/lecture/${details.slug}`);
//   };
//   const handleClickCourseDetailsPage = () : void => {
//     navigate(`/course/${details.slug}`);
//   };

//   if (details.isEnrolled) {
//     // Enrolled course card
//     return (
//       <div className="w-[318px] border border-neutral-55 rounded-2xl">
//         <img className="rounded-t-2xl mb-2 " src={details.img} alt="" />
//         <div className="px-4 pb-2">
//           <h1 className="text-lg dark:text-neutral-10 text-neutral-75 font-bold font-Roboto mb-[3px]">
//             {details.courseName}
//           </h1>
//           <div>
//             <div className="flex items-center gap-2 mb-4">
//               <img className="w-5 invert dark:invert-0" src={calender} alt="" />
//               <p className="text-[12px] dark:text-neutral-10 text-neutral-75/60 font-normal font-Roboto">
//                 {details.enrollDate}
//               </p>
//             </div>
//             <div className="flex items-center gap-2 mb-2">
//               <img className="invert dark:invert-0" src={timer} alt="" />
//               <p className="text-base dark:text-neutral-10 text-neutral-100 font-normal font-Roboto">
//                 {details.time}
//               </p>
//             </div>
//             <div className="flex items-center justify-between gap-2 mb-4">
//               <div className={`flex h-2 w-[300px] mx-auto items-center justify-center rounded-full dark:bg-neutral-55 bg-neutral-35`}>
//                 <div
//                   style={{ width: `${details.completedModule}%` }}
//                   className={`transition-width mr-auto h-2 w-0 rounded-full bg-primary-55 duration-500`}
//                 ></div>
//               </div>
//               <p className="text-base text-neutral-10 font-normal font-Roboto">
//                 {details.completedModule ?? 0}%
//               </p>
//             </div>
//             <div className="flex justify-between items-center">
//               <div>
//                 <h1 className="text-base dark:text-neutral-10 text-neutral-75 font-bold font-Roboto mb-[3px]">
//                   <span className="text-xs sm:text-sm md:text-base">
//                     {details.completedModule}/{details.module}
//                   </span>
//                 </h1>
//                 <p className="text-[12px] dark:text-neutral-10 text-neutral-75 font-normal font-Roboto">
//                   Completed lectures
//                 </p>
//               </div>
//               <button
//                onClick={handleClickCourse}
//               className="flex gap-2 items-center justify-center text-neutral-10 text-base px-9 py-3 bg-primary-60 hover:bg-blue-700 transition duration-300 rounded-xl">
//                 Resume
//                 <FaPlay />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   } else {
//     // Recommended course card
//     return (
//       <div className="w-[318px] border border-neutral-55 rounded-2xl">
//         <img className="rounded-t-2xl mb-2 " src={details.img} alt="" />
//         <div className="px-4 pb-2">
//           <h1 className="text-lg dark:text-neutral-10 text-neutral-75 font-bold font-Roboto mb-[3px]">
//             {details.courseName}
//           </h1>
//           <div>
//             <div className="flex justify-between items-center mb-2">
//               <div className="flex items-center gap-2">
//                 <img className="invert dark:invert-0" src={userIcon} alt="" />
//                 <p className="text-base dark:text-neutral-40 text-neutral-80 font-light font-Roboto">
//                   {details.lecture}
//                 </p>
//               </div>
//               <div className="flex items-center gap-2">
//                 <img className="invert dark:invert-0" src={clock} alt="" />
//                 <p className="text-base dark:text-neutral-40 text-neutral-80 font-light font-Roboto">
//                   {details.duration}
//                 </p>
//               </div>
//             </div>
//             <div className="flex gap-3 items-center w-full">
//               <button
//               onClick={handleClickCourseDetailsPage}
//               className="dark:text-neutral-10 text-neutral-75 text-base px-4 py-3 dark:bg-neutral-85 dark:border-none bg-none border border-neutral-75 rounded-xl w-1/2">
//                 View Detail
//               </button>
//               <button className="text-neutral-10 text-base px-4 py-3 bg-primary-60 hover:bg-blue-700 transition duration-300 rounded-xl w-1/2">
//                 Enroll Now!
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default CourseCard

import React from 'react'
import calender from '../../../../assets/calendar.svg'
import timer from '../../../../assets/timer-start.png'
import { FaPlay } from 'react-icons/fa'
import clock from '../../../../assets/clock.png'
import userIcon from '../../../../assets/user-square.png'
import { useNavigate } from 'react-router-dom'
import { handleGetUser } from '../../../../api/user'
import { useQuery } from '@tanstack/react-query'
// import axios from 'axios'
// import API from '../../../../api/index'
// import toast from 'react-hot-toast'

interface CourseDetails {
  img: string
  courseName: string
  lecture?: string
  overallProgress?: string
  startDate?: string
  startTime?: string
  enrollDate?: string
  lastRead?: string
  completedLecture?: string
  totalLecture?: string
  duration?: string
  startIn?: string
  isEnrolled: boolean
  slug: string
  enrolledOrRecommended?: boolean
  courseDetailsId?: string
  price?: number
}

const CourseCard = ({ details }: { details: CourseDetails }): JSX.Element => {
  const navigate = useNavigate()
  const { data: userData } = useQuery({
    queryKey: ['user'],
    queryFn: handleGetUser,
  })

  const user: any = userData
  const useremail: string = user?.email || ''

  const handleClickCourse = (): void => {
    navigate(`/lecture/${details.slug}`)
  }
  const handleClickCourseDetailsPage = (): void => {
    navigate(`/course/${details.slug}`)
  }
  // const [ setIsEnrolling] = useState(false)

  // const handleEnroll = async (): Promise<void> => {
  //   try {
  //     const enrollmentData = {
  //       courseDetailsId: details.courseDetailsId,
  //       paymentAmount: details.price || 0,
  //       paymentMethod: 'default' // You can modify this based on your payment implementation
  //     }
  //     console.log(enrollmentData)
  //     const response = await axios.post(
  //       API.enroll,
  //       enrollmentData,
  //       {
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         withCredentials: true // Important for sending cookies if using session-based auth
  //       }
  //     )

  //     if (response.data.success) {
  //       // Show success message
  //       toast.success('Successfully enrolled in the course!')
  //       // Update local state
  //       details.isEnrolled = true
  //       // Optionally redirect to the course page
  //       navigate(`/lecture/${details.slug}`)
  //     }
  //   } catch (error: any) {
  //     // Handle enrollment errors
  //     const errorMessage = error.response?.data?.message || 'Failed to enroll in course'
  //     toast.error(`${errorMessage}`)
  //     console.error('Enrollment error:', error)
  //   }
  // }

  const handleEnroll = (coursename: string): void => {
    // console.log(`https://pages.razorpay.com/pl_PCndOh475OhoA1/view?product=powerbi&email=${useremail}`)
    window.location.href = `https://pages.razorpay.com/pl_PCndOh475OhoA1/view?product=${coursename}&email=${useremail}`
  }
  // console.log(details);
  if (details.enrolledOrRecommended) {
    // Enrolled course card
    return (
      <div className="w-[318px] border border-neutral-55 rounded-2xl">
        <img className="rounded-t-2xl mb-2 " src={details.img} alt="" />
        <div className="px-4 pb-2">
          <h1 className="text-lg dark:text-neutral-10 text-neutral-75 font-bold font-Roboto mb-[3px]">
            {details.courseName}
          </h1>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img className="w-5 invert dark:invert-0" src={calender} alt="" />
              <p className="text-[12px] dark:text-neutral-10 text-neutral-75/60 font-normal font-Roboto">
                {details.enrollDate}
              </p>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <img className="invert dark:invert-0" src={timer} alt="" />
              <p className="text-base dark:text-neutral-10 text-neutral-100 font-normal font-Roboto">
                {details.lastRead}
              </p>
            </div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <div
                className={`flex h-2 w-[300px] mx-auto items-center justify-center rounded-full dark:bg-neutral-55 bg-neutral-35`}
              >
                <div
                  style={{ width: `${details.overallProgress}%` }}
                  className={`transition-width mr-auto h-2 w-0 rounded-full bg-primary-55 duration-500`}
                ></div>
              </div>
              <p className="text-base text-neutral-10 font-normal font-Roboto">
                {details.overallProgress ?? 0}%
              </p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-base dark:text-neutral-10 text-neutral-75 font-bold font-Roboto mb-[3px]">
                  <span className="text-xs sm:text-sm md:text-base">
                    {details.completedLecture}/{details.totalLecture}
                  </span>
                </h1>
                <p className="text-[12px] dark:text-neutral-10 text-neutral-75 font-normal font-Roboto">
                  Completed lectures
                </p>
              </div>
              <button
                onClick={handleClickCourse}
                className="flex gap-2 items-center justify-center text-neutral-10 text-base px-9 py-3 bg-primary-60 hover:bg-blue-700 transition duration-300 rounded-xl"
              >
                Resume
                <FaPlay />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    // Recommended course card
    return (
      <div className="w-[318px] border border-neutral-55 rounded-2xl">
        <img className="rounded-t-2xl mb-2 " src={details.img} alt="" />
        <div className="px-4 pb-2">
          <h1 className="text-lg dark:text-neutral-10 text-neutral-75 font-bold font-Roboto mb-[3px]">
            {details.courseName}
          </h1>
          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <img className="invert dark:invert-0" src={userIcon} alt="" />
                <p className="text-base dark:text-neutral-40 text-neutral-80 font-light font-Roboto">
                  {details.lecture}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <img className="invert dark:invert-0" src={clock} alt="" />
                <p className="text-base dark:text-neutral-40 text-neutral-80 font-light font-Roboto">
                  {details.duration}
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-center w-full">
              <button
                onClick={handleClickCourseDetailsPage}
                className="dark:text-neutral-10 text-neutral-75 text-base px-4 py-3 dark:bg-neutral-85 dark:border-none bg-none border border-neutral-75 rounded-xl w-1/2"
              >
                View Detail
              </button>

              {/* <button
  className={`text-neutral-10 text-base px-4 py-3 rounded-xl w-1/2 ${
    details.isEnrolled
      ? 'bg-neutral-55 cursor-not-allowed'
      : 'bg-primary-60 hover:bg-blue-700 transition duration-300'
  }`}
  disabled={details.isEnrolled}
  onClick={(e) => {
    handleEnroll().catch(error => {
      console.error('Enrollment error:', error);
    });
  }}
>
  {details.isEnrolled ? 'Enrolled' : 'Enroll Now!'}
</button> */}

              <button
                className={`text-neutral-10 text-base px-4 py-3 rounded-xl w-1/2 ${
                  details.isEnrolled
                    ? 'bg-neutral-55 cursor-not-allowed'
                    : 'bg-primary-60 hover:bg-blue-700 transition duration-300'
                }`}
                disabled={details.isEnrolled}
                onClick={() => {
                  handleEnroll(details.courseName)
                }}
              >
                {details.isEnrolled ? 'Enrolled' : 'Enroll Now!'}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CourseCard

// contains workshop card when required can be extracted from the bellow code

// import React from 'react'
// import calender from '../../../../assets/calendar.svg'
// import timer from '../../../../assets/timer-start.png'
// import { FaPlay } from 'react-icons/fa'
// import clock from '../../../../assets/clock.png'
// import userIcon from '../../../../assets/user-square.png'
// // import PropTypes from 'prop-types';
// import { useNavigate } from "react-router-dom";
// interface CourseDetails {
//   img: any
//   courseName: string
//   lecture?: string
//   duration?: string
//   startDate?: string
//   startTime?: string
//   enrollDate?: string
//   time?: string
//   completedModule?: string
//   module?: string
//   startIn?: string
//   slug?: string
//   isEnrolled?: boolean
// }

// const CourseCard = ({ details }: { details: CourseDetails }): JSX.Element => {

// const navigate = useNavigate();
// const handleClickCourse = () : void => {
//   navigate(`/lecture/${details.slug}`);
// };

//   return (
//     <div className="w-[318px] border border-neutral-55 rounded-2xl">
//       <img className="rounded-t-2xl mb-2 " src={details?.img} alt="" />
//       <div className="px-4 pb-2">
//         <h1 className="text-lg dark:text-neutral-10 text-neutral-75 font-bold font-Roboto mb-[3px]">
//           {details?.courseName}
//         </h1>

//         {details?.lecture !== undefined ? (
//           <div>
//             <div className="flex justify-between items-center mb-2">
//               <div className="flex items-center gap-2">
//                 <img className="invert dark:invert-0" src={userIcon} alt="" />
//                 <p className="text-base dark:text-neutral-40 text-neutral-80 font-light font-Roboto">
//                   {details?.lecture}
//                 </p>
//               </div>

//               <div className="flex items-center gap-2">
//                 <img className="invert dark:invert-0" src={clock} alt="" />
//                 <p className="text-base dark:text-neutral-40 text-neutral-80 font-light font-Roboto">
//                   {details.duration}
//                 </p>
//               </div>
//             </div>

//             <div className="flex gap-3 items-center w-full">
//               <button className="dark:text-neutral-10 text-neutral-75 text-base px-4 py-3 dark:bg-neutral-85 dark:border-none bg-none border border-neutral-75  rounded-xl w-1/2">
//                 View Detail
//               </button>

//               <button className="text-neutral-10 text-base px-4 py-3 bg-primary-60 hover:bg-blue-700 transition duration-300 rounded-xl w-1/2">
//                 Enroll Now!
//               </button>
//             </div>
//           </div>
//         ) : (
//           <div>
//             {details?.startDate !== undefined ? (
//               <div className="flex justify-between items-center mb-5">
//                 <div className="flex items-center gap-2">
//                   <img
//                     className="invert dark:invert-0 w-6"
//                     src={calender}
//                     alt=""
//                   />
//                   <p className="text-base dark:text-neutral-40 text-neutral-80 font-light font-Roboto">
//                     {details?.startDate}
//                   </p>
//                 </div>

//                 <div className="flex items-center gap-2">
//                   <img className="invert dark:invert-0" src={clock} alt="" />
//                   <p className="text-base dark:text-neutral-40 text-neutral-80 font-light font-Roboto">
//                     {details.startTime}
//                   </p>
//                 </div>
//               </div>
//             ) : (
//               <div>
//                 <div className="flex items-center gap-2 mb-4">
//                   <img
//                     className="w-5 invert dark:invert-0"
//                     src={calender}
//                     alt=""
//                   />
//                   <p className="text-[12px] dark:text-neutral-10 text-neutral-75/60 font-normal font-Roboto">
//                     {details?.enrollDate}
//                   </p>
//                 </div>

//                 <div className="flex items-center gap-2 mb-2">
//                   <img className="invert dark:invert-0" src={timer} alt="" />
//                   <p className="text-base dark:text-neutral-10 text-neutral-100 font-normal font-Roboto">
//                     {details.time}
//                   </p>
//                 </div>

//                 <div className="flex items-center justify-between gap-2 mb-4">
//                   <div
//                     className={`flex h-2  w-[300px] mx-auto items-center justify-center rounded-full  dark:bg-neutral-55 bg-neutral-35`}
//                   >
//                     <div
//                       style={{ width: `${details?.completedModule}%` }}
//                       className={`transition-width mr-auto h-2 w-0 rounded-full  bg-primary-55 duration-500`}
//                     ></div>
//                   </div>
//                   <p className="text-base text-neutral-10 font-normal font-Roboto">
//                     {details.completedModule ?? 0}%
//                   </p>
//                 </div>
//               </div>
//             )}

//             {details?.startIn !== undefined ? (
//               <div className="flex justify-between items-center">
//                 <div>
//                   <h1 className="text-base dark:text-neutral-10 text-neutral-75 font-normal font-Roboto mb-[3px]">
//                     It will start in
//                   </h1>
//                   <p className="text-[18px] dark:text-neutral-10 text-neutral-75 font-bold font-Roboto">
//                     {details?.startIn}
//                   </p>
//                 </div>

//                 <button className="text-neutral-10 text-base px-9 py-3 bg-primary-60 hover:bg-blue-700 transition duration-300 rounded-xl">
//                   View Details
//                 </button>
//               </div>
//             ) : (
//               <div className="flex justify-between items-center">
//                 <div>
//                   <h1 className="text-base dark:text-neutral-10 text-neutral-75 font-bold font-Roboto mb-[3px]">
//                     <span className="text-xs sm:text-sm md:text-base">
//                       {details.completedModule}/{details.module}
//                     </span>
//                   </h1>
//                   <p className="text-[12px] dark:text-neutral-10 text-neutral-75 font-normal font-Roboto">
//                     Completed lectures
//                   </p>
//                 </div>
//                 <button
//       onClick={handleClickCourse}
//       className="flex gap-2 items-center justify-center text-neutral-10 text-base px-9 py-3 bg-primary-60 hover:bg-blue-700 transition duration-300 rounded-xl"
//     >
//       Resume
//       <FaPlay />
//     </button>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default CourseCard
