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
  margin: 5% 10% 0 10%;
  background-color: ${COLORS.header};
  width: 100%:

  @media (max-width: ${BREAKPOINTS.smRem}) {
    margin: 0 0;
  }
`

export default StyledPage
