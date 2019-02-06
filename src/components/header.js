import { Link, withPrefix } from 'gatsby'
import { transparentize } from 'polished'
import React from 'react'
import styled from '@emotion/styled'
import { configureAnchors } from 'react-scrollable-anchor'

import { colors, dimensions, heights, zIndex } from '../styles/variables'
import Container from './container'

const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.header};
  color: ${transparentize(0.5, colors.white)};
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: ${zIndex.header};
  grid-row: 1 / -1;
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
// TODO: mobile icons
export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile: typeof window !== 'undefined' && window.innerWidth < 768,
    }
    configureAnchors({ scrollDuration: 500 })
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateElement)
  }

  render() {
    const { isMobile } = this.state

    return (
      <StyledHeader>
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
              <Link to="home">
                <IconWrapper src={withPrefix('images/home.svg')} />
              </Link>
              <Link to="#portfolio">
                <IconWrapper src={withPrefix('images/portfolio.svg')} />
              </Link>
              <Link to="#about-me">
                <IconWrapper src={withPrefix('images/aboutme.svg')} />
              </Link>
              <Link to="#skills">
                <IconWrapper src={withPrefix('images/skills.svg')} />
              </Link>
              <Link to="#contact">
                <IconWrapper src={withPrefix('images/contact.svg')} />
              </Link>
            </MobileNavGroup>
          )}
        </HeaderInner>
      </StyledHeader>
    )
  }

  updateElement = () => this.setState({ isMobile: window.innerWidth < 768 })
}
