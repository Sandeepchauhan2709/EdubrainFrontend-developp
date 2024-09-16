import React from 'react'
import calender from '../../../../assets/calendar.svg'
import timer from '../../../../assets/timer-start.png'
import { FaPlay } from 'react-icons/fa'
import clock from '../../../../assets/clock.png'
import userIcon from '../../../../assets/user-square.png'
// import PropTypes from 'prop-types';

interface CourseDetails {
  img: any
  courseName: string
  lecture?: string
  duration?: string
  startDate?: string
  startTime?: string
  enrollDate?: string
  time?: string
  completedModule?: string
  module?: string
  startIn?: string
}

const CourseCard = ({ details }: { details: CourseDetails }): JSX.Element => {
  return (
    <div className="w-[318px] border border-neutral-55 rounded-2xl">
      <img className="rounded-t-2xl mb-2 " src={details?.img} alt="" />
      <div className="px-4 pb-2">
        <h1 className="text-lg dark:text-neutral-10 text-neutral-75 font-bold font-Roboto mb-[3px]">
          {details?.courseName}
        </h1>

        {details?.lecture !== undefined ? (
          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <img className="invert dark:invert-0" src={userIcon} alt="" />
                <p className="text-base dark:text-neutral-40 text-neutral-80 font-light font-Roboto">
                  {details?.lecture}
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
              <button className="dark:text-neutral-10 text-neutral-75 text-base px-4 py-3 dark:bg-neutral-85 dark:border-none bg-none border border-neutral-75  rounded-xl w-1/2">
                View Detail
              </button>

              <button className="text-neutral-10 text-base px-4 py-3 bg-primary-60 hover:bg-blue-700 transition duration-300 rounded-xl w-1/2">
                Enroll Now!
              </button>
            </div>
          </div>
        ) : (
          <div>
            {details?.startDate !== undefined ? (
              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-2">
                  <img
                    className="invert dark:invert-0 w-6"
                    src={calender}
                    alt=""
                  />
                  <p className="text-base dark:text-neutral-40 text-neutral-80 font-light font-Roboto">
                    {details?.startDate}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <img className="invert dark:invert-0" src={clock} alt="" />
                  <p className="text-base dark:text-neutral-40 text-neutral-80 font-light font-Roboto">
                    {details.startTime}
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <img
                    className="w-5 invert dark:invert-0"
                    src={calender}
                    alt=""
                  />
                  <p className="text-[12px] dark:text-neutral-10 text-neutral-75/60 font-normal font-Roboto">
                    {details?.enrollDate}
                  </p>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <img className="invert dark:invert-0" src={timer} alt="" />
                  <p className="text-base dark:text-neutral-10 text-neutral-100 font-normal font-Roboto">
                    {details.time}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-2 mb-4">
                  <div
                    className={`flex h-2  w-[300px] mx-auto items-center justify-center rounded-full  dark:bg-neutral-55 bg-neutral-35`}
                  >
                    <div
                      style={{ width: `${details?.completedModule}%` }}
                      className={`transition-width mr-auto h-2 w-0 rounded-full  bg-primary-55 duration-500`}
                    ></div>
                  </div>
                  <p className="text-base text-neutral-10 font-normal font-Roboto">
                    {details.completedModule ?? 0}%
                  </p>
                </div>
              </div>
            )}

            {details?.startIn !== undefined ? (
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-base dark:text-neutral-10 text-neutral-75 font-normal font-Roboto mb-[3px]">
                    It will start in
                  </h1>
                  <p className="text-[18px] dark:text-neutral-10 text-neutral-75 font-bold font-Roboto">
                    {details?.startIn}
                  </p>
                </div>

                <button className="text-neutral-10 text-base px-9 py-3 bg-primary-60 hover:bg-blue-700 transition duration-300 rounded-xl">
                  View Details
                </button>
              </div>
            ) : (
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-base dark:text-neutral-10 text-neutral-75 font-bold font-Roboto mb-[3px]">
                    <span className="text-xs sm:text-sm md:text-base">
                      {details.completedModule}/{details.module}
                    </span>
                  </h1>
                  <p className="text-[12px] dark:text-neutral-10 text-neutral-75 font-normal font-Roboto">
                    Completed lectures
                  </p>
                </div>
                <button className="flex gap-2 items-center justify-center text-neutral-10 text-base px-9 py-3 bg-primary-60 hover:bg-blue-700 transition duration-300 rounded-xl">
                  Resume
                  <FaPlay />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default CourseCard
