import React, { type ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'large'
}

const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  className,
  ...props
}) => {
  return (
    <button
      className={twMerge(
        'text-[16px] px-6 text-white font-normal bg-background rounded-[8px] h-[48px] md:text-[18px] md:h-[54px]',
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

export default Button
