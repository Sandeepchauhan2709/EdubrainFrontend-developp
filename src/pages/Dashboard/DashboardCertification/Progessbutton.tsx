import React, { useState } from 'react'
import drop from '../../../assets/images/arrow-down.svg'

interface ButtonProps {
  progressText: string
  completeText: string
}

const Button: React.FC<ButtonProps> = ({
  progressText,
  completeText,
}): JSX.Element => {
  const [progress, setProgress] = useState<number>(0)

  const handleButtonClick = (): void => {
    // Simulating progress increase
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 5
        } else {
          clearInterval(interval) // Clear interval immediately upon reaching 100%
          return 100
        }
      })
    }, 500)
  }

  return (
    <button
      type="button"
      className=" bg-[#C9B8FF] text-white px-4 py-3 rounded-xl relative overflow-hidden min-w-125"
      data-progress-text={progressText}
      data-complete-text={completeText}
      onClick={handleButtonClick}
      style={{ position: 'relative' }}
    >
      <div
        className=" bg-purple-950 bg-opacity-20 absolute top-0 left-0 h-full transition-width"
        style={{ width: `${progress}%` }}
      ></div>
      <span className="relative text-[24px] flex justify-between px-2 font-Roboto">
        {progress < 100 ? 'Download your certificate' : completeText}{' '}
        <img src={drop} alt="" />
      </span>
    </button>
  )
}

export default Button
