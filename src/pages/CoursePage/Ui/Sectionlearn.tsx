import React, { useState } from 'react'
import tick from '../../../assets/icons/tick-circle.svg'
import learn from '../../../assets/images/learn.svg'

interface Advantage {
  title: string
  description: string
}

const Learn: React.FC = (): JSX.Element => {
  const [expanded, setExpanded] = useState<boolean>(false)

  const toggleExpand = (): void => {
    setExpanded(!expanded)
  }

  return (
    <div className="py-16">
      <div className="flex justify-center">
        <span className="text-[48px] font-900 text-white text-center max-sm:text-[36px] max-sm:px-2">
          Why you should learn with us?
        </span>
      </div>
      <div className="flex justify-center gap-6 max-lg:flex-col m-4 max-sm:m-2 max-lg:m-2">
        <div className="flex justify-center">
          <div className="flex flex-col gap-5 w-[700px] max-xl:w-[550px]  max-lg:w-[664px] max-sm:w-[320px]">
            <Paragraph expanded={expanded} toggleExpand={toggleExpand} />
            <div>
              <img className="rounded-xl" src={learn} alt="Tick Icon" />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Advantages advantages={advantages} />
        </div>
      </div>
    </div>
  )
}

const Paragraph: React.FC<{ expanded: boolean; toggleExpand: () => void }> = ({
  expanded,
  toggleExpand,
}) => {
  const paragraphContent: string = expanded
    ? "At Edubraining, we go beyond teaching design—we cultivate problem-solving expertise. Our hands-on projects immerse you in real-world challenges, shaping a comprehensive skill set in UI/UX design. With our unique learning approach, you'll craft a dynamic portfolio, readying yourself for internships and rewarding career paths. Join us to turn your design skills into a powerful tool for success!....Join us to turn your design skills into a powerful tool for success!...."
    : "At Edubraining, we go beyond teaching design—we cultivate problem-solving expertise. Our hands-on projects immerse you in real-world challenges, shaping a comprehensive skill set in UI/UX design. With our unique learning approach, you'll craft a dynamic portfolio, readying yourself for internships and rewarding career paths."

  return (
    <p className=" text-[16px] max-sm:text-[12px]  text-[#ABAEB2] ">
      {paragraphContent}
      <span className="lg:hidden">
        <button className="text-white cursor-pointer" onClick={toggleExpand}>
          {expanded ? 'Read Less' : 'Read More'}
        </button>
      </span>
    </p>
  )
}

const Advantages: React.FC<{ advantages: Advantage[] }> = ({ advantages }) => {
  return (
    <div className="flex flex-col max-sm:w-[300px] max-lg:w-[700px] max-xl:gap-4 gap-10 max-lg:gap-3 max-sm:gap-4">
      {advantages.map((advantage: Advantage, index: number) => (
        <div
          key={index}
          className="bg-[#121721] max-xl:p-2 p-6 flex gap-4 flex-col rounded-xl border border-[#2D2E30]"
        >
          <div className="flex gap-4">
            <img src={tick} alt="Tick Icon" />
            <p className="text-[20px] text-white">{advantage.title}</p>
          </div>
          <p className="text-[#ABAEB2] pl-10">{advantage.description}</p>
        </div>
      ))}
    </div>
  )
}

const advantages: Advantage[] = [
  {
    title: 'Practical Problem-Solving',
    description:
      'Tackle real-world challenges, honing your problem-solving expertise.',
  },
  {
    title: 'Comprehensive Learning Journey',
    description:
      'Navigate a holistic learning path for a well-rounded education.',
  },
  {
    title: 'Portfolio Powerhouse',
    description:
      'Craft a robust portfolio showcasing your diverse design capabilities.',
  },
  {
    title: 'Internship and Career Readiness',
    description:
      'Prepare for internships and high-paying careers with confidence.',
  },
]

export default Learn
