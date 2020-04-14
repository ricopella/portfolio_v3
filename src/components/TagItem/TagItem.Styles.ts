import styled from '@emotion/styled'
import { COLORS } from '../../styles/variables'

const ItemWrapper = styled.div`
  display: grid;
  border: 0.3125rem solid transparent;
  grid-template-columns: max-content;
  grid-template-rows: max-content;
  max-width: 100%;
`

const Item = styled.div`
  background-color: ${COLORS.palette.mediumSlateBlue};
  border-radius: 0.3125rem;
  color: ${COLORS.palette.eerieBlack};
  font-size: 0.825rem;
  padding: 0.3125rem 0.3125rem;
  width: max-content;
`

export default {
  Item,
  ItemWrapper,
}
