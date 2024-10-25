import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { useQuery } from '@tanstack/react-query'
import { addToCard } from '../../store/slices/cartSlice'
import { type RootState } from '../../store'
import { getAllCourses } from '../../api/courses'
import { type ICourse } from '../../types/course.types'
import { getPriceAfterDiscount } from '../../utils/getPriceAfterDiscount'
import ImageCarousel from './ImageCarousel'
import SecondaryButton from '../../components/buttons/SecondaryButton'
import PrimaryButton from '../../components/buttons/PrimaryButton'

// Import your SVG assets here
import userSquare2 from '../../assets/icons/user-square2.svg'
import ClockImg from '../../assets/icons/clock.svg'
import rightArrow from '../../assets/icons/right-arrow.svg'
import leftArrow from '../../assets/icons/left-arrow.svg'
import play from '../../assets/icons/play.svg'

const CourseSection = (): JSX.Element => {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((state: RootState) => state.cartItems)
  const [isCurrentCourseAddedToCart, setIsCurrentCourseAddedToCart] =
    useState(false)
  const [activeCourse, setActiveCourse] = useState(0)
  const [isReadMoreActive, setIsReadMoreActive] = useState(false)

  const { data, isLoading, isError } = useQuery<ICourse[]>({
    queryKey: ['courses'],
    queryFn: getAllCourses,
  })

  const handleCourseChange = (direction: 'next' | 'prev'): void => {
    if (!data || data.length === 0) return
    if (direction === 'next') {
      setActiveCourse((prev) => (prev === data.length - 1 ? 0 : prev + 1))
    } else {
      setActiveCourse((prev) => (prev === 0 ? data.length - 1 : prev - 1))
    }
  }

  useEffect(() => {
    if (!data || data.length === 0) return
    setIsCurrentCourseAddedToCart(
      Boolean(cartItems.find((item) => item.id === data[activeCourse]._id))
    )
  }, [cartItems, activeCourse, data])

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>
  if (!data || data.length === 0) return <div>No data</div>

  const currentCourse = data[activeCourse]

  return (
    <div className="flex flex-col-reverse xl:flex-row xl:justify-center xl:gap-28 xl:items-center w-full gap-8 mt-8">
      <div className="flex flex-col gap-4 sm:gap-6 xl:max-w-[600px]">
        <div className="flex flex-col">
          <motion.span
            layout
            className="text-primary-30 text-base sm:text-xl xl:text-2xl"
          >
            {currentCourse.category}
          </motion.span>
          <div className="h-[28.8px] sm:h-[38.8px] xl:h-[57px]">
            <AnimatePresence>
              <motion.h2
                initial={{ opacity: 0, y: 20, position: 'absolute' }}
                animate={{ opacity: 1, y: 0, position: 'relative' }}
                exit={{ opacity: 0, y: -20, position: 'absolute' }}
                key={activeCourse}
                className="text-[24px] leading-[28.8px] font-bold text-neutral-10 font-Montserrat sm:text-[32px] sm:leading-[38.4px] xl:text-[48px] xl:leading-[57.6px]"
              >
                {currentCourse.title}
              </motion.h2>
            </AnimatePresence>
          </div>
        </div>
        <motion.p className="text-neutral-60 break-all text-xs leading-[18px] sm:text-sm sm:leading-[21px] xl:hidden">
          <span className="mr-2">
            {isReadMoreActive
              ? currentCourse.description
              : currentCourse.description
                ? currentCourse.description.substring(0, 130) + '...'
                : ''}
          </span>
          <button
            onClick={() => {
              setIsReadMoreActive((prev) => !prev)
            }}
            className="text-neutral-10"
          >
            {isReadMoreActive ? 'Read Less' : 'Read More'}
          </button>
        </motion.p>
        <motion.p className="text-neutral-60 text-lg hidden xl:block break-all ">
          {currentCourse.description
            ? currentCourse.description.substring(0, 250) + '...'
            : ''}
        </motion.p>
        <motion.div className="flex gap-2 sm:gap-3 items-end">
          <span className="text-neutral-10 text-2xl sm:text-3xl xl:text-3xl font-semibold">
            ₹
            {getPriceAfterDiscount(
              Number(currentCourse.basePrice ?? 0),
              Number(currentCourse.discountedPercent ?? 0)
            )}
          </span>
          <span className="text-neutral-40 text-xs sm:text-base xl:text-lg line-through mb-1 sm:mb-0.5">
            ₹{currentCourse.basePrice ?? 0}
          </span>
          <span className="text-xs xl:text-lg sm:text-base text-blue mb-1 sm:mb-0.5 text-primary-30">
            ({currentCourse.discountedPercent ?? 0}%)
          </span>
        </motion.div>
        <div className="flex gap-6">
          <div className="flex gap-2 items-center justify-center">
            <img
              src={userSquare2}
              className="w-6 sm:w-8 h-6 sm:h-8 mr-1 mb-1 sm:mb-1.5"
              alt="Lectures"
            />
            <span className="text-neutral-10 text-base xs:text-lg sm:text-2xl font-medium">
              {currentCourse.numOfVideos ?? 0}
            </span>
            <span className="text-neutral-20 text-sm xs:text-base sm:text-xl">
              Lectures
            </span>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <img
              src={ClockImg}
              className="w-6 sm:w-8 h-6 sm:h-8 mr-1 mb-1 sm:mb-1.5"
              alt="Duration"
            />
            <span className="text-neutral-10 text-base xs:text-lg sm:text-2xl font-medium">
              {currentCourse.total_duration}
            </span>
            <span className="text-neutral-20 text-sm xs:text-base sm:text-xl">
              Time
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-5 xl:max-w-[414px] mt-3 z-40">
          <Link to={`/course/${currentCourse.slug}`} className="w-full">
            <SecondaryButton className="w-full">
              Let&apos;s Explore It
            </SecondaryButton>
          </Link>
          <PrimaryButton
            onClick={() => {
              dispatch(
                addToCard({
                  id: currentCourse._id,
                  title: currentCourse.title,
                  discountedPercent: currentCourse.discountedPercent,
                  basePrice: currentCourse.basePrice,
                })
              )
              handleCourseChange('next')
            }}
            className={`w-full h-full ${
              isCurrentCourseAddedToCart ? 'pointer-events-none opacity-70' : ''
            }`}
          >
            {isCurrentCourseAddedToCart ? 'Added to cart' : 'Add to cart'}
          </PrimaryButton>
          <span className="text-neutral-10">Get more discount! </span>
        </div>
      </div>
      <div className="flex flex-grow max-w-5xl flex-col items-end gap-4">
        <div className="gap-4 items-center mr-6 hidden xl:flex">
          <button
            onClick={() => {
              handleCourseChange('prev')
            }}
          >
            <img
              src={leftArrow}
              alt="Previous"
              className="h-8 w-8 lg:h-12 lg:w-12"
            />
          </button>
          <button
            onClick={() => {
              handleCourseChange('next')
            }}
          >
            <img
              src={rightArrow}
              alt="Next"
              className="h-8 w-8 lg:h-12 lg:w-12"
            />
          </button>
        </div>
        <div className="relative w-full">
          <div className="h-[200px] sm:hidden xl:w-[600px] w-full">
            <ImageCarousel
              images={data.map((course) => course.poster?.url || '')}
              activeIndex={activeCourse}
              setActiveIndex={setActiveCourse}
              autoSwipe={false}
            />
          </div>
          <div className="hidden sm:block h-[200px] sm:h-[400px] xl:w-[600px] w-full">
            <ImageCarousel
              images={data.map((course) => course.poster?.url || '')}
              activeIndex={activeCourse}
              setActiveIndex={setActiveCourse}
              autoSwipe={false}
              isStacked={true}
            />
          </div>
          <button className="absolute z-50 shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-60 bg-opacity-80 p-2 flex items-center justify-center">
            <img src={play} alt="play button" className="h-4 w-4 ml-0.5" />
          </button>
          <div className="flex relative w-full bg-neutral-90 h-1 mt-6 rounded-full">
            <AnimatePresence>
              <motion.div
                layout
                className="h-1 bg-primary-30 rounded-full absolute top-0 left-0"
                style={{
                  width: `${100 / data.length}%`,
                  left: `${(100 / data.length) * activeCourse}%`,
                }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseSection
