import { ReactNode } from 'react'

import { MailIcon } from '@/components/ui/icons'
import ExternalLinkIcon from '@/components/ui/icons/ExternalLink'
import Footer from '@/components/Footer'
import { siteData } from '@/app/siteData'

export default function ContactMeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex-1 lg:flex lg:divide-x lg:divide-primary-500 lg:overflow-hidden">
        <aside className="lg:flex lg:w-78">
          <p className="flex h-18 items-center pl-5 text-primary-0 lg:hidden">
            _contact-me
          </p>
          <nav className="w-full space-y-1 divide-primary-500 lg:divide-y">
            <details open>
              <summary className="cursor-pointer select-none border-b border-b-primary-500 bg-primary-500 py-1 pl-5 leading-snug text-primary-0 lg:bg-transparent lg:py-[0.53125rem]">
                contacts
              </summary>
              <div className="py-4 pl-5">
                <p className="flex items-center gap-2">
                  <MailIcon size={18} />
                  <a
                    href="mailto:hi@deglier.me"
                    className="hover:text-primary-0"
                  >
                    hi@deglier.me
                  </a>
                </p>
              </div>
            </details>
            <details>
              <summary className="cursor-pointer select-none border-b border-b-primary-500 bg-primary-500 py-1 pl-5 leading-snug text-primary-0 lg:bg-transparent lg:py-[0.53125rem]">
                find-me-also-in
              </summary>
              <ul className="space-y-2 py-4 pl-5">
                {siteData.contacts.social.map((link, i) => (
                  <li className="flex items-center gap-2" key={i}>
                    <ExternalLinkIcon size={20} />
                    <a href={link.url} className="hover:text-primary-0">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          </nav>
        </aside>
        {children}
      </div>
      <Footer />
    </>
  )
}
