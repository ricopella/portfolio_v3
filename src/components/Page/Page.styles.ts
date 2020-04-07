import styled from '@emotion/styled'
import { DIMENSIONS } from '../../styles/variables'

const StyledPage = styled.div`
  display: flex;
  padding: ${DIMENSIONS.containerPadding}rem;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin: 0 10%;

  @media (max-width: 46.875rem) {
    height: 100% !important;
  }
`

export default StyledPage
