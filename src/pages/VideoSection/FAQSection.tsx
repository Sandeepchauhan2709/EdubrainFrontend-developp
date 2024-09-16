import type { JSX } from 'react'
import FAQs from '../../components/reusable/FAQs'

interface FAQSectionProps {
  faqs: Array<{ question: string; answer: string }>
}

const FAQSection = (props: FAQSectionProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-4 mt-2">
      <h4 className="sub-heading text-foreground-light dark:text-neutral-10">
        FAQs
      </h4>
      <FAQs
        faqs={props.faqs}
        faqButtonProps={{
          height: 58,
        }}
        containerProps={{
          className: 'max-w-none',
        }}
      />
    </div>
  )
}
export default FAQSection
