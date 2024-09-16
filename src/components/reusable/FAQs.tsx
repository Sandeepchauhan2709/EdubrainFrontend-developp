import { useState } from 'react'
import plus from '../../assets/icons/add-square.svg'
import minus from '../../assets/icons/minus-square.svg'
import type { JSX } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface FAQsProps {
  faqs: Array<{ question: string; answer: string }>
  faqButtonProps?: JSX.IntrinsicElements['button'] & {
    height?: number
  }
  containerProps?: JSX.IntrinsicElements['div']
}

const FAQs = ({
  faqs,
  faqButtonProps,
  containerProps,
}: FAQsProps): JSX.Element => {
  const {
    height: faqButtonHeight,
    className: faqButtonClassName,
    style: faqButtonStyle,
    ...faqButtonRestProps
  } = faqButtonProps ?? {} // Destructuring the props object and setting default values

  const { className: containerClassName, ...containerRestProps } =
    containerProps ?? {} // Destructuring the props object and setting default values

  const [activeFaq, setActiveFaq] = useState(null as null | number)
  return (
    <div
      className={`flex flex-col w-full max-w-3xl gap-3 mt-6 ${containerClassName}`}
      {...containerRestProps}
    >
      {faqs.map((faq, i) => (
        <button
          key={i}
          onClick={() => {
            setActiveFaq(activeFaq === i ? null : i)
          }}
          style={{
            height: activeFaq === i ? 'auto' : faqButtonHeight ?? 64,
            ...faqButtonStyle,
          }}
          className={`flex flex-col gap-4 px-[20px] py-3 sm:px-6 rounded-xl border-2 bg-neutral-95 dark:bg-neutral-95 w-full overflow-y-hidden ${faqButtonClassName}`}
          {...faqButtonRestProps}
        >
          <div className="flex items-center justify-between w-full">
            <h3 className="text-foreground-light dark:text-neutral-10 text-lg">
              {faq.question}
            </h3>
            <img src={activeFaq === i ? minus : plus} className="h-6 w-6" />
          </div>
          <AnimatePresence>
            <motion.p
              initial={{ height: 0 }}
              animate={{
                height: activeFaq === i ? 'auto' : 0,
                opacity: activeFaq === i ? 1 : 0,
              }}
              transition={{ duration: 0.1, ease: 'anticipate' }}
              exit={{ height: 0 }}
              className="text-neutral-40 pr-1 sm:pr-3 overflow-hidden text-start"
            >
              {faq.answer}
            </motion.p>
          </AnimatePresence>
        </button>
      ))}
    </div>
  )
}
export default FAQs
