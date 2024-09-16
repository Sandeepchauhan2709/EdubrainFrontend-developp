import Marquee from 'react-fast-marquee'
import sliderImage from '../../../assets/images/slider.svg'
import slider01Image from '../../../assets/images/Group 1456.svg'
import slider02Image from '../../../assets/images/Group 1459.svg'
import PrimaryButton from '../../../components/buttons/PrimaryButton'
import SecondaryButton from '../../../components/buttons/SecondaryButton'
import React from 'react'

const SliderCard: React.FC = () => {
  return (
    <div className="py-16 overflow-hidden">
      <div className="flex flex-col gap-4">
        <div className="flex justify-center">
          <span className="text-[48px] font-900 pt-0 text-white text-center max-sm:text-[36px] ">
            Course Mastery Achievements
          </span>
        </div>
        <div className="flex justify-center">
          <p className="text-[16px] px-16 max-sm:px-2 pt-0 text-[#7A7C80] text-center">
            Uncover quick insights about Edubraining. Get ready for your tech
            journey by exploring our FAQs. Dive in now!
          </p>
        </div>
      </div>

      <Marquee gradient={false} speed={200}>
        <div className="flex justify-center py-[80px]  m-2 gap-10">
          <div className="bg-[#121721] w-[411px] h-[322px] pt-[60px] overflow-visible rounded-xl border border-[#2D2E30] relative ">
            <img
              src={sliderImage}
              alt="slider"
              className="flex w-[320px]  justify-center absolute inset-x-0 left-[50px] top-[-50px]  -mt-4 "
            />
            <div className="flex flex-col pt-[120px]">
              <span className="flex justify-center text-white text-[24px] font-700">
                Seamless Journeys
              </span>
              <p className="text-[#7A7C80] flex justify-center text-center px-4">
                Tackle real-world challenges, honing your problem-solving
                expertise.
              </p>
            </div>
          </div>
          <div className="bg-[#121721] w-[411px] h-[322px] pt-[60px] overflow-visible rounded-xl border border-[#2D2E30] relative ">
            <img
              src={slider01Image}
              alt="slider"
              className="flex w-[200px] justify-center absolute inset-x-0 left-[80px] top-[-50px]  -mt-4 "
            />
            <div className="flex flex-col pt-[120px]">
              <span className="flex justify-center text-white text-[24px] font-700">
                User Insights Decoded
              </span>
              <p className="text-[#7A7C80] flex justify-center text-center px-4">
                Understand user behavior, tailoring designs to preferences.
              </p>
            </div>
          </div>
          <div className="bg-[#121721] w-[411px] h-[322px] pt-[60px] overflow-visible rounded-xl border border-[#2D2E30] relative ">
            <img
              src={slider02Image}
              alt="slider"
              className="flex w-[260px] justify-center absolute inset-x-0 left-[60px] top-[-50px]  -mt-4 "
            />
            <div className="flex flex-col pt-[120px]">
              <span className="flex justify-center text-white text-[24px] font-700">
                Visual Storytelling Expertise
              </span>
              <p className="text-[#7A7C80] flex justify-center text-center px-4">
                Craft visually compelling stories through impactful design
                narratives.
              </p>
            </div>
          </div>
          <div className="bg-[#121721] w-[411px] h-[322px] pt-[60px] overflow-visible rounded-xl border border-[#2D2E30] relative ">
            <img
              src={sliderImage}
              alt="slider"
              className="flex w-[340px] justify-center absolute inset-x-0 left-[60px] top-[-50px]  -mt-4 "
            />
            <div className="flex flex-col pt-[120px]">
              <span className="flex justify-center text-white text-[24px] font-700">
                Seamless Journeys
              </span>
              <p className="text-[#7A7C80] flex justify-center text-center px-4">
                Tackle real-world challenges, honing your problem-solving
                expertise.
              </p>
            </div>
          </div>
        </div>
      </Marquee>
      <div className="flex gap-3 py-6 justify-center">
        <SecondaryButton>See the curriculum</SecondaryButton>
        <PrimaryButton>Enroll Now</PrimaryButton>
      </div>
    </div>
  )
}

export default SliderCard
