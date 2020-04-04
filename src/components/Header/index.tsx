import React, { FC, useEffect, useState } from 'react'
import useIsMobile from '../../hooks/useIsMobile'
import Styled from './Header.styles'
import useSiteMetaData from '../../hooks/useSiteMetaData'
import setHref from '../../utils/setHref'

const Header: FC<{}> = () => {
  const [isMenuShown, setIsMenuShown] = useState<boolean>(false)
  const [activeClassName, setActiveClassName] = useState<string>('')
  const { headerItems, titleTemplate } = useSiteMetaData()
  const isMobile: boolean = useIsMobile()
  const scrollToTop = () => window.scrollTo(0, 0)
  const handleHamburgerMenu = () => setIsMenuShown(cur => !cur)

  useEffect(() => {
    setActiveClassName(isMenuShown ? 'active' : '')
  }, [isMenuShown])

  const renderDesktopHeader = () => (
    <Styled.Header className={activeClassName}>
      <Styled.HeaderLogo
        onClick={() => {
          scrollToTop()
          setIsMenuShown(false)
        }}
        href={setHref(headerItems[0])}
      >
        {titleTemplate}
      </Styled.HeaderLogo>
      <Styled.HeaderInner>
        {!isMobile ? (
          <Styled.NavigationGroup>
            {headerItems.map(item => (
              <Styled.HomepageLink
                key={`homepage_link_${item}`}
                href={setHref(item)}
              >
                {item}
              </Styled.HomepageLink>
            ))}
          </Styled.NavigationGroup>
        ) : null}
      </Styled.HeaderInner>
    </Styled.Header>
  )

  const renderMobileNav = () => (
    <>
      {/* Mobile Hamburger Icon */}
      <Styled.MobileNavGroup>
        <Styled.HamburgerWrapper
          onClick={() => handleHamburgerMenu()}
          className={activeClassName}
        >
          <Styled.HamburgerBar className={activeClassName} id={'bar1'} />
        </Styled.HamburgerWrapper>
      </Styled.MobileNavGroup>
      {/* Mobile Dropdown */}
      <Styled.MobileDropdown className={activeClassName}>
        {headerItems.map(item => (
          <Styled.HomepageLink
            key={`mobile_homepage_link_${item}`}
            href={setHref(item)}
            onClick={() => handleHamburgerMenu()}
          >
            {item}
          </Styled.HomepageLink>
        ))}
      </Styled.MobileDropdown>
    </>
  )

  return <>{!isMobile ? renderDesktopHeader() : renderMobileNav()}</>
}

export default Header
