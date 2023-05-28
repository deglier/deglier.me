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
    <html lang="en">
      <body
        className={cn(
          fira.variable,
          'relative h-full min-h-screen-adjusted bg-primary-950 font-mono text-primary-100 lg:max-h-screen-adjusted',
        )}
      >
        <div className="box-border flex h-full min-h-screen-adjusted p-4 lg:absolute lg:inset-0">
          <div className="relative flex w-full flex-1 flex-col divide-y divide-primary-500 overflow-hidden rounded-lg border border-primary-500 bg-primary-800">
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
