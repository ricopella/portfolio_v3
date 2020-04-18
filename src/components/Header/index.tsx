import MenuItemStyled from '../MenuItem/MenuItem.styles'
import MenuToggle from '../MenuToggle'
import Navigation from '../Navigation'
import React, { FC } from 'react'
import Styled from './Header.styles'
import ThemeToggle from '../ThemeToggle'
import { useCycle } from 'framer-motion'

/**
 * Component that handles the Menu Hamburger and opens the side menu
 *
 */
const Header: FC<{}> = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)

  return (
    <Styled.Nav animate={isOpen ? 'open' : 'closed'} initial={false}>
      <Styled.NavBackground variants={Styled.SIDEBAR_VARIANTS} />
      <ThemeToggle />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </Styled.Nav>
  )
}

export default Header
