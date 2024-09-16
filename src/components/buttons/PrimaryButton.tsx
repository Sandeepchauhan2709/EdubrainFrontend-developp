import React, { type ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'large'
}

const PrimaryButton: React.FC<ButtonProps> = ({
  className,
  variant = 'default',
  ...props
}) => {
  return (
    <button
      className={twMerge(
        `text-[16px] px-6 transition-colors font-normal text-white dark:text-neutral-100 bg-primary-60 dark:bg-primary-30 dark:hover:bg-primary-50 dark:active:bg-primary-80 dark:disabled:bg-primary-10 dark:disabled:text-primary-30 hover:bg-primary-80 active:bg-primary-100 disabled:bg-primary-10 focus:bg-primary-30 dark:focus:bg-primary-30 focus:border-neutral-80 dark:focus:border-neutral-60 focus:border rounded-[8px] h-[48px] md:text-[18px] md:h-[54px]`,
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

export default PrimaryButton
