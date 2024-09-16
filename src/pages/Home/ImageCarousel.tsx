import { useEffect } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import type { JSX } from 'react'

const DRAG_BUFFER = 30 // in pixels => how much user has to drag to change the slide

// spring animation options
const SPRING_OPTIONS = {
  type: 'spring',
  mass: 3,
  stiffness: 400,
  damping: 50,
}

interface ImageCarouselProps {
  images: string[]
  activeIndex: number
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>
  autoSwipe?: boolean
  autoSwipeDelay?: number
  isStacked?: boolean
}

const ImageCarousel = ({
  images,
  activeIndex,
  setActiveIndex,
  autoSwipe = true,
  autoSwipeDelay = 5000,
  isStacked = false,
}: ImageCarouselProps): JSX.Element => {
  const dragX = useMotionValue(0)

  // auto swipe
  useEffect(() => {
    if (autoSwipe) {
      const intervalRef = setInterval(() => {
        const x = dragX.get()

        if (x === 0) {
          setActiveIndex((prev) => {
            if (prev === images.length - 1) {
              return 0
            }
            return prev + 1
          })
        }
      }, autoSwipeDelay)

      return () => {
        clearInterval(intervalRef)
      }
    }
  }, [autoSwipe])

  // handle drag end to change the slide
  const onDragEnd = (): void => {
    const x = dragX.get()
    if (x <= -DRAG_BUFFER && activeIndex < images.length - 1) {
      setActiveIndex((prev) => prev + 1)
    } else if (x >= DRAG_BUFFER && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1)
    }
  }

  return (
    <div
      className={`relative w-full h-full ${isStacked ? '' : 'overflow-hidden'}`}
    >
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={
          isStacked
            ? {}
            : {
                translateX: `-${activeIndex * 100}%`,
              }
        }
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className={`w-full h-full relative ${
          isStacked ? '' : 'flex items-center'
        }`}
      >
        {images.map((imgSrc, index) => {
          return (
            <>
              {isStacked ? (
                // stacked images
                <motion.div
                  key={index}
                  style={{
                    backgroundImage: `url(${imgSrc})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  animate={{
                    scale: (() => {
                      // gradually scale down the images to create stacked effect and active image scale is 1
                      if (activeIndex === index) return 1
                      else if (activeIndex > index) {
                        return (activeIndex - index) / 10 + 1
                      } else {
                        return 1 - (index - activeIndex) / 10
                      }
                    })(), // iife to calculate scale
                    zIndex: images.length - index - 1,
                    left: `${(index - activeIndex) * 15}%`, // to create stacked effect
                    opacity: activeIndex > index ? 0 : 1, // hide images to the left of active course
                  }}
                  transition={SPRING_OPTIONS}
                  className="w-full h-full shrink-0 rounded-xl object-cover object-center absolute"
                />
              ) : (
                // linear images
                <motion.div
                  key={index}
                  style={{
                    backgroundImage: `url(${imgSrc})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  animate={{
                    scale: activeIndex === index ? 1 : 0.85,
                  }}
                  transition={SPRING_OPTIONS}
                  className="w-full h-full shrink-0 rounded-xl object-cover object-center"
                />
              )}
            </>
          )
        })}
      </motion.div>
    </div>
  )
}

export default ImageCarousel
