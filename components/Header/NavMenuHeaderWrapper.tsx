'use client'

import { ReactNode } from 'react'
import { cva } from 'class-variance-authority'

import { useToggleMenu } from '@/hooks/useToggleMenu'

const navHeader = cva(
  [
    'absolute bottom-0 top-[calc(3.5rem+1px)] flex w-full flex-col justify-between divide-y divide-primary-500 bg-primary-800 transition-opacity duration-500',
    'lg:relative lg:top-0 lg:flex-1 lg:flex-row',
  ],
  {
    variants: {
      isOpen: {
        true: 'visible opacity-100',
        false: 'invisible opacity-0 lg:visible lg:opacity-100',
      },
    },
  },
)

type Props = {
  children: ReactNode
}
export default function NavMenuHeaderWrapper({ children }: Props) {
  const isOpen = useToggleMenu().isOpen
  return <nav className={navHeader({ isOpen })}>{children}</nav>
}
