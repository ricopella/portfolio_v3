import MenuItemStyled from '../MenuItem/MenuItem.styles'
import MenuToggle from '../MenuToggle'
import Navigation from '../Navigation'
import React, { FC, useContext } from 'react'
import Styled from './Header.styles'
import ThemeContext from '../../providers/ThemeContext'
import { SLIDE_IN_ANIMATION_OPTIONS } from '../../styles/variables'
import { useCycle } from 'framer-motion'

/**
 * Component that handles the Menu Hamburger and opens the side menu
 *
 */
const Header: FC<{}> = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const { isThemeDark, setIsThemeDark } = useContext(ThemeContext)

  const renderThemeToggle = () => (
    <Styled.ThemeToggleWrapper
      variants={{
        closed: {
          opacity: 0,
          y: 20,
        },
        open: {
          opacity: 1,
          y: 0,
        },
      }}
      onClick={() => (setIsThemeDark ? setIsThemeDark(curr => !curr) : null)}
    >
      <Styled.ThemeToggleInner
        initial="dark"
        animate={isThemeDark ? 'dark' : 'light'}
        exit="dark"
        variants={{
          dark: {
            left: 6,
            top: 6,
          },
          light: {
            left: 50,
            top: 6,
          },
        }}
      />
    </Styled.ThemeToggleWrapper>
  )

  return (
    <Styled.Nav animate={isOpen ? 'open' : 'closed'} initial={false}>
      <Styled.NavBackground variants={Styled.SIDEBAR_VARIANTS} />
      {renderThemeToggle()}
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </Styled.Nav>
  )
}

export default Header
