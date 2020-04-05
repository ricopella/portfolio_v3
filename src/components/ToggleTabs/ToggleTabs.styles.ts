import styled from '@emotion/styled'
import { COLORS } from '../../styles/variables'
import { motion } from 'framer-motion'

const ToggleTabsContainer = styled.div`
  height: 100%;
  width: 100%;
  border-left: 3px solid ${COLORS.terminalBackground};
`

const ToggleTabItem = styled(motion.button)`
  height: 6rem;
  width: 10rem;
  color: ${COLORS.terminalBackground};
  font-size: 1rem;
  align-items: center;
  justify-content: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-content: center;
  padding: 0 0.2rem;
  background-color: transparent;
  border: none;
  letter-spacing: 0.1rem;

  &.active {
    border-bottom: 3px solid ${COLORS.terminalBackground};
    background-color: ${COLORS.terminalBackground};
    color: white;
    font-weight: bold;
    transition: all 0.2s ease-in;

    &:hover {
      cursor: not-allowed;
    }
  }

  &:hover {
    cursor: pointer;
  }
`

export default {
  ToggleTabsContainer,
  ToggleTabItem,
}
