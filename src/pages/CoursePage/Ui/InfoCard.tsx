import React from 'react'
import PrimaryButton from '../../../components/buttons/PrimaryButton'
import SecondaryButton from '../../../components/buttons/SecondaryButton'

interface Benefit {
  icon: string
  title: string
  description: string
}

interface CardProps {
  benefits: Benefit[]
  title1: string
  subtitle: string
  subtitle1: string
}

const Card: React.FC<CardProps> = ({
  benefits,
  title1,
  subtitle,
  subtitle1,
}) => {
  return (
    <>
      <div className="flex justify-center pt-[100px]">
        <div className="flex flex-col">
          <div className="flex justify-center">
            <span className="font font-400 text-[#246BFD] font-Lato text-[24px]">
              {title1}
            </span>
          </div>
          <div className="flex justify-center">
            <span className="text-[48px] font-900 pt-0 text-white text-center max-sm:text-[24px]">
              {subtitle}
            </span>
          </div>
          <div className="flex justify-center">
            <span className="text-[48px] font-900 pt-0 text-white max-sm:text-[24px]">
              {subtitle1}
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center m-2 py-[40px]">
        <div className="flex justify-center">
          <div className="flex flex-wrap gap-6 justify-center">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-[#121721] flex justify-center max-xl:w-[300px] flex-col rounded-xl  w-[400px] h-[224px] max-lg:w-[300px] max-sm:w-[300px] gap-3 border border-[#2D2E30]"
              >
                <div className="flex justify-center">
                  <img src={benefit.icon} alt="" />
                </div>
                <div className="flex justify-center text-white text-[24px]">
                  <span>{benefit.title}</span>
                </div>
                <div className="flex justify-center">
                  <span className=" text-[#ABAEB2] text-[16px] px-10 max-sm:px-4 text-center">
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
        <PrimaryButton>Enroll Now</PrimaryButton>
      </div>
    </>
  )
}

export default Card
