import Footer from '@/components/Footer'
import NavMenuLinkItem from '@/components/Header/NavMenuLinkItem'
import Spacer from '@/components/Spacer'
import { siteData } from '@/app/siteData'

import NavMenuHeaderWrapper from './NavMenuHeaderWrapper'

export default function NavMenuHeader() {
  const links = siteData.links
  const linksLeft = links
    .slice(0, links.length - 1)
    .map((link) => <NavMenuLinkItem key={link.label} {...link} />)
  const linksRight = links
    .slice(-1)
    .map((link) => <NavMenuLinkItem key={link.label} {...link} />)
  return (
    <NavMenuHeaderWrapper>
      <div className="divide-y divide-primary-500 border-b border-b-primary-500 lg:flex lg:flex-1 lg:divide-x lg:divide-y-0 lg:border-0">
        {linksLeft}
        <Spacer className="hidden lg:block" />
        {linksRight}
      </div>
      <Footer className="lg:hidden" />
    </NavMenuHeaderWrapper>
  )
}
