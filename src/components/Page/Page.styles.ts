import styled from '@emotion/styled'
import { BREAKPOINTS, DIMENSIONS } from '../../styles/variables'

const StyledPage = styled.div`
  display: flex;
  padding: ${DIMENSIONS.containerPadding}rem;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin: 0 10%;

  @media (max-width: ${BREAKPOINTS.mdRem}) {
    height: 100% !important;
  }

  @media (max-width: ${BREAKPOINTS.smRem}) {
    margin: 0 0;
  }
`

export default StyledPage
