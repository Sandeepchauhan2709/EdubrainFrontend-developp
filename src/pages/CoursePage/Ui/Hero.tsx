import React from 'react'

import Video from './Video'
import PrimaryButton from '../../../components/buttons/PrimaryButton'
import SecondaryButton from '../../../components/buttons/SecondaryButton'

interface HeroProps {
  title: string
  subtitle: string
  subtitle1: string
  videoSrc: string
  poster: string
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  subtitle1,
  videoSrc,
  poster,
}) => {
  return (
    <div className="flex flex-col text-white pt-[60px] font-bold gap-6">
      <div className="flex justify-center">
        <div className="flex flex-col gap-4">
          <span className="text-[48px] font-Lato font-extrabold text-center max-sm:text-[26px]">
            {title}
          </span>
          <div className="flex flex-col">
            <span className="text-[36px] font-medium font-Lato text-[#ABAEB2] text-center max-sm:text-[22px]">
              {subtitle}
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-3 py-6 justify-center">
        <SecondaryButton>See the curriculum</SecondaryButton>
        <PrimaryButton>Enroll Now</PrimaryButton>
      </div>
      <div className="flex justify-center">
        <Video videoSrc={videoSrc} poster={poster} />
      </div>
    </div>
  )
}

export default Hero
