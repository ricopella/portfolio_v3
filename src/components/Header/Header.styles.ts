import styled from '@emotion/styled'
import { COLORS, Z_INDEX } from '../../styles/variables'
import { motion } from 'framer-motion'

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
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

export default {
  Nav,
  NavBackground,
  SIDEBAR_VARIANTS,
}
