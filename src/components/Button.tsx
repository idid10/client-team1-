import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
}

function Button({ active = false, disabled, className = '', children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      disabled={disabled ?? !active}
      className={`cursor-pointer h-[58px] w-full font-['Roboto'] text-[17px] font-semibold leading-[125%] transition-colors ${
        active
          ? 'rounded-xl bg-[#00CF76] text-white'
          : 'rounded-[14px] bg-[#EFEFEF] text-[#C8C8C8]'
      } ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
