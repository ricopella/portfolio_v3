import React, { useState } from 'react'
import useIsMobile from '../../hooks/useIsMobile'
import Styled from './Header.styles'

const Header = () => {
  const [isMenuShown, setIsMenuShown] = useState<boolean>(false)
  const isMobile: boolean = useIsMobile()

  const scrollToTop = () => window.scrollTo(0, 0)

  const handleHamburgerMenu = () => setIsMenuShown(cur => !cur)

  // TODO: Move Nav items to gatsby-config and map over them

  return (
    <>
      {!isMobile ? (
        <Styled.Header className={isMenuShown ? 'active' : ''}>
          <Styled.HeaderLogo
            onClick={() => {
              scrollToTop()
              setIsMenuShown(false)
            }}
          >
            nrs.
          </Styled.HeaderLogo>
          <Styled.HeaderInner>
            {!isMobile ? (
              <Styled.NavigationGroup>
                <Styled.HomepageLink onClick={() => scrollToTop()} href="#home">
                  Home
                </Styled.HomepageLink>
                <Styled.HomepageLink href="#portfolio">
                  Portfolio
                </Styled.HomepageLink>
                <Styled.HomepageLink href="#about-me">
                  About Me
                </Styled.HomepageLink>
                <Styled.HomepageLink href="#skills">Skills</Styled.HomepageLink>
                <Styled.HomepageLink href="#contact">
                  Contact
                </Styled.HomepageLink>
              </Styled.NavigationGroup>
            ) : null}
          </Styled.HeaderInner>
        </Styled.Header>
      ) : (
        <Styled.MobileNavGroup>
          <Styled.HamburgerWrapper
            onClick={() => handleHamburgerMenu()}
            className={isMenuShown ? 'active' : ''}
          >
            <Styled.HamburgerBar
              id={'bar1'}
              className={isMenuShown ? 'active' : ''}
            />
          </Styled.HamburgerWrapper>
        </Styled.MobileNavGroup>
      )}
      {isMobile ? (
        <Styled.MobileDropdown className={isMenuShown ? 'active' : ''}>
          <Styled.HomepageLink
            onClick={() => {
              handleHamburgerMenu()
              scrollToTop()
            }}
          >
            Home
          </Styled.HomepageLink>
          <Styled.HomepageLink
            href="#portfolio"
            onClick={() => handleHamburgerMenu()}
          >
            Portfolio
          </Styled.HomepageLink>
          <Styled.HomepageLink
            href="#about-me"
            onClick={() => handleHamburgerMenu()}
          >
            About Me
          </Styled.HomepageLink>
          <Styled.HomepageLink
            href="#skills"
            onClick={() => handleHamburgerMenu()}
          >
            Skills
          </Styled.HomepageLink>
          <Styled.HomepageLink
            href="#contact"
            onClick={() => handleHamburgerMenu()}
          >
            Contact
          </Styled.HomepageLink>
        </Styled.MobileDropdown>
      ) : null}
    </>
  )
}

export default Header
