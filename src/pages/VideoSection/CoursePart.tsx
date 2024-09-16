import arrowUp from '../../assets/icons/arrow-up.svg'
import { useState, type JSX } from 'react'
import React  from 'react';
import { motion, AnimatePresence } from 'framer-motion'
// import video from "../../assets/coursevideo.mp4"

interface CoursePartProps {
  handleVideoChange: (url: string) => void
  i: number
  progress: string
  course_name: string
  sections: Array<{
    section_name: string
    section_lectures: Array<
       {
          isActive: boolean
          lecture_name: string
          domain_url:string
          file_name:string
        }
    >
  }>
}


const CoursePart = (props: CoursePartProps): JSX.Element => {
 
  const [isActive, setIsActive] = useState(false)

  // console.log(props.handleVideoChange);
  return (
    <motion.div className="flex flex-col justify-between gap-8 items-start border-foreground-light border-opacity-20 dark:border-opacity-100 border dark:border-neutral-90 rounded-[20px] p-6 w-full overflow-hidden">
      <div className="flex flex-col gap-1 w-full">
        <div className="flex items-center justify-between w-full">
          <span className="body-text-md text-foreground-light/80  dark:text-neutral-20">
            Part {props.i + 1}
          </span> 
          <button
            onClick={() => {
              setIsActive((prev) => !prev)
            }}
          >
            <motion.img
              layout
              src={arrowUp}
              alt="arrow up"
              className="transition-transform invert dark:invert-0"
              style={{
                transform: !isActive ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            />
          </button>
        </div>
        <h3 className="h3 text-foreground-light dark:text-neutral-10 max-w-[80%]">
          {props.course_name}
        </h3>
        {/* indicator */}
        <div className="flex justify-between items-center gap-6 w-full mt-2">
          <div className="flex-grow bg-foreground-light/80 dark:bg-neutral-90 h-1.5 w-full rounded-full relative">
            <div
              style={{
                width: props.progress,
              }}
              className=" dark:bg-primary-30 bg-primary-50 h-1.5 rounded-full absolute top-0 left-0 bottom-0"
            />
          </div>
          <span className="font-Montserrat text-[20px] leading-[30px] text-foreground-light dark:text-neutral-10">
            {props.progress}
          </span>
        </div>
      </div>

      {isActive && (
        <AnimatePresence>
          <motion.div
            initial={{
              height: 0,
            }}
            animate={{
              height: 'auto',
            }}
            exit={{
              height: 0,
            }}
            className="flex flex-col gap-6 w-full"
          >
            {props.sections.map((section, idx) => (
              <div key={idx} className="flex w-full flex-col gap-3">
                <span className="body-text-md text-foreground-light dark:text-neutral-10">
                  {section.section_name}
                </span>
                <div className="flex flex-col gap-2 w-full">
                  {section.section_lectures.map((topic, index) => (
                    <button
                      onClick={() => {const lecture= (topic as any).lecture_cloud_link;
                         props.handleVideoChange(lecture.domain_url+lecture.bucket+"/"+lecture.folder_name+"/"+lecture.file_name+".mp4")}}
                      key={index}
                      className={`w-full body-text-sm text-foreground-light dark:text-neutral-10 flex justify-between px-4 py-3 rounded-xl ${
                        index === 0 && idx === 0 && props.i === 0
                          ? 'dark:bg-neutral-95 bg-foreground-light/10'
                          : 'border dark:border-neutral-90 border-foreground-light/20'
                      }`}
                    >
                      {('lecture_name' in topic) && <span>{topic.lecture_name}</span>}
                      {/* <span>{topic.time}</span> */}
                    </button>
                  ))
                  }
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      )}
    </motion.div>
  )
}
export default CoursePart
