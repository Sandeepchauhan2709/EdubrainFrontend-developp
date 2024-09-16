import React from 'react'
import image from '../../../assets/images/Frame 664.svg'
import number1 from '../../../assets/images/Number.png'
import number2 from '../../../assets/images/Number2.png'
import number3 from '../../../assets/images/Number3.png'
import number4 from '../../../assets/images/Number4.png'
import number5 from '../../../assets/images/Number5.png'
import Progressbutton from './Progessbutton'
import FAQs from '../../../components/reusable/FAQs'
import FAQ from '../../../assets/data/faq'

const Index: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Enroll in a Course',
      description:
        'Engage in lectures, attend live sessions, and join project-based learning to meet course requirements.',
    },
    {
      number: 2,
      title: 'Complete Courses Requirements',
      description:
        'Engage in lectures, attend live sessions, and join project-based learning to meet courses requirements.',
    },
    {
      number: 3,
      title: 'Submit Assessments',
      description:
        'Engage in lectures, attend live sessions, and join project-based learning to meet courses requirements.',
    },
    {
      number: 4,
      title: 'Achieve Certification Criteria',
      description:
        'Engage in lectures, attend live sessions, and join project-based learning to meet courses requirements.',
    },
    {
      number: 5,
      title: 'Receive Your Certificate',
      description:
        'Engage in lectures, attend live sessions, and join project-based learning to meet courses requirements.',
    },
  ]

  return (
    <div className="relative flex gap-16 py-16">
      <div className="flex flex-col w-[600px]">
        <img src={image} alt="Certificate Image" />
        <div className="flex pt-4">
          <span className="text-[24px] font-Montserrat font-bold text-black dark:text-white">
            Earn your certificate in just {steps.length} steps
          </span>
        </div>
        <div className="py-6 flex flex-col gap-8">
          {steps.map((step, index) => (
            <Step key={index} index={index} {...step} />
          ))}
        </div>
      </div>
      <div className="flex flex-col w-[650px] gap-10 relative">
        <div className="justify-centerw-[523px] h-[500px] bg-white rounded-xl"></div>
        <span className="text-[16px] text-black dark:text-white font-Roboto">
          Download your certificate instantly upon course completion—an emblem
          of your accomplished learning journey awaits you.
        </span>
        <Progressbutton
          progressText=""
          completeText="Download your certificate"
        />
        <span className="text-black dark:text-[white] text-[36px] p-0">
          Frequently Asked Questions
        </span>
        <FAQs
          faqs={FAQ.faqs}
          faqButtonProps={{
            className: '!bg-background !border-neutral-95',
          }}
        />
      </div>
    </div>
  )
}

interface StepProps {
  index: number
  number: number
  title: string
  description: string
}

const Step: React.FC<StepProps> = ({ index, number, title, description }) => {
  const stepImages = [image, number1, number2, number3, number4, number5]
  const topPosition = index === 0 ? 'top-0' : 'top-[-76px]'
  return (
    <div className="relative border  dark:border-[#FFFFFF8A]  p-2 rounded-xl">
      <img
        src={stepImages[number]}
        className={`absolute left-[380px] ${topPosition}`}
        alt={`Step ${number}`}
      />
      <div className="p-2 font-Roboto flex flex-col gap-4">
        <span className="text-[24px] text-black dark:text-white">{title}</span>
        <p className="text-[16px] text-black dark:text-[#FFFFFF8A]">
          {description}
        </p>
      </div>
    </div>
  )
}

export default Index
