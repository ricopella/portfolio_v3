import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const ThemeToggleWrapper = styled(motion.button)`
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

export default { ThemeToggleWrapper, ThemeToggleInner }
