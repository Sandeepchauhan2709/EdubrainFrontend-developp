import React from 'react'
import PrimaryButton from '../../../components/buttons/PrimaryButton'
import SecondaryButton from '../../../components/buttons/SecondaryButton'

import dollar from '../../../assets/icons/dollar-circle.svg'
import briefcase from '../../../assets/icons/briefcase.svg'
import teacher from '../../../assets/icons/teacher.svg'
import house from '../../../assets/icons/house.svg'
import profile from '../../../assets/icons/profile-2user.svg'
import status from '../../../assets/icons/status-up.svg'
import { useQuery } from '@tanstack/react-query'
import { handleGetUser } from '../../../api/user'

interface Benefit {
  icon: string
  title: string
  description: string
}

interface CardProps {
  title1: string
}

const benefitsData: Benefit[] = [
  {
    icon: dollar,
    title: 'High Earning Potential',
    description:
      'Tap into high-paying opportunities with your design expertise.',
  },
  {
    icon: briefcase,
    title: 'Job Market Demand',
    description: 'Essential for Digital Success in High Demand Roles.',
  },
  {
    icon: teacher,
    title: 'Degree-Free Excellence',
    description: 'Excel in UI/UX Design without the constraints of a degree.',
  },
  {
    icon: house,
    title: 'Work-From-Home Ready',
    description:
      'Unlock career flexibility with the freedom to work from home.',
  },
  {
    icon: profile,
    title: 'Creative Community',
    description: 'Join a creative community for growth and enrichment.',
  },
  {
    icon: status,
    title: 'Continuous Innovation',
    description:
      'UI/UX design: Constant learning, innovation in a dynamic field.',
  },
]

const BenefitsCard: React.FC<CardProps> = ({ title1 }) => {
  const { data: userData } = useQuery({
    queryKey: ['user'],
    queryFn: handleGetUser,
    retry: 0,
  })
  const user: any = userData
  const useremail: string = user?.email || ''
  const handleEnroll = (courseName: string): void => {
    useremail
      ? (window.location.href = `https://pages.razorpay.com/pl_PCndOh475OhoA1/view?product=${courseName}&email=${useremail}`)
      : (window.location.href = `https://pages.razorpay.com/pl_PCndOh475OhoA1/view?product=${courseName}`)
  }
  return (
    <>
      <div className="flex justify-center pt-[100px]">
        <div className="flex flex-col">
          <div className="flex justify-center">
            <span className="font font-400 text-[#246BFD] font-Lato text-[24px]">
              Benefits
            </span>
          </div>
          <div className="flex justify-center">
            <span className="text-[48px] font-900 pt-0 text-white text-center max-sm:text-[24px]">
              Why you should Master <br /> <span>{title1}?</span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center m-2 py-[40px]">
        <div className="flex justify-center">
          <div className="grid grid-cols-3 py-4 px-8 max-sm:px-0 gap-8 max-sm:grid-cols-1 max-lg:grid-cols-2">
            {benefitsData.map((benefit, index) => (
              <div
                key={index}
                className="bg-[#121721] flex justify-center max-xl:w-[300px] flex-col rounded-xl w-[400px] h-[224px] max-lg:w-[300px] max-sm:w-[300px] gap-3 border border-[#2D2E30]"
              >
                <div className="flex justify-center">
                  <img
                    src={benefit.icon}
                    alt={benefit.title}
                    className="w-12 h-12"
                  />
                </div>
                <div className="flex justify-center text-white text-[24px]">
                  <span>{benefit.title}</span>
                </div>
                <div className="flex justify-center">
                  <span className="text-[#ABAEB2] text-[16px] px-10 max-sm:px-4 text-center">
                    {benefit.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-3 py-6 justify-center">
        <SecondaryButton>See the curriculum</SecondaryButton>
        <PrimaryButton
          onClick={() => {
            handleEnroll(title1)
          }}
        >
          Enroll Now
        </PrimaryButton>
      </div>
    </>
  )
}

export default BenefitsCard
