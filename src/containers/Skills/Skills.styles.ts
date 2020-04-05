import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { COLORS } from '../../styles/variables'

const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: repeat(2, max-content);
  margin: 0 10%;
  text-align: center;
  width: 100%;
`

const PageHeading = css`
  background-color: ${COLORS.header};
`

const PageTitle = css`
  fontsize: 3rem;
  text-align: left;
  text-decoration: underline;
  grid-column: 1 / -1;
`

const SelectedSkillsWrapper = styled.div`
  max-width: 600px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-row-gap: 10px;
`

export default {
  SelectedSkillsWrapper,
  SkillsWrapper,
  PageHeading,
  PageTitle,
}
