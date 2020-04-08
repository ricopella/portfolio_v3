import styled from '@emotion/styled'
import { COLORS } from '../../styles/variables'
import { css } from '@emotion/core'

const ExperiencePage = css`
  background-color: ${COLORS.header};
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
`

const ExperienceContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, max-content);
  grid-row-gap: 3.75rem;
`

export default {
  ExperiencePage,
  ExperienceContentWrapper,
}
