import { ReactNode } from 'react'

import cn from '@/utils/cn'

type ButtonProps = {
  children: ReactNode
  className?: string
  type?: 'submit' | 'button'
}
export default function Button({
  children,
  className,
  type = 'button',
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        'rounded-lg bg-primary-500 px-[0.875rem] py-[0.625rem] text-primary-0 transition-colors hover:bg-primary-300',
        className,
      )}
    >
      {children}
    </button>
  )
}
