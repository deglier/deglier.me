import { ReactNode } from 'react'

import Footer from '@/components/Footer'

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex-1 lg:flex lg:divide-x lg:divide-primary-500 lg:overflow-hidden">
        {children}
      </div>
      <Footer />
    </>
  )
}
