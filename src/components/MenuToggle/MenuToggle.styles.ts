import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { Z_INDEX } from '../../styles/variables'

const MenuToggleButton = styled(motion.button)`
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  background: transparent;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  height: 3.125rem;
  left: 0.9375rem;
  outline: none;
  position: absolute;
  top: 1.125rem;
  width: 3.125rem;
  z-index: ${Z_INDEX.HEADER};
`

const Path = styled(motion.path)`
  stroke-line-cap: round;
  stroke-width: 0.1875rem;
  stroke: ${props => props.theme.actionColor};
`

export default {
  MenuToggleButton,
  Path,
}
