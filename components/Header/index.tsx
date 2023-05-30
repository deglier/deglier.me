import Link from 'next/link'

import { Logo } from '@/components/ui/icons'

import NavMenuHeader from './NavMenuHeader'
import NavMenuTrigger from './NavMenuTrigger'

export default function Nav() {
  return (
    <header className="relative z-10 flex h-14 justify-between lg:z-0 lg:justify-start lg:divide-x lg:divide-primary-500">
      <Link className="flex h-full items-center gap-2 px-5 lg:w-78" href="/">
        <Logo />
        deglier-amorim
      </Link>
      <NavMenuHeader />
      <NavMenuTrigger />
    </header>
  )
}
