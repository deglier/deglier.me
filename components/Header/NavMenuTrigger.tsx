'use client'

import { useToggleMenu } from '@/hooks/useToggleMenu'

import { MenuIcon } from '@/components/ui/icons'
import CloseIcon from '@/components/ui/icons/Close'

export default function NavMenuTrigger() {
  const { toggle: toggleMenu, isOpen } = useToggleMenu()
  return (
    <button
      className=" bg-primary-0/0 px-5 transition-colors duration-300 lg:hidden"
      type="button"
      onClick={() => toggleMenu()}
      aria-label="Main menu"
      aria-expanded={isOpen}
    >
      <span className="sr-only">menu</span>
      {isOpen ? <CloseIcon size={26} /> : <MenuIcon />}
    </button>
  )
}
