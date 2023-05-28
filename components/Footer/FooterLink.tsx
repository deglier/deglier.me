import { cva } from 'class-variance-authority'

import type { SiteDataContactSocial } from '@/app/siteData'

const styles = cva([
  'flex h-full items-center gap-2 bg-primary-0/0 px-3 text-primary-100/40',
  'transition-colors duration-300',
  'hocus:bg-primary-0/5 hocus:text-primary-100',
])

export default function FooterLink({
  icon,
  title,
  url,
  user,
}: SiteDataContactSocial) {
  return (
    <a
      className={styles()}
      href={url}
      title={title}
      target="_blank"
      rel="noreferrer"
    >
      {user && (
        <span className="hidden text-primary-100 xs:inline-block">{user}</span>
      )}
      {icon}
    </a>
  )
}
