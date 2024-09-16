import React, { useState, useRef } from 'react'
import play from '../../../assets/images/arrow-right.svg'

const Playlist: React.FC = () => {
  return (
    <>
      <div className="flex justify-between gap-1">
        <div className="flex gap-1 cursor-pointer">
          <img src={play} alt="play" />
          <span className="text-white text-[16px] max-sm:text-[14px]">
            UX Design vs UI Design
          </span>
        </div>
        <div className="flex gap-10 max-sm:gap-1">
          <div className="bg-[#246BFD1A] rounded-xl">
            <span className="text-[#246BFD] text-[10px] p-4 cursor-pointer">
              Preview
            </span>
          </div>
          <div>
            <span className="text-white max-sm:hidden">9:52</span>
          </div>
        </div>
      </div>
      <div>
        <hr className="bg-white" />
      </div>
    </>
  )
}

const Curriculum: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)
  const [activeIndex1, setActiveIndex1] = useState<number | null>(0)
  const numberOfItems = 4
  const refs = Array.from({ length: numberOfItems }, () =>
    useRef<HTMLDivElement | null>(null)
  )

  const handleClick = (index: number): void => {
    setActiveIndex(index === activeIndex ? null : index)
    setActiveIndex1(index === activeIndex1 ? null : index)
    scrollIntoViewIfNeeded(refs[index])
  }

  const isActive = (index: number | null): string => {
    return index === activeIndex ? 'text-[36px] text-[#91B5FE]' : 'text-[24px]'
  }

  const isActivePart1 = (index: number): string => {
    return index === activeIndex1
      ? 'border-[#91B5FE] text-[16px] text-[#91B5FE]'
      : 'border-[#252526] text-[16px] text-[#7A7C80]'
  }

  const handlePartClick = (index: number): void => {
    setActiveIndex(index === activeIndex ? null : index)
    setActiveIndex1(index === activeIndex1 ? null : index)
    scrollIntoViewIfNeeded(refs[index])
  }

  const scrollIntoViewIfNeeded = (
    ref: React.RefObject<HTMLDivElement>
  ): void => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <div className="py-16 p-2">
      <div className="flex  justify-center py-16" id="curriculumSection">
        <div className="flex flex-col gap-4">
          <div className=" flex justify-center">
            <span className="font font-400 text-[#246BFD] font-Lato text-[24px]">
              Curriculum
            </span>
          </div>
          <div className="flex justify-center">
            <span className="text-[48px] font-900 pt-0 text-white text-center max-sm:text-[24px] leading-none">
              {' '}
              Your Learning Journey
            </span>
          </div>
          <div className="flex justify-center">
            <p className="text-[36px]  pt-0 text-white text-center max-sm:text-[24px] leading-none">
              Navigating the UI/UX Design Curriculum
            </p>
          </div>
        </div>
      </div>
      <div className="flex py-10 max-lg:pl-0 max-md:pl-0 max-lg:justify-center gap-8 max-sm:gap-2 ">
        <div className="flex pl-[110px] max-lg:pl-0 max-md:pl-0 max-lg:justify-center gap-8 max-sm:gap-2 ">
          <div
            className={`border px-10 max-sm:px-3 py-2 rounded-xl cursor-pointer ${isActivePart1(0)}`}
            onClick={() => {
              handlePartClick(0)
            }}
          >
            <span className="text-[24px] max-sm:text-[14px] ">Part-1</span>
          </div>
          <div
            className={`border px-10 max-sm:px-3 max-lg:px-3 py-2 rounded-xl cursor-pointer ${isActivePart1(1)}`}
            onClick={() => {
              handlePartClick(1)
            }}
          >
            <span className="text-[24px] max-sm:text-[14px]">Part-2</span>
          </div>
          <div
            className={`border px-10 max-sm:px-3 py-2 rounded-xl cursor-pointer ${isActivePart1(2)}`}
            onClick={() => {
              handlePartClick(2)
            }}
          >
            <span className="text-[24px] max-sm:text-[14px]">Part-3</span>
          </div>
          <div
            className={`border px-10 max-sm:px-3 py-2 rounded-xl cursor-pointer ${isActivePart1(3)}`}
            onClick={() => {
              handlePartClick(3)
            }}
          >
            <span className="text-[24px] max-sm:text-[14px]">Part-4</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center h-[600px] ">
        <div className="flex justify-center  gap-12 max-sm:gap-4 px-6 max-sm:px-0 max-lg:flex-col ">
          <div className=" flex flex-col gap-4 p-4 max-sm:p-0 max-xl:w-[400px]  w-[650px] max-lg:w-[690px] max-sm:w-[320px]">
            <div className="text-white flex flex-col ">
              <span className="text-[48px] font-Lato font-500 max-sm:text-[24px] max-lg:text-[36px] max-lg:text-center max-sm:text-center">
                Introduction to Design Principles{' '}
              </span>
            </div>
            <div className=" text-white  flex justify-center">
              <p className=" max-sm:text-[16px] max-lg:w-[600px] max-lg:text-center text-[#ABAEB2] max-sm:ml-3 max-sm:text-left max-lg: max-sm:pb-10 p-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatu
              </p>
            </div>
            <div className="text-white py-6 max-lg:hidden">
              <ul className="list-disc pl-8 text-[24px] flex flex-col gap-5 cursor-pointer">
                <li
                  className={isActive(0)}
                  onClick={() => {
                    handleClick(0)
                  }}
                >
                  Color
                </li>
                <li
                  className={isActive(1)}
                  onClick={() => {
                    handleClick(1)
                  }}
                >
                  Typography
                </li>
                <li
                  className={isActive(2)}
                  onClick={() => {
                    handleClick(2)
                  }}
                >
                  Button
                </li>
                <li
                  className={isActive(3)}
                  onClick={() => {
                    handleClick(3)
                  }}
                >
                  Image
                </li>
              </ul>
            </div>
          </div>

          <div
            className="bg-[#121721]  rounded-2xl w-[630px] max-xl:w-[400px] max-lg:w-[650px] max-sm:w-[300px] flex flex-col max-sm:ml-3 max-lg:ml-4 px-4 max-sm:px-4   overflow-y-auto  scrollbar scrollbar-thumb-[#246BFD] scrollbar-track-white "
            style={{
              scrollbarWidth: 'thin',
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch',
              msOverflowStyle: '-ms-autohiding-scrollbar',
              scrollbarColor: '#246BFD transparent',
            }}
          >
            {/* Repeat similar content for other videos */}
            <div className="flex flex-col  gap-4 py-6">
              <span ref={refs[0]} className="text-white text-[24px]  py-2">
                Color
              </span>
              <Playlist />
              <Playlist />
              <Playlist />
              <Playlist />
              <span ref={refs[1]} className="text-white text-[24px] py-2">
                Typography
              </span>
              <Playlist />
              <Playlist />
              <Playlist />
              <Playlist />
              <span ref={refs[2]} className="text-white text-[24px] py-2">
                Button
              </span>
              <Playlist />
              <Playlist />
              <Playlist />
              <Playlist />
              <span ref={refs[3]} className="text-white text-[24px] py-2">
                Image
              </span>
              <Playlist />
              <Playlist />
              <Playlist />
              <Playlist />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-16">
        <div className="grid grid-cols-4 max-lg:grid-cols-2 gap-4">
          <div className="bg-[#121721]  p-8  max-xl:h-[150px] px-16 flex flex-col rounded-xl border max-sm:px-10  max-sm:w-[150px] max-xl:w-[200px] max-lg:w-[300px]  border-[#2D2E30] ">
            <span className="text-[48px] text-white flex justify-center max-sm:text-[24px]">
              110+
            </span>
            <span className="text-[#246BFD] flex justify-center">Lecture</span>
          </div>
          <div className="bg-[#121721]  p-8 px-16 flex max-xl:px-0  max-xl:h-[150px] flex-col rounded-xl border max-sm:px-10  max-sm:w-[150px] max-lg:w-[300px]  max-xl:w-[200px]  border-[#2D2E30] ">
            <span className="text-[48px] text-white flex justify-center max-sm:text-[24px]">
              30h +
            </span>
            <span className="text-[#246BFD] flex justify-center">Duration</span>
          </div>
          <div className="bg-[#121721]  p-8 px-16 flex flex-col max-xl:h-[150px] rounded-xl border max-sm:px-10  max-sm:w-[150px] max-lg:w-[300px]  max-xl:w-[200px]  border-[#2D2E30] ">
            <span className="text-[48px] text-white flex justify-center max-sm:text-[24px]">
              20+
            </span>
            <span className="text-[#246BFD] flex justify-center">Projects</span>
          </div>
          <div className="bg-[#121721]  p-8 px-16 max-xl:px-1 flex flex-col max-xl:h-[150px] rounded-xl border max-sm:px-6  max-sm:w-[150px] max-lg:w-[300px]   max-xl:w-[200px] border-[#2D2E30] ">
            <span className="text-[48px] text-white max-sm:text-[24px] text-center">
              Life time
            </span>
            <span className="text-[#246BFD] flex justify-center">Access</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Curriculum
