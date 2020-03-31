import { DIMENSIONS } from '../../styles/variables'
import styled from '@emotion/styled'

const StyledPage = styled.div`
  display: flex;
  padding: ${DIMENSIONS.containerPadding}rem;
  height: 100vh;
  align-items: center;
  justify-content: center;

  @media (max-width: 46.875rem) {
    height: 100% !important;
  }
`

export default StyledPage
