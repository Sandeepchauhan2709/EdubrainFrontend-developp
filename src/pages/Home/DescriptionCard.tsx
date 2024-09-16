import { useInnerSize } from '../../hooks/useInnerSize'
import { useInView, motion } from 'framer-motion'
import { useRef } from 'react'
import type { JSX } from 'react'

interface DescriptionCardProps {
  title: string
  desc: string
  icon: any
}

const DescriptionCard = (props: DescriptionCardProps): JSX.Element => {
  const cardRef = useRef(null)
  const { width } = useInnerSize()
  const cardInView = useInView(cardRef, {
    amount: 0.2,
  })

  return (
    <motion.div
      ref={cardRef}
      {...(width < 1024
        ? {
            initial: { opacity: 0, scale: 0 },
            animate: cardInView ? { opacity: 1, scale: 1 } : {},
            exit: { opacity: 0, scale: 0 },
            transition: { duration: 0.4 },
          }
        : {})} // only show this animation on mobile
      className="rounded-3xl border-card-stroke border bg-card-fill flex flex-col items-center justify-center gap-4 xl:gap-6 w-full py-5 px-10 xl:px-5 max-w-[332px] xl:max-w-[400px]"
    >
      <img src={props.icon} className="w-8 h-8 xl:h-10 xl:w-10" />
      <div className="flex flex-col items-center justify-center gap-2 text-center xl:gap-3">
        <h3 className="h3 text-white">{props.title}</h3>
        <p className="text-neutral-40 body-text-md ">{props.desc}</p>
      </div>
    </motion.div>
  )
}
export default DescriptionCard
