import styled from '@emotion/styled'
import { transparentize } from 'polished'
import React from 'react'
import { colors, dimensions, zIndex } from '../styles/variables'
import Container from './container'

const StyledHeader = styled.header`
  height: 6.25rem;
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

  @media (max-width: 46.875rem) {
    position: absolute;
    padding: 0px 0px;
    height: 6.25rem;
    grid-template-columns: 1fr;
    grid-template-rows: 6.25rem 1fr;
    transition: all 0.3s ease-in;

    &.active {
      position: fixed;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 6.25rem 1fr;
      height: 21.875rem;
    }
  }
`

const HeaderInner = styled(Container)`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: flex-end;
  max-width: 100em;

  @media (max-width: 46.875rem) {
    position: fixed;
    right: 0.9375rem;
    top: 0.625rem;
    height: initial;
  }
`

const HomepageLink = styled('a')`
  color: ${colors.gray.light};
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  align-self: center;
  justify-self: center;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`

const NavigationGroup = styled(`div`)`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(5, 6.25rem);
`

const MobileNavGroup = styled(`div`)`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
`

const HeaderLogo = styled(`div`)`
  font-size: 3rem;
  color: ${colors.gray.light};
  cursor: pointer;
  align-self: center;
  padding-left: 6.25rem;

  @media (max-width: 46.875rem) {
    padding: 0 1.5rem;
  }
`

const HamburgerWrapper = styled(`div`)`
  height: 5rem;
  width: 5rem;
  background: rgba(15, 0, 53, 0.5);
  pointer-events: auto;
  border-radius: 5rem;
  z-index: 100;
  cursor: pointer;
`

const HamburgerBar = styled(`div`)`
  position: absolute;
  z-index: 4;
  top: 50%;
  left: 50%;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
  height: 0.375rem;
  width: 66%;
  background: #fff;
  border-radius: 0.125rem;
  -webkit-transition: background 0.28s linear 0.12s,
    -webkit-transform 0.28s cubic-bezier(0.77, 0, 0.175, 1);
  transition: background 0.28s linear 0.12s,
    -webkit-transform 0.28s cubic-bezier(0.77, 0, 0.175, 1);
  -o-transition: background 0.28s 0.12s linear,
    transform 0.28s cubic-bezier(0.77, 0, 0.175, 1);
  transition: background 0.28s linear 0.12s,
    transform 0.28s cubic-bezier(0.77, 0, 0.175, 1);
  transition: background 0.28s linear 0.12s,
    transform 0.28s cubic-bezier(0.77, 0, 0.175, 1),
    -webkit-transform 0.28s cubic-bezier(0.77, 0, 0.175, 1);

  &::before {
    top: -0.875rem;
    content: '';
    position: absolute;
    display: block;
    height: 0.3125rem;
    width: 100%;
    background: #fff;
    border-radius: 0.125rem;
    -webkit-transform-origin: 5.5% center;
    -ms-transform-origin: 5.5% center;
    transform-origin: 5.5% center;
    -webkit-transition: -webkit-transform 0.28s cubic-bezier(0.77, 0, 0.175, 1);
    transition: -webkit-transform 0.28s cubic-bezier(0.77, 0, 0.175, 1);
    -o-transition: transform 0.28s cubic-bezier(0.77, 0, 0.175, 1);
    transition: transform 0.28s cubic-bezier(0.77, 0, 0.175, 1);
    transition: transform 0.28s cubic-bezier(0.77, 0, 0.175, 1),
      -webkit-transform 0.28s cubic-bezier(0.77, 0, 0.175, 1);
  }

  &::after {
    bottom: -0.875rem;
    content: '';
    position: absolute;
    display: block;
    height: 0.3125rem;
    width: 100%;
    background: #fff;
    border-radius: 0.125rem;
    -webkit-transform-origin: 5.5% center;
    -ms-transform-origin: 5.5% center;
    transform-origin: 5.5% center;
    -webkit-transition: -webkit-transform 0.28s cubic-bezier(0.77, 0, 0.175, 1);
    transition: -webkit-transform 0.28s cubic-bezier(0.77, 0, 0.175, 1);
    -o-transition: transform 0.28s cubic-bezier(0.77, 0, 0.175, 1);
    transition: transform 0.28s cubic-bezier(0.77, 0, 0.175, 1);
    transition: transform 0.28s cubic-bezier(0.77, 0, 0.175, 1),
      -webkit-transform 0.28s cubic-bezier(0.77, 0, 0.175, 1);
  }

  &.active {
    background: transparent;
    -webkit-transform: translateX(-35%) translateY(-53%);
    -ms-transform: translateX(-35%) translateY(-53%);
    transform: translateX(-35%) translateY(-53%);
    -webkit-transition: background 0.28s linear,
      -webkit-transform 0.28s cubic-bezier(0.77, 0, 0.175, 1);
    transition: background 0.28s linear,
      -webkit-transform 0.28s cubic-bezier(0.77, 0, 0.175, 1);
    -o-transition: background 0.28s linear,
      transform 0.28s cubic-bezier(0.77, 0, 0.175, 1);
    transition: background 0.28s linear,
      transform 0.28s cubic-bezier(0.77, 0, 0.175, 1);
    transition: background 0.28s linear,
      transform 0.28s cubic-bezier(0.77, 0, 0.175, 1),
      -webkit-transform 0.28s cubic-bezier(0.77, 0, 0.175, 1);
    &::before {
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }

    &::after {
      -webkit-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      transform: rotate(-45deg);
      bottom: -1.125rem;
    }
  }
`

const MobileDropdown = styled('div')`
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 3.125rem);
  background-color: #f8f8f8;
  height: 0px;
  opacity: 0;
  transition: all 0.3s ease-in;
  pointer-events: none;
  cursor: none;

  & a {
    font-size: 1.5rem;
  }

  &.active {
    opacity: 1;
    height: 15.625rem;
    pointer-events: initial;
    cursor: pointer;
  }
`

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile: typeof window !== 'undefined' && window.innerWidth < 768,
      menuIsShown: false,
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateElement)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateElement)
  }

  scrollToTop() {
    window.scrollTo(0, 0)
  }

  handleHamburgerClick() {
    this.setState({ menuIsShown: !this.state.menuIsShown })
  }

  updateElement = () => this.setState({ isMobile: window.innerWidth < 768 })

  render() {
    const { isMobile, menuIsShown } = this.state

    return (
      <>
        {!isMobile ? (
          <StyledHeader className={menuIsShown ? 'active' : null}>
            <HeaderLogo
              onClick={() => {
                this.scrollToTop()
                this.setState({ menuIsShown: false })
              }}
            >
              nrs.
            </HeaderLogo>
            <HeaderInner>
              {!isMobile ? (
                <NavigationGroup>
                  <HomepageLink onClick={() => this.scrollToTop()}>
                    Home
                  </HomepageLink>
                  <HomepageLink href="#portfolio">Portfolio</HomepageLink>
                  <HomepageLink href="#about-me">About Me</HomepageLink>
                  <HomepageLink href="#skills">Skills</HomepageLink>
                  <HomepageLink href="#contact">Contact</HomepageLink>
                </NavigationGroup>
              ) : null
              // <MobileNavGroup>
              //   <HamburgerWrapper
              //     onClick={() => this.handleHamburgerClick()}
              //     className={menuIsShown ? 'active' : null}
              //   >
              //     <HamburgerBar
              //       id={'bar1'}
              //       className={menuIsShown ? 'active' : null}
              //     />
              //   </HamburgerWrapper>
              // </MobileNavGroup>
              }
            </HeaderInner>
          </StyledHeader>
        ) : null}
      </>
    )
  }
}

/**
        {isMobile && (
          <MobileDropdown className={menuIsShown ? 'active' : null}>
            <HomepageLink
              onClick={() => {
                this.handleHamburgerClick()
                this.scrollToTop()
              }}
            >
              Home
            </HomepageLink>
            <HomepageLink
              href="#portfolio"
              onClick={() => this.handleHamburgerClick()}
            >
              Portfolio
            </HomepageLink>
            <HomepageLink
              href="#about-me"
              onClick={() => this.handleHamburgerClick()}
            >
              About Me
            </HomepageLink>
            <HomepageLink
              href="#skills"
              onClick={() => this.handleHamburgerClick()}
            >
              Skills
            </HomepageLink>
            <HomepageLink
              href="#contact"
              onClick={() => this.handleHamburgerClick()}
            >
              Contact
            </HomepageLink>
          </MobileDropdown>
        )}
        */
