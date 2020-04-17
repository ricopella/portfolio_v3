import styled from '@emotion/styled'
import { COLORS, Z_INDEX } from '../../styles/variables'
import { motion } from 'framer-motion'

const Nav = styled(motion.nav)`
  bottom: 0;
  left: 0;
  position: fixed;
  top: 0;
  z-index: ${Z_INDEX.HEADER};
`

const NavBackground = styled(motion.div)`
  background: ${props => props.theme.navBackground};
  bottom: 0;
  display: grid;
  left: 0;
  position: absolute;
  top: 0;
  width: 18.75rem;
`

const SIDEBAR_VARIANTS = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 2.5rem 2.5rem)`,
    opacity: 0.99,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(1.875rem at 2.5rem 2.5rem)',
    opacity: 0.7,
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

const ThemeToggleWrapper = styled(motion.div)`
  background-color: ${props => props.theme.themeToggleBackgroundColor};
  border-radius: 3.4375rem;
  grid-template-columns: max-content;
  height: 2.1875rem;
  left: 12.5rem;
  position: relative;
  top: 1.5rem;
  width: 5rem;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`

const ThemeToggleInner = styled(motion.div)`
  display: grid;
  background-color: ${props => props.theme.themeToggleButtonColor};
  border-radius: 50%;
  height: calc(100% - 35%);
  position: absolute;
  width: 1.375rem;
`

const TOGGLE_WRAPPER_VARIANTS = {
  open: {
    opacity: 1,
    display: 'grid',
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    opacity: 0,
    display: 'none',
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export default {
  Nav,
  NavBackground,
  SIDEBAR_VARIANTS,
  ThemeToggleWrapper,
  ThemeToggleInner,
  TOGGLE_WRAPPER_VARIANTS,
}
