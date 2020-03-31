import {
  BREAKPOINTS,
  COLORS,
  DIMENSIONS,
  HEIGHTS,
  FONT_WIDTHS,
  Z_INDEX,
} from '../../styles/variables'
import styled from '@emotion/styled'
import { transparentize } from 'polished'

const Header = styled.header`
  background-color: ${COLORS.header};
  color: ${transparentize(0.5, COLORS.white)};
  display: grid;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  grid-template-columns: max-content 1fr;
  grid-template-rows: 1fr;
  height: ${HEIGHTS.HEADER};
  left: 0;
  padding: 0 ${DIMENSIONS.containerPadding}rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${Z_INDEX.HEADER};

  // MOBILE MENU (Breaks at tablet size)
  @media (max-width: ${BREAKPOINTS.mdRem}) {
    position: absolute;
    padding: 0 0;
    grid-template-columns: 1fr;
    grid-template-rows: ${HEIGHTS.HEADER} 1fr;
    transition: all 0.3s ease-in;

    &.active {
      position: fixed;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: ${HEIGHTS.HEADER} 1fr;
      height: ${HEIGHTS.MOBILE_MENU};
    }
  }
`

const HeaderInner = styled(`div`)`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: flex-end;
  max-width: 100rem;

  // MOBILE MENU (Breaks at tablet size)
  @media (max-width: ${BREAKPOINTS.mdRem}) {
    position: fixed;
    right: 0.9375rem;
    top: 0.625rem;
    height: initial;
  }
`

const HomepageLink = styled('a')`
  color: ${COLORS.gray.light};
  cursor: pointer;
  font-size: ${DIMENSIONS.fontSize.regular};
  font-weight: ${FONT_WIDTHS.SEMI_BOLD};
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
  background-color: transparent;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  padding: 5% 5%;
  position: fixed;
  z-index: ${Z_INDEX.MOBILE_NAV_BUTTON};
`

const HeaderLogo = styled(`div`)`
  font-size: 3rem;
  color: ${COLORS.gray.light};
  cursor: pointer;
  align-self: center;
  padding-left: 6.25rem;

  @media (max-width: 46.875rem) {
    padding: 0 1.5rem;
  }
`

const HamburgerWrapper = styled(`div`)`
  background: rgba(15, 0, 53, 0.5);
  border-radius: 5rem;
  cursor: pointer;
  height: 5rem;
  pointer-events: auto;
  position: relative;
  width: 5rem;
  z-index: ${Z_INDEX.HEADER};
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
  background: ${COLORS.white};
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
    background: ${COLORS.white};
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
    background: ${COLORS.white};
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
  height: 0;
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

export default {
  HamburgerBar,
  HamburgerWrapper,
  Header,
  HeaderInner,
  HeaderLogo,
  HomepageLink,
  MobileDropdown,
  MobileNavGroup,
  NavigationGroup,
}
