import styled from '@emotion/styled'
import { COLORS } from '../styles/variables'

const Styled404 = styled.div`
  display: grid;
  align-content: center;
  background-color: ${COLORS.header};
  grid-row: 2;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  height: calc(100vh - 2rem);
  justify-items: center;
  width: 100vw;
`

export default {
  Styled404,
}
