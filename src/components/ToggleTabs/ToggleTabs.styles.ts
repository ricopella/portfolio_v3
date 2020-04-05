import styled from '@emotion/styled'
import { COLORS } from '../../styles/variables'
import { motion } from 'framer-motion'

const ToggleSection = styled(motion.div)`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: repeat(2, max-content);
  grid-column-gap: 1rem;
`

const MobileAccordionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`

const MobileAccordion = styled(motion.section)`
  border-left: 0.0625rem solid ${COLORS.terminalBackground};
  height: inherit;
`

const MobileAccordionContent = styled(motion.div)`
  padding: 3rem 1rem;
`

const MobileAccordionButton = styled.div`
  display: grid;
  align-content: center;
  background-color: transparent;
  border-left: 0.0625rem solid ${COLORS.terminalBackground};
  border: none;
  font-size: 1rem;
  grid-template-columns: 1fr max-content;
  height: 6rem;
  justify-items: center;
  letter-spacing: 0.1rem;
  padding: 0 10%;
  width: 100%;

  &.active {
    background-color: ${COLORS.terminalBackground};
    color: white;
  }
`

const MobileAccordionArrow = styled.div`
  border-right: 0.2em solid ${COLORS.terminalBackground};
  border-top: 0.2em solid ${COLORS.terminalBackground};
  height: 1rem;
  position: relative;
  transform: rotate(135deg);
  transition: transform 0.2s linear;
  width: 1rem;

  &.active {
    border-right: 0.2em solid ${COLORS.white};
    border-top: 0.2em solid ${COLORS.white};
    transform: rotate(315deg);
  }
`

const ToggleTabsContainer = styled.div`
  border-left: 0.1875rem solid ${COLORS.terminalBackground};
  height: 100%;
  width: 100%;
`

const ToggleTabItem = styled(motion.button)`
  display: grid;
  align-items: center;
  background-color: transparent;
  border: none;
  color: ${COLORS.terminalBackground};
  font-size: 1rem;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: 6rem;
  justify-content: center;
  letter-spacing: 0.1rem;
  padding: 0 0.2rem;
  width: 10rem;

  &.active {
    background-color: ${COLORS.terminalBackground};
    border-bottom: 0.1875rem solid ${COLORS.terminalBackground};
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
  ToggleSection,
  MobileAccordion,
  MobileAccordionContainer,
  MobileAccordionButton,
  MobileAccordionArrow,
  MobileAccordionContent,
}
