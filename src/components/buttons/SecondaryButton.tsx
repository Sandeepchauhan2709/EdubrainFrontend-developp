import React from 'react'
import { twMerge } from 'tailwind-merge'
import type { ButtonHTMLAttributes } from 'react' // Importing ButtonHTMLAttributes directly as a type

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'large'
}

const SecondaryButton: React.FC<ButtonProps> = ({
  variant = 'default',
  className,
  ...props
}) => {
  const scrollToCurriculum = (): void => {
    const curriculumSection = document.getElementById('curriculumSection')
    if (curriculumSection !== null) {
      // Check for null explicitly
      curriculumSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <button
      onClick={scrollToCurriculum}
      className={twMerge(
        `text-[16px] px-6 transition-colors font-normal text-neutral-80 bg-neutral-15 dark:bg-[#161C29] dark:text-primary-30 hover:bg-neutral-20 dark:hover:bg-[#273247] dark:active:bg-[#11151F] dark:disabled:bg-neutral-100 dark:disabled:text-neutral-50 dark:focus:bg-[#161C29] active:bg-neutral-30 disabled:bg-neutral-10 disabled:text-neutral-30 focus:bg-neutral-15 focus:border-neutral-80 dark:focus:border-neutral-60 focus:border rounded-[8px] h-[48px] md:text-[18px] md:h-[54px]`,
        variant === 'default'
          ? '2xl:text-[16px] xl:h-[48px]'
          : '2xl:text-[20px] xl:h-[64px]',
        className
      )}
      {...props}
    >
      {props.children}
    </button>
  )
}

export default SecondaryButton
