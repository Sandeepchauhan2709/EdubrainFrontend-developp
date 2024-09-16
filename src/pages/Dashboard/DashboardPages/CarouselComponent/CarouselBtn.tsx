import PropTypes from 'prop-types'
import React from 'react'

import leftBtn from '../../../../assets/icons/arrow-left.svg'
import rightBtn from '../../../../assets/icons/arrow-right.svg'

interface CarouselBtnProps {
  btnpressprev: () => void
  btnpressnext: () => void
  slideName: string
}

const CarouselBtn = ({
  btnpressprev,
  btnpressnext,
}: CarouselBtnProps): JSX.Element => {
  return (
    <div className="flex items-center gap-6 dark:text-neutral-10 text-neutral-75 text-[24px]">
      <img
        className="invert dark:invert-0 hover:bg-primary-55 rounded cursor-pointer"
        onClick={btnpressprev}
        src={leftBtn}
        alt=""
      />
      {/* <svg
        onClick={btnpressprev}
        className="cursor-pointer hover:bg-primary-60 dark:text-neutral-10 text-neutral-75 rounded transition duration-300"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M15 19.9201L8.48003 13.4001C7.71003 12.6301 7.71003 11.3701 8.48003 10.6001L15 4.08014"
          stroke="#F9F5FF"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg> */}

      <img
        className="invert dark:invert-0 hover:bg-primary-55 rounded cursor-pointer"
        onClick={btnpressnext}
        src={rightBtn}
        alt=""
      />
      {/* <svg
        onClick={btnpressnext}
        className="cursor-pointer hover:bg-primary-60 dark:text-neutral-10 text-neutral-75 rounded transition duration-300"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M8.90997 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.90997 4.08014"
          stroke="#F9F5FF"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg> */}
    </div>
  )
}

CarouselBtn.propTypes = {
  btnpressprev: PropTypes.func.isRequired,
  btnpressnext: PropTypes.func.isRequired,
  slideName: PropTypes.string.isRequired,
}

export default CarouselBtn
