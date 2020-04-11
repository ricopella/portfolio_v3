import styled from '@emotion/styled'
import { BREAKPOINTS } from '../../styles/variables'

const SkillsWrapper = styled.div`
  display: grid;
  grid-row-gap: 1rem;
  grid-template-rows: repeat(2, max-content);
  text-align: center;
  width: 100%;

  @media (max-width: ${BREAKPOINTS.mdRem}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, max-content);
    margin: 0 0;
  }
`

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
  SkillsWrapper,
}
