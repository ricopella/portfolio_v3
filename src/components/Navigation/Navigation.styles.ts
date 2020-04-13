import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const MenuItemUl = styled(motion.ul)`
  margin: 0 0;
  padding: 0 0;
  padding: 1.5625rem;
  position: absolute;
  top: 6.25rem;
  width: 14.375rem;
  display: grid;
  grid-row-gap: 1rem;
`

const NAV_VARIANTS = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export default {
  MenuItemUl,
  NAV_VARIANTS,
}
