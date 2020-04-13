import styled from '@emotion/styled'
import { BREAKPOINTS } from '../../styles/variables'

const SelectedSkillsWrapper = styled.div`
  display: grid;
  grid-row-gap: 1rem;
  grid-template-columns: 1fr;
  height: 10.1875rem;
  max-width: 37.5rem;

  @media (max-width: ${BREAKPOINTS.mdRem}) {
    height: unset;
  }
`

export default {
  SelectedSkillsWrapper,
}
