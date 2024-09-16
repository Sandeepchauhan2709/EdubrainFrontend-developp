import { useParams } from 'react-router-dom'
import tick from '../../../assets/icons/tick-circle.svg'
import refer from '../../../assets/images/refer.svg'
import refersm from '../../../assets/images/refersm.svg'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { type ICourse } from '../../../types/course.types'
import { getAllCourses } from '../../../api/courses'

interface PackageProps {
  title: string
  description: string
  oldPrice: number
  price: number
  features: string[]
  buttonLabel: string
}

interface PaymentProps {
  package1: PackageProps
  package2: PackageProps
}

const Payment: React.FC<PaymentProps> = ({ package1, package2 }) => {
  const { page } = useParams()
  const { data, isLoading, isError } = useQuery<ICourse[]>({
    queryKey: ['courses'],
    queryFn: getAllCourses,
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error loading course data.</div>
  }

  // Default values
  let courseBasePrice = package1.oldPrice
  let courseDiscounted = package1.price

  // Determine specific course details based on 'page'
  if (data && data.length > 0) {
    if (page === 'uiux') {
      courseBasePrice = data[0].basePrice
      courseDiscounted = data[0].discountedPercent
    }
    if (page === 'mernstack') {
      courseBasePrice = data[1].basePrice
      courseDiscounted = data[1].discountedPercent
    }
    if (page === 'python') {
      courseBasePrice = data[2].basePrice
      courseDiscounted = data[2].discountedPercent
    }
  }
  return (
    <div className="m-2">
      <div className="flex gap-12 justify-center max-sm:flex-col max-lg:gap-2 py-10 max-lg:hidden">
        <div className="flex justify-center">
          <div className="flex flex-col gap-6 bg-[#121721] p-10 w-[600px] max-sm:w-[340px] rounded-xl max-xl:w-[470px]">
            <div className="bg-[#246BFD1A] w-[100px] px-2 py-1 rounded-xl">
              <span className="text-[#246BFD]">{package1.title}</span>
            </div>
            <span className="text-white text-[24px] font-Lato font-400 line-through">
              ₹{courseBasePrice}
            </span>
            <span className="text-white text-[48px] font-Lato font-600">
              ₹{courseDiscounted}
            </span>
            <p className="text-white pr-16">{package1.description}</p>
            <hr className="bg-white" />
            {package1.features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <img src={tick} alt="" />
                <p className="text-[20px] text-white">{feature}</p>
              </div>
            ))}
            <button
              className={`bg-[#246BFD]  font-semibold text-white px-10 py-4 rounded-xl`}
            >
              {package1.buttonLabel}
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-6 bg-[#121721] p-10 w-[600px] max-sm:w-[410px] rounded-xl border border-[#FF9300]">
          <div className="bg-[#FF93001A] w-[140px] px-2 py-1 rounded-xl">
            <span className="text-[#FF9300]">{package2.title}</span>
          </div>
          <span className="text-white text-[24px] font-Lato font-400 line-through">
            {package2.oldPrice}
          </span>
          <span className="text-white text-[48px] font-Lato font-600">
            {package2.price}
          </span>
          <p className="text-white pr-16">{package2.description}</p>
          <hr className="bg-white" />
          {package2.features.map((feature, index) => (
            <div key={index} className="flex gap-4">
              <img src={tick} alt="" />
              <p className="text-[20px] text-white">{feature}</p>
            </div>
          ))}
          <button
            className={`bg-[#FF9300] font-semibold text-white px-6 py-4 rounded-xl`}
          >
            {package2.buttonLabel}
          </button>
        </div>
      </div>
      <div className="py-16 pb-[100px] max-lg:px-6 flex justify-center max-sm:hidden">
        <img src={refer} alt="" />
      </div>
      <div className="py-2 flex justify-center sm:hidden">
        <img src={refersm} alt="" />
      </div>
    </div>
  )
}

export default Payment
