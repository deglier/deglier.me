'use client'

import { ReactNode, useEffect } from 'react'

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
  const { isOpen, toggle } = useToggleMenu()
  useEffect(() => {
    const appDiv = document.getElementById('app')
    if (appDiv) {
      if (isOpen) {
        document.body.classList.add('overflow-y-hidden')
        appDiv.classList.add('overflow-y-hidden')
      } else {
        document.body.classList.remove('overflow-y-hidden')
        appDiv.classList.remove('overflow-y-hidden')
      }
    }
  }, [isOpen])
  return (
    <>
      {isOpen && (
        <button
          type="button"
          className={cn(
            'absolute -left-4 -right-4 -top-4 bottom-0 h-screen-adjusted lg:hidden',
            // {
            //   'h-[calc((var(--vh,_1vh)*100)-85px)] opacity-100 duration-300':
            //     isOpen,
            //   'h-0 opacity-0 delay-200 duration-500 lg:visible lg:opacity-100':
            //     !isOpen,
            // },
          )}
          onClick={() => toggle()}
        />
      )}

      <nav
        className={cn(
          // 'absolute bottom-[calc(1rem+1px)] left-[calc(1rem+1px)] right-[calc(1rem+1px)] top-[calc(4.5rem+2px)] flex flex-col justify-between divide-y divide-primary-500 rounded-b-lg border bg-primary-800 transition-opacity duration-500',
          'absolute -left-px top-14 flex w-[calc(100%+2px)] flex-col justify-between divide-y divide-primary-500 overflow-hidden border border-primary-500 bg-primary-800 transition-all',
          'lg:relative lg:left-auto lg:right-auto lg:top-0 lg:h-auto lg:flex-1 lg:flex-row lg:rounded-b-none lg:rounded-tr-lg lg:border-0 lg:bg-transparent lg:transition-none',
          {
            'h-[calc(var(--vh,_1vh)*60)] opacity-100 delay-200 duration-500':
              isOpen,
            'h-0 opacity-0 duration-500 lg:opacity-100': !isOpen,
          },
        )}
      >
        {children}
      </nav>
    </>
  )
}
