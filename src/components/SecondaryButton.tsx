import type { ButtonHTMLAttributes } from 'react'

function SecondaryButton({
  className = '',
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...rest}
      className={`flex flex-1 items-center justify-center self-stretch rounded-[14px] bg-[rgba(97,97,97,0.10)] px-2.5 py-2.25 font-['Roboto'] text-[17px] font-semibold leading-[125%] text-[#616161] transition-colors ${className}`}
    >
      {children}
    </button>
  )
}

export default SecondaryButton
