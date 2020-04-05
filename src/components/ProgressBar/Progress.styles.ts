import styled from '@emotion/styled'
import { COLORS } from '../../styles/variables'

const ProgressRowContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content auto;
  grid-template-rows: max-content;
  align-items: center;
  grid-column-gap: 1.25rem;
`

const ProgressTitle = styled.div`
  color: ${COLORS.gray.calm};
  text-align: right;
`

const ProgressBarContainer = styled.div`
  position: relative;
  height: 1.25rem;
  width: 21.875rem;
  border-radius: 3.125rem;
  border: 0.1875rem solid ${COLORS.gray.calm};
`

const ProgressBarFiller = styled.div`
  background-color: ${COLORS.terminalBackground};
  height: 100%;
  border-radius: inherit;
  transition: width 0.2s ease-in;
`

export default {
  ProgressRowContainer,
  ProgressBarContainer,
  ProgressBarFiller,
  ProgressTitle,
}
