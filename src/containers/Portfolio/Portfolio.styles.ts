import styled from '@emotion/styled'
import { BREAKPOINTS } from '../../styles/variables'

const ExperienceContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, max-content);
  grid-row-gap: 3.75rem;
  margin: 0 0;
  width: 100%;
  padding: 0 0;

  @media (max-width: ${BREAKPOINTS.mdRem}) {
    margin: 0 0;
  }

  @media (max-width: ${BREAKPOINTS.smRem}) {
    padding: 0 0;
  }
`

export default {
  ExperienceContentWrapper,
}
