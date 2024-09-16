import React from 'react'
import Card from './Card'
import Hero from './Hero'
import Curriculum from './Curriculum'
import SliderCard from './Slider'
import Certification from './Certification'
import Sectionlearn from './Sectionlearn'
import Payment from './Subscrition'
import FAQSection from '../../Home/FAQSection'
import SecondaryButton from '../../../components/buttons/SecondaryButton'
import PrimaryButton from '../../../components/buttons/PrimaryButton'
import InfoCard from '../../../pages/CoursePage/Ui/InfoCard'

interface UiProps {
  data: {
    title: string
    subtitle: string
    subtitle1: string
    poster: string
    Cardtitle: string
    Cardsubtitle: string
    Cardsubtitle1: string
    infoCardtitle: string
    infoCardsubtitle: string
    infoCardsubtitle1: string
    benefits: Benefit[]
    infobenefits: Benefit[]
  }
}

interface Benefit {
  icon: string
  title: string
  description: string
}

const UI: React.FC<UiProps> = ({ data }) => {
  console.log(data)
  return (
    <div className="overflow-hidden">
      <Hero
        title={data.title}
        subtitle={data.subtitle}
        subtitle1={data.subtitle1}
        videoSrc=""
        poster={data.poster}
      />
      <Card
        title1={data.Cardtitle}
        subtitle={data.Cardsubtitle}
        subtitle1={data.Cardsubtitle1}
        benefits={data.benefits}
      />
      <InfoCard
        title1={data.infoCardtitle}
        subtitle={data.infoCardsubtitle}
        subtitle1={data.infoCardsubtitle1}
        benefits={data.infobenefits}
      />
      <Curriculum />
      <SliderCard />
      <Certification />
      <Sectionlearn />
      <Payment
        package1={{
          title: 'Self-Paced',
          description:
            'Unlock foundational knowledge with our Basic Plan. Ideal for self-paced learners',
          oldPrice: 100,
          price: 20,
          features: [
            'Access to all course materials',
            'Self-paced learning',
            'Certificate of completion',
          ],
          buttonLabel: 'Start Learning Today',
        }}
        package2={{
          title: 'Mentor Support',
          description:
            'Unlock foundational knowledge with our Basic Plan. Ideal for self-paced learners',
          oldPrice: 1999,
          price: 1299,
          features: [
            'Dedicated mentor support',
            'Interactive live sessions',
            'Engaging assignments and projects',
          ],
          buttonLabel: 'Upgrade to Premium Excellence',
        }}
      />
      <FAQSection />
      <div className="py-10">
        <div className="flex flex-col items-center">
          <span className="text-[48px] font-700 font-Roboto text-white max-sm:text-[24px]">
            Are you Ready to become
          </span>
          <span className="text-[48px] font-700 font-Roboto text-white max-sm:text-[24px]">
            Master in UI/UX design?
          </span>
          <div className="flex gap-3 py-6 justify-center">
            <SecondaryButton>See the curriculum</SecondaryButton>
            <PrimaryButton>Enroll Now</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UI
