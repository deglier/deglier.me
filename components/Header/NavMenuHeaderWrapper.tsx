'use client'

import { ReactNode } from 'react'

// import { cva } from 'class-variance-authority'

import cn from '@/utils/cn'
import { useToggleMenu } from '@/hooks/useToggleMenu'

// const navHeader = cva(
//   [
//     'absolute bottom-[calc(1rem+1px)] left-[calc(1rem+1px)] right-[calc(1rem+1px)] top-[calc(4.5rem+2px)] flex flex-col justify-between divide-y divide-primary-500 rounded-b-lg bg-primary-800 transition-opacity duration-500',
//     'lg:relative lg:left-auto lg:right-auto lg:top-0 lg:flex-1 lg:flex-row lg:rounded-b-none lg:rounded-tr-lg lg:bg-transparent',
//   ],
//   {
//     variants: {
//       isOpen: {
//         true: 'visible opacity-100',
//         false: 'invisible opacity-0 lg:visible lg:opacity-100',
//       },
//     },
//   },
// )

type Props = {
  children: ReactNode
}
export default function NavMenuHeaderWrapper({ children }: Props) {
  const isOpen = useToggleMenu().isOpen
  return (
    <nav
      className={cn(
        'absolute bottom-[calc(1rem+1px)] left-[calc(1rem+1px)] right-[calc(1rem+1px)] top-[calc(4.5rem+2px)] flex flex-col justify-between divide-y divide-primary-500 rounded-b-lg bg-primary-800 transition-opacity duration-500',
        'lg:relative lg:left-auto lg:right-auto lg:top-0 lg:flex-1 lg:flex-row lg:rounded-b-none lg:rounded-tr-lg lg:bg-transparent',
        {
          'visible opacity-100': isOpen,
          'invisible opacity-0 lg:visible lg:opacity-100': !isOpen,
        },
      )}
    >
      {children}
    </nav>
  )
}
