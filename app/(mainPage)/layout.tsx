import { ReactNode } from 'react'

import Footer from '@/components/Footer'

export default function MainPageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex flex-1 lg:divide-x lg:divide-primary-500">
        {children}
      </div>
      <Footer className="hidden lg:flex" />
    </>
  )
}
