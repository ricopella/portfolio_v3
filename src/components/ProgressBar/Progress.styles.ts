import styled from '@emotion/styled'
import { BREAKPOINTS, COLORS } from '../../styles/variables'
import { motion } from 'framer-motion'

const ProgressRowContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content auto;
  grid-template-rows: max-content;
  align-items: center;
  grid-column-gap: 1.25rem;

  @media (max-width: ${BREAKPOINTS.mdRem}) {
    grid-template-columns: 1fr max-content;
    grid-template-rows: repeat(2, max-content);
  }
`

const ProgressTitle = styled.div`
  color: ${props => props.theme.colorCalm};
  text-align: right;
  grid-row: 1;
  grid-column: 1;

  @media (max-width: ${BREAKPOINTS.mdRem}) {
    text-align: left;
    grid-row: 2;
    grid-column: 1;
  }
`

const ProgressPercent = styled.div`
  color: ${props => props.theme.colorCalm};
  text-align: left;
  grid-row: 1;
  grid-column: 3;

  @media (max-width: ${BREAKPOINTS.mdRem}) {
    grid-row: 2;
    grid-column: 2;
  }
`

const ProgressBarContainer = styled.div`
  position: relative;
  height: 1.25rem;
  width: 21.875rem;
  border-radius: 3.125rem;
  border: 0.1875rem solid ${COLORS.palette.pastelGray};
  grid-row: 1;
  grid-column: 2;
  background-color: ${props => props.theme.backgroundContentColor};
  @media (max-width: ${BREAKPOINTS.mdRem}) {
    width: 100%;
    grid-row: 1;
    grid-column: 1 / -1;
  }
`

const ProgressBarFiller = styled(motion.div)`
  background-color: ${COLORS.palette.mediumSlateBlue};
  height: 100%;
  border-radius: inherit;
  transition: width 0.2s ease-in;
`

export default {
  ProgressRowContainer,
  ProgressBarContainer,
  ProgressBarFiller,
  ProgressTitle,
  ProgressPercent,
}
