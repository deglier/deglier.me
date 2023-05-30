import { ReactNode } from 'react'

import './globals.css'

import { Metadata } from 'next'
import { Fira_Code as FiraCode } from 'next/font/google'
import UpdateViewport from '@/libs/UpdateViewport'

import cn from '@/utils/cn'

import Header from '@/components/Header'
import { TailwindIndicator } from '@/components/TailwindIndicator'

const fira = FiraCode({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: {
    default: 'Deglier Amorim',
    template: '%s | Deglier Amorim',
  },
  description:
    'Front-end engineering and web developer based in Rio de Janeiro, Brazil. Working on projects from the beginning to the end.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          fira.variable,
          'relative grid h-full min-h-screen-adjusted overflow-y-auto overflow-x-hidden bg-primary-950 font-mono text-primary-100 scrollbar-thin scrollbar-thumb-slate-400 lg:max-h-screen-adjusted lg:overflow-y-hidden',
        )}
      >
        <div
          id="app"
          className="box-border flex overflow-x-hidden p-4 lg:absolute lg:inset-0 lg:overflow-y-hidden"
        >
          <div className="grid w-full flex-1 grid-rows-[3.5rem_1fr_3rem] divide-y divide-primary-500 rounded-lg border border-primary-500 bg-primary-800 backdrop-blur-lg lg:backdrop-blur-2xl">
            <Header />
            {children}
          </div>
        </div>
        <UpdateViewport />
        <TailwindIndicator />
      </body>
    </html>
  )
}
