import styled from '@emotion/styled'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { COLORS, DIMENSIONS, FONT_WIDTHS } from '../../styles/variables'
import { motion } from 'framer-motion'

const MenuItemLi = styled(motion.li)`
  align-items: center;
  cursor: pointer;
  display: flex;
  list-style: none;
  margin-bottom: 1.25rem;
  margin: 0;
  padding: 0;

  &:hover {
    cursor: none;
  }

  &.active {
    pointer-events: all;

    &:hover {
      cursor: pointer;
    }
  }
`

const HomepageLink = styled(AnchorLink)`
  color: ${props => props.theme.actionColor};
  cursor: pointer;
  font-size: ${DIMENSIONS.fontSize.regular};
  font-weight: ${FONT_WIDTHS.SEMI_BOLD};
  align-self: center;
  justify-self: center;
  text-transform: capitalize;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`

const MENU_ITEM_VARIANTS = {
  open: {
    y: 0,
    opacity: 1,
    display: 'initial',
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    display: 'none',
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export default {
  MenuItemLi,
  HomepageLink,
  MENU_ITEM_VARIANTS,
}
