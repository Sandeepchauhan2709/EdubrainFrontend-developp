import React, { useState } from 'react'
import CourseCard from './CourseCard'
import type { CourseDetails } from '../CourseDataProvider/CourseDataProvider'
import CarouselBtn from './CarouselBtn'

interface Tab {
  tabName: string
  link: string
}

interface CoursePageProps {
  courseDetails: CourseDetails[]
  courseHeading: string
  tabs: Tab[]
}

interface Tab {
  link: string
  tabName: string
}

const CarouselComponent = ({
  courseDetails,
  courseHeading,
  tabs,
}: CoursePageProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].link)

  const handleTabChange = (tab: string): void => {
    setActiveTab(tab)
  }

  const [currentSlider, setCurrentSlider] = useState<number>(0)

  const isSmallScreen: boolean = window.innerWidth <= 768
  const isMediumScreen: boolean = window.innerWidth >= 1064

  const prevSlider = (): void => {
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? 0 : currentSlider - 1
    )
  }

  const nextSlider = (): void => {
    setCurrentSlider((currentSlider) =>
      currentSlider ===
      courseDetails.length - (isSmallScreen ? 1 : isMediumScreen ? 3 : 3)
        ? 0
        : currentSlider + 1
    )
  }

  return (
    <div className="">
      <div className="mt-16">
        {/* Heading and horizontal line */}
        <div className="">
          <h1 className="text-[24px] dark:text-neutral-10 text-neutral-75 font-Montserrat font-semibold mb-4">
            {courseHeading}
          </h1>
          <div className="dark:bg-neutral-55 bg-neutral-75 opacity-10 w-full h-[1px]"></div>
        </div>

        <div className="mt-6 ">
          {/* Tabs and carousel btn */}
          <div className="flex justify-between items-center w-full gap-[10px]">
            {/* Tabs button here */}
            {/* <div className="flex items-center gap-4 overflow-x-scroll w-4/5">
                <button onClick={() => handleTabChange("tab1")} className={activeTab === "tab1" ? ' rounded-lg h-9 py-2 px-5 border border-neutral-40 flex justify-center items-center text-neutral-10 flex-shrink-0' : "h-9 py-2 px-5 rounded-lg border border-neutral-65 flex justify-center items-center text-neutral-10 flex-shrink-0"}>All</button>

                <button onClick={() => handleTabChange("tab2")} className={activeTab === "tab2" ? ' rounded-lg h-9 py-2 px-5 border border-neutral-40 flex justify-center items-center text-neutral-10 flex-shrink-0' : "h-9 py-2 px-5 rounded-lg border border-neutral-65 flex justify-center items-center text-neutral-10 flex-shrink-0"}>In progress</button>

                <button onClick={() => handleTabChange("tab3")} className={activeTab === "tab3" ? ' rounded-lg h-9 py-2 px-5 border border-neutral-40 flex justify-center items-center text-neutral-10 flex-shrink-0' : "h-9 py-2 px-5 rounded-lg border border-neutral-65 flex justify-center items-center text-neutral-10 flex-shrink-0"}>Yet to start</button>

                <button onClick={() => handleTabChange("tab4")} className={activeTab === "tab4" ? ' rounded-lg h-9 py-2 px-5 border border-neutral-40 flex justify-center items-center text-neutral-10 flex-shrink-0' : "h-9 py-2 px-5 rounded-lg border border-neutral-65 flex justify-center items-center text-neutral-10 flex-shrink-0"}>Completed</button>
            </div> */}

            {tabs.length > 0 && (
              <div className="flex items-center gap-4 overflow-x-scroll w-4/5">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      handleTabChange(tab.link)
                    }}
                    className={
                      activeTab === tab.link
                        ? 'rounded-lg h-9 py-2 px-5 border border-neutral-40 flex justify-center items-center dark:text-neutral-10 text-neutral-75 flex-shrink-0'
                        : 'h-9 py-2 px-5 rounded-lg border border-neutral-65 flex justify-center items-center dark:text-neutral-10 text-neutral-75 flex-shrink-0'
                    }
                  >
                    {tab.tabName}
                  </button>
                ))}
              </div>
            )}

            {/* Carousel Button */}
            <div className="w-[20%] flex justify-end">
              <CarouselBtn
                slideName={'enrolledCourse'}
                btnpressprev={prevSlider}
                btnpressnext={nextSlider}
              />
            </div>
          </div>

          {/* Tabs content Here */}
          <div className="mt-8">
            <div className="">
              {activeTab === 'tab1' && (
                <div className="flex items-center min-h-[300px]">
                  <div className="overflow-hidden">
                    <div className="flex justify-between items-center">
                      <div
                        className="ease-linear duration-300 flex gap-6"
                        style={{
                          transform: `translateX(-${currentSlider * 342}px)`,
                        }}
                      >
                        {courseDetails.length > 0 &&
                          courseDetails.map((cd, ind) => (
                            <CourseCard key={ind} details={cd} />
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="">
                {activeTab === 'tab2' && (
                  <div className="flex justify-center items-center min-h-[300px]">
                    <h1 className="text-white">This is tab2</h1>
                  </div>
                )}
              </div>

              {activeTab === 'tab3' && (
                <div className="flex justify-center items-center min-h-[300px]">
                  <h1 className="text-white">This is tab3</h1>
                </div>
              )}

              {activeTab === 'tab4' && (
                <div className="flex justify-center items-center min-h-[300px]">
                  <h1 className="text-white">This is tab4</h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarouselComponent
