import ctaImg from '../../assets/images/cta-girl.png'
import raysLeft from '../../assets/images/cta-rays-left.svg'
import raysRight from '../../assets/images/cta-rays-right.svg'
import type { JSX } from 'react'

const CTABanner = (): JSX.Element => {
  return (
    <div className="bg-primary-30 rounded-xl w-full h-[211px] sm:h-[228px] max-w-[683px] xl:max-w-6xl xl:h-[380px] m-auto relative px-4 sm:px-6 py-5 flex flex-col gap-2 xl:gap-5 xs:mt-10 sm:mt-16 xl:p-16">
      {/* //rays */}
      <img
        src={raysLeft}
        className="absolute top-0 left-0 xl:w-[400px] md:w-[300px] sm:w-[200px] w-[138px]"
      />
      <img
        src={raysRight}
        className="absolute bottom-0 right-0 xl:w-[400px] md:w-[300px] sm:w-[200px] w-[138px]"
      />
      <h3 className="text-neutral-100 font-bold text-xl leading-[24px] sm:text-[28px] sm:leading-[33.6px] font-Montserrat xl:text-[48px] xl:leading-[57.6px] max-w-[624px]">
        Take the Next Step in
        <br />
        Your Tech Journey.
      </h3>
      <p className="max-w-[60%] text-xs sm:text-sm xl:text-2xl xl:leading-[31.2px] text-neutral-80 xl:max-w-[624px]">
        Revolutionize Your Learning Journey with AI-Enhanced Courses!
      </p>
      <a
        href="#courses"
        className="text-neutral-10 bg-background text-sm px-5 py-2 sm:py-3 lg:py-4 rounded-lg w-[130px] xs:w-[180px] sm:w-[200px] md:w-[300px] mt-4 md:mt-5 flex items-center justify-center"
      >
        Explore Now!
      </a>
      <img
        src={ctaImg}
        className="absolute right-0 bottom-0 h-[154px] w-[134px] xs:w-auto xs:h-[110%] sm:h-[120%] sm:right-[30px] xl:right-[45px]"
      />
    </div>
  )
}
export default CTABanner
