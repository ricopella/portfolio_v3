import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { transparentize } from 'polished'
import React from 'react'

import AboutMe from '../images/aboutme.svg'
import Contact from '../images/contact.svg'
import Home from '../images/home.svg'
import Portfolio from '../images/portfolio.svg'
import Skills from '../images/skills.svg'
import { colors, dimensions, zIndex } from '../styles/variables'
import Container from './container'

// Assets
const StyledHeader = styled.header`
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.header};
  color: ${transparentize(0.5, colors.white)};
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: ${zIndex.header};
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
`

const HeaderInner = styled(Container)`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: flex-end;
  max-width: 100em;
`

const HomepageLink = styled('a')`
  color: ${colors.gray.light};
  font-size: 1rem;
  font-weight: 600;
  justify-self: center;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`

const NavigationGroup = styled(`div`)`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(5, 100px);
`

const MobileNavGroup = styled(`div`)`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(5, 1fr);
`

const IconWrapper = styled.img`
  max-width: 40%;
  cursor: pointer;
`

const HeaderLogo = styled(`div`)`
  font-size: 3rem;
  color: ${colors.gray.light};
  align-self: center;
  padding-left: 100px;

  @media (max-width: 750px) {
    padding: 0;
  }
`

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile: typeof window !== 'undefined' && window.innerWidth < 768,
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateElement)
  }

  render() {
    const { isMobile } = this.state

    return (
      <StyledHeader>
        <HeaderLogo>nrs.</HeaderLogo>
        <HeaderInner>
          {!isMobile ? (
            <NavigationGroup>
              <HomepageLink href="#home">Home</HomepageLink>
              <HomepageLink href="#portfolio">Portfolio</HomepageLink>
              <HomepageLink href="#about-me">About Me</HomepageLink>
              <HomepageLink href="#skills">Skills</HomepageLink>
              <HomepageLink href="#contact">Contact</HomepageLink>
            </NavigationGroup>
          ) : (
            <MobileNavGroup>
              <Link to="#home">
                <IconWrapper src={Home} alt="Mobile Navigation Icon - Home" />
              </Link>
              <Link to="#portfolio">
                <IconWrapper
                  src={Portfolio}
                  alt="Mobile Navigation Icon - Portfolio"
                />
              </Link>
              <Link to="#about-me">
                <IconWrapper
                  src={AboutMe}
                  alt="Mobile Navigation Icon - About Me"
                />
              </Link>
              <Link to="#skills">
                <IconWrapper
                  src={Skills}
                  alt="Mobile Navigation Icon - Skills"
                />
              </Link>
              <Link to="#contact">
                <IconWrapper
                  src={Contact}
                  alt="Mobile Navigation Icon - Contact"
                />
              </Link>
            </MobileNavGroup>
          )}
        </HeaderInner>
      </StyledHeader>
    )
  }

  updateElement = () => this.setState({ isMobile: window.innerWidth < 768 })
}
