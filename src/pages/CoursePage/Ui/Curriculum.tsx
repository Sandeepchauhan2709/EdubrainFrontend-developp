import React, { useState, useRef } from 'react'
import play from '../../../assets/images/arrow-right.svg'

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
  // lecture_file_path: string
}

interface CurriculumProps {
  sections: Section[]
  courseTitle: string
}

const Playlist: React.FC<{ lecture: Lecture }> = ({ lecture }) => {
  return (
    <>
      <div className="flex justify-between gap-1 items-center">
        <div className="flex gap-1 cursor-pointer items-center">
          <img src={play} alt="play" className="w-4 h-4" />
          <span className="text-white text-sm max-sm:text-xs truncate">
            {lecture.lecture_name}
          </span>
        </div>
        <div className="flex gap-2 items-center">
          {/* <div className="bg-[#246BFD1A] rounded-xl px-2 py-1">
            <span className="text-[#246BFD] text-xs cursor-pointer">
              Preview
            </span>
          </div> */}
        </div>
      </div>
      <hr className="bg-white my-2" />
    </>
  )
}

const Curriculum: React.FC<CurriculumProps> = ({ sections, courseTitle }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)
  const [activeIndex1, setActiveIndex1] = useState<number | null>(0)
  const refs = useRef(sections.map(() => React.createRef<HTMLDivElement>()))

  const handleClick = (index: number): void => {
    setActiveIndex(index === activeIndex ? null : index)
    setActiveIndex1(index === activeIndex1 ? null : index)
    scrollIntoViewIfNeeded(refs.current[index])
  }

  const isActive = (index: number | null): string => {
    return index === activeIndex ? 'text-2xl text-[#91B5FE]' : 'text-xl'
  }

  const isActivePart1 = (index: number): string => {
    return index === activeIndex1
      ? 'border-[#91B5FE] text-sm text-[#91B5FE]'
      : 'border-[#252526] text-sm text-[#7A7C80]'
  }

  const handlePartClick = (index: number): void => {
    setActiveIndex(index === activeIndex ? null : index)
    setActiveIndex1(index === activeIndex1 ? null : index)
    scrollIntoViewIfNeeded(refs.current[index])
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
    <div className="py-16 px-4">
      <div className="flex justify-center py-16" id="curriculumSection">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-normal text-[#246BFD] text-2xl">
            Curriculum
          </span>
          <h2 className="text-4xl font-bold text-white max-sm:text-2xl">
            Your Learning Journey
          </h2>
          <p className="text-2xl text-white max-sm:text-xl">
            Navigating the <span className="font-semibold">{courseTitle}</span>{' '}
            Curriculum
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-4 flex-wrap mb-10">
        {sections.map((section, index) => (
          <button
            key={section._id}
            className={`border px-4 py-2 rounded-xl ${isActivePart1(index)}`}
            onClick={() => {
              handlePartClick(index)
            }}
          >
            Section-{section.section_no}
          </button>
        ))}
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col lg:flex-row justify-center gap-8 w-full max-w-7xl">
          <div className="flex flex-col gap-4 lg:w-1/2">
            <h3 className="text-3xl font-medium text-white max-sm:text-2xl lg:text-left text-center">
              {sections[activeIndex || 0]?.section_name}
            </h3>
            <p className="text-[#ABAEB2] text-center lg:text-left">
              Explore the comprehensive learning experience awaiting you on this
              course detail page. From fundamental concepts to advanced
              techniques, discover what you will learn and how it will propel
              your skills to new heights.
            </p>
            <div className="hidden lg:block text-white py-6">
              <ul className="list-disc pl-8 text-xl space-y-4">
                {sections.map((section, index) => (
                  <li
                    key={section._id}
                    className={`cursor-pointer ${isActive(index)}`}
                    onClick={() => {
                      handleClick(index)
                    }}
                  >
                    {section.section_name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:w-1/2 bg-[#121721] rounded-2xl p-4 h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#246BFD] scrollbar-track-transparent">
            {sections.map((section, index) => (
              <div key={section._id}>
                <h4
                  ref={refs.current[index]}
                  className="text-white text-xl font-semibold py-2"
                >
                  {section.section_name}
                </h4>
                {section.section_lectures.map((lecture) => (
                  <Playlist key={lecture._id} lecture={lecture} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#121721] p-6 rounded-xl border border-[#2D2E30] text-center">
            <span className="text-3xl text-white block">
              {sections.reduce(
                (total, section) => total + section.section_lectures.length,
                0
              )}
              +
            </span>
            <span className="text-[#246BFD]">Lectures</span>
          </div>
          <div className="bg-[#121721] p-6 rounded-xl border border-[#2D2E30] text-center">
            <span className="text-3xl text-white block">30h+</span>
            <span className="text-[#246BFD]">Duration</span>
          </div>
          <div className="bg-[#121721] p-6 rounded-xl border border-[#2D2E30] text-center">
            <span className="text-3xl text-white block">20+</span>
            <span className="text-[#246BFD]">Projects</span>
          </div>
          <div className="bg-[#121721] p-6 rounded-xl border border-[#2D2E30] text-center">
            <span className="text-3xl text-white block">Lifetime</span>
            <span className="text-[#246BFD]">Access</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Curriculum
