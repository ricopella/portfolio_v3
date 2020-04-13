import styled from '@emotion/styled'
import { BREAKPOINTS, COLORS } from '../../styles/variables'

const StyledPage = styled.div`
  display: grid;
  align-items: center;
  grid-row-gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  height: 100%;
  justify-content: center;
  margin: 8% 10% 0 10%;
  background-color: ${COLORS.header};
  max-width: 100vw;
  overflow: hidden;

  @media (max-width: ${BREAKPOINTS.mdRem}) {
    margin: 10% 10% 0 10%;
  }
`

export default StyledPage
