import Link from 'next/link'

import { CloseIcon } from '@/components/ui/icons'
import ScrollbarColumn from '@/components/ui/ScrollbarColumn'

import ContactForm from './components/ContactForm'
import FormContent from './components/FormContent'

export default function ContactMe() {
  return (
    <>
      <main className="flex-1 lg:grid lg:grid-cols-1 lg:[grid-template-rows:2.5rem_auto]">
        <div className="lg:flex lg:h-10 lg:divide-x lg:divide-primary-500 lg:border-b lg:border-b-primary-500">
          <div className="hidden h-full items-center gap-12 border-r border-r-primary-500 pl-4 pr-3 lg:flex">
            Contato
            <Link href="/" className="hover:text-primary-0">
              <CloseIcon size={18} />
            </Link>
          </div>
        </div>
        <div className="relative h-full flex-1 lg:grid lg:grid-cols-1 lg:gap-x-1 lg:divide-x lg:divide-primary-500 lg:overflow-hidden lg:pr-1 xl:grid-cols-2">
          <ScrollbarColumn className="px-7 py-9 lg:pt-28">
            <ContactForm />
          </ScrollbarColumn>
          <ScrollbarColumn
            className="px-7 py-9 xl:pt-28"
            rootClassName="hidden 2xl:block"
          >
            <FormContent />
          </ScrollbarColumn>
        </div>
      </main>
    </>
  )
}
