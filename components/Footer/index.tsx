import cn from '@/utils/cn'

import Spacer from '@/components/Spacer'
import { siteData } from '@/app/siteData'

import FooterLink from './FooterLink'

export default function Footer({ className }: { className?: string }) {
  const socialLinks = siteData.contacts.social

  return (
    <footer className={cn('flex h-12 divide-x divide-primary-500', className)}>
      <span className="flex h-full w-full min-w-min items-center pl-5 xs:w-37">
        find me in:
      </span>
      {socialLinks.slice(0, socialLinks.length - 1).map(({ ...props }) => (
        <FooterLink key={props.title} {...props} />
      ))}
      <Spacer className="hidden xs:block" />
      {socialLinks.slice(-1).map(({ ...props }) => (
        <FooterLink key={props.title} {...props} />
      ))}
    </footer>
  )
}
