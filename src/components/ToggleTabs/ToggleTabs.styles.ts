import styled from '@emotion/styled'
import { BREAKPOINTS, COLORS } from '../../styles/variables'
import { motion } from 'framer-motion'

const ToggleSection = styled(motion.div)`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: repeat(2, max-content);
  grid-column-gap: 8%;

  @media (max-width: ${BREAKPOINTS.mdRem}) {
    display: none;
  }
`

const MobileAccordionContainer = styled.div`
  display: none;

  @media (max-width: ${BREAKPOINTS.mdRem}) {
    display: grid;
    grid-template-columns: 1fr;
  }
`

const MobileAccordion = styled(motion.section)`
  height: inherit;
`

const MobileAccordionContent = styled(motion.div)`
  padding: 3rem 1rem;

  @media (max-width: ${BREAKPOINTS.mdRem}) {
    border-left: 0.1875rem solid ${props => props.theme.actionColor};
  }
`

const MobileAccordionButton = styled.div`
  display: grid;
  align-content: center;
  background-color: transparent;
  color: ${props => props.theme.actionColor};
  border: none;
  font-size: 1rem;
  grid-template-columns: 1fr max-content;
  height: 6rem;
  justify-items: center;
  letter-spacing: 0.1rem;
  padding: 0 10%;
  width: 100%;

  @media (max-width: ${BREAKPOINTS.mdRem}) {
    border-left: 0.1875rem solid ${props => props.theme.actionColor};
  }

  &:hover {
    cursor: pointer;
  }

  &.active {
    background-color: ${props => props.theme.actionColor};
    color: ${COLORS.white};
  }
`

const MobileAccordionArrow = styled.div`
  border-right: 0.2em solid ${props => props.theme.actionColor};
  border-top: 0.2em solid ${props => props.theme.actionColor};
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
  border-left: 0.1875rem solid ${props => props.theme.actionBackgroundColor};
  height: 100%;
  width: 100%;
`

const ToggleTabItem = styled(motion.button)`
  display: grid;
  align-items: center;
  background-color: ${props => props.theme.backgroundContentColor};
  border: none;
  color: ${props => props.theme.actionColor};
  font-size: 1rem;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: 6rem;
  justify-content: center;
  letter-spacing: 0.1rem;
  padding: 0 0.2rem;
  width: 10rem;

  @media (max-width: ${BREAKPOINTS.mdRem}) {
    border-left: 0.1875rem solid ${props => props.theme.actionBackgroundColor};
  }

  &.active {
    background-color: ${props => props.theme.actionBackgroundColor};
    color: ${COLORS.white};
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
