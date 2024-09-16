import heroImage from '../../assets/images/Hero Image.svg'
import heroImageOverlay from '../../assets/images/Ellipse 1.svg'
import type { JSX } from 'react'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import vector2 from '../../assets/icons/Vector 2.svg'
import vector3 from '../../assets/icons/Vector 3.svg'
import vector4 from '../../assets/icons/Vector 4.svg'

const HeroSection = (): JSX.Element => {
  return (
    <div className="relative w-full">
      <img
        src={vector2}
        className="absolute top-[60%] xs:top-[40%] sm:top-[45%] left-0 w-[142px] h-[79.38px] sm:w-[237.65px] sm:h-[132.3px] xl:top-[90%] 2xl:top-[95%] xl:w-[339px] xl:h-[189px]"
        alt=""
      />
      <img
        src={vector3}
        className="absolute top-[90%] sm:top-[85%] right-0 w-[142px] h-[79.38px] sm:w-[237.65px] sm:h-[132.3px] xl:top-[20%] xl:w-[339px] xl:h-[189px]"
        alt=""
      />
      <img
        src={vector4}
        className="absolute top-[60%] xs:top-[40%] sm:top-[45%] right-0 w-[142px] h-[79.38px] sm:w-[237.65px] sm:h-[132.3px] xl:top-[95%] 2xl:top-full xl:w-[339px] xl:h-[189px]"
        alt=""
      />
      <section className="flex relative flex-col justify-center items-center gap-[60px] xl:flex-row xl:gap-28 max-w-[1450px] mx-auto padding-x xl:max-h-[calc(100vh-100px)]">
        <div className="gap-8 xl:gap-10 flex flex-col items-center xl:items-start mt-16 sm:mt-[100px] xl:mt-[116px]">
          <div className="flex flex-col gap-5 xl:gap-6 items-center justify-center text-center xl:text-start xl:items-start">
            <h1 className="large-heading text-neutral-10">
              Discover the future learning
            </h1>
            <span className="sub-heading text-neutral-10 !font-normal">
              AI Enhance courses for high paying job
            </span>
          </div>
          <p className="body-text-md text-neutral-60 max-w-[492px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatu
          </p>
          <a
            href="#courses"
            className="w-full sm:max-w-[323px] xl:w-[193px] xl:max-w-none"
          >
            <PrimaryButton className="w-full">Explore Courses</PrimaryButton>
          </a>
        </div>
        <div className="w-fit relative overflow-hidden xl:mt-[116px] flex items-center justify-center">
          <img
            src={heroImage}
            className="w-full z-10 object-contain object-center max-w-[500px] xl:max-w-[679px] aspect-[1.1/1]"
            alt=""
          />
          {/* // overlay */}
          <img
            src={heroImageOverlay}
            className="absolute h-[152.25px] w-[152.25px] blur-sm top-[140px] sm:top-[200px] right-[100px]"
            alt=""
          />
        </div>
      </section>
    </div>
  )
}
export default HeroSection
