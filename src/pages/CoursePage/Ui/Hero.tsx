import React from 'react'

// import Video from './Video'
import PrimaryButton from '../../../components/buttons/PrimaryButton'
import SecondaryButton from '../../../components/buttons/SecondaryButton'
import { useQuery } from '@tanstack/react-query'
import { handleGetUser } from '../../../api/user'

interface HeroProps {
  title: string
  subtitle: string
  subtitle1: string
  // videoSrc: string
  poster: string
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  subtitle1,
  // videoSrc,
  poster,
}) => {
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
    <div className="flex flex-col text-white pt-[60px] font-bold gap-6">
      <div className="flex justify-center">
        <div className="flex flex-col gap-4">
          <span className="text-[48px] font-Lato font-extrabold text-center max-sm:text-[26px]">
            {title}
          </span>
          <div className="flex lg:px-36 md:px-20 sm:px-14 px-6  flex-col">
            <span className="text-[28px] font-medium font-Lato text-[#ABAEB2] text-center max-sm:text-[20px]">
              {subtitle}
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-3 py-6 justify-center">
        <SecondaryButton>See the curriculum</SecondaryButton>
        {/* <PrimaryButton>Enroll Now</PrimaryButton> */}
        <PrimaryButton
          onClick={() => {
            handleEnroll(title)
          }}
        >
          Enroll Now
        </PrimaryButton>
      </div>
      <div className="flex justify-center">
        {/* <Video videoSrc={videoSrc} poster={poster} /> */}
        <img
          src={poster}
          alt="Hero Poster"
          className="w-[900px] h-[500px] object-cover"
        />
      </div>
    </div>
  )
}

export default Hero
