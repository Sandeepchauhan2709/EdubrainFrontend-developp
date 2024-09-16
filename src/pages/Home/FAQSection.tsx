import FAQ from '../../assets/data/faq'
import SectionHeader from './SectionHeader'
import type { JSX } from 'react'
import FAQs from '../../components/reusable/FAQs'
import vector9 from '../../assets/icons/Vector 9.svg'
import vector10 from '../../assets/icons/Vector 10.svg'

const FAQSection = (): JSX.Element => {
  return (
    <div className="relative">
      <img
        src={vector9}
        className="absolute -top-[80px] xl:-top-[150px] left-0 w-[142.35px] h-[79.83px] md:w-[237.65px] md:h-[132.3px] xl:w-[339.5px] xl:h-[189px]"
        alt=""
      />
      <img
        src={vector10}
        className="absolute top-[250px] sm:top-[120px] right-0 w-[142.35px] h-[79.83px] md:w-[237.65px] md:h-[132.3px] xl:w-[339.5px] xl:h-[189px]"
        alt=""
      />
      <section
        id="faq"
        className="flex flex-col items-center justify-center gap-12 overflow-hidden max-w-[1450px] mx-auto padding-x sm:overflow-visible"
      >
        <SectionHeader {...FAQ} />
        <FAQs
          faqs={FAQ.faqs}
          faqButtonProps={{
            className: '!bg-background !border-neutral-95',
          }}
        />
      </section>
    </div>
  )
}
export default FAQSection
