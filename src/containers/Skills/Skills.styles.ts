import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { BREAKPOINTS, COLORS } from '../../styles/variables'

const SkillsWrapper = styled.div`
  display: grid;
  grid-row-gap: 1rem;
  grid-template-columns: max-content 1fr;
  grid-template-rows: repeat(2, max-content);
  margin: 0 10%;
  text-align: center;
  width: 100%;

  @media (max-width: ${BREAKPOINTS.mdRem}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, max-content);
    margin: 0 0;
  }
`

const PageHeading = css`
  background-color: ${COLORS.header};
`

const PageTitle = css`
  color: ${COLORS.gray.calm};
  fontsize: 3rem;
  grid-column: 1 / -1;
  text-align: left;
  text-decoration: underline;
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
  PageHeading,
  PageTitle,
}
