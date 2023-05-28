'use client'

import Link from 'next/link'
import { useSelectedLayoutSegments } from 'next/navigation'
import { cva } from 'class-variance-authority'

import { useToggleMenu } from '@/hooks/useToggleMenu'

const navLink = cva(
  [
    'relative flex items-center bg-primary-0/0 px-5 py-5 transition-colors duration-200',
    'after:absolute after:inset-y-0 after:left-0 after:w-[3px] after:rounded-full after:transition-colors after:duration-200',
    'hover:bg-primary-0/5 hover:text-primary-0 hover:after:bg-accent-orange',
    'lg:h-full lg:px-8 lg:py-0',
    'lg:after:inset-x-0 lg:after:inset-y-auto lg:after:-bottom-px lg:after:h-[3px] lg:after:w-full',
  ],
  {
    variants: {
      active: {
        true: 'text-primary-0 after:bg-accent-orange',
        false: 'before:bg-accent-orange/0',
      },
    },
    defaultVariants: {
      active: false,
    },
  },
)

type Props = {
  label: string
  path: string
  targetSegment: string | null
}

export default function NavMenuLinkItem({ label, path, targetSegment }: Props) {
  const segments = useSelectedLayoutSegments()
  const toggle = useToggleMenu().toggle
  // const active = activeSegment[0] === targetSegment
  const active =
    segments.filter((segment) => segment === targetSegment).length > 0
  console.log(segments, targetSegment)
  return (
    <Link
      className={navLink({ active })}
      href={path}
      onClick={() => toggle(false)}
    >
      {label}
    </Link>
  )
}
