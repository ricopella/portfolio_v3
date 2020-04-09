import styled from '@emotion/styled'
import { COLORS } from '../../styles/variables'

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: max-content;
  grid-template-rows: max-content;
  max-width: 100%;
  border-left: 0.3125rem solid transparent;
  border-right: 0.3125rem solid transparent;
`

const Item = styled.div`
  padding: 0.3125rem 0.3125rem;
  background-color: ${COLORS.palette.mediumSlateBlue};
  color: white;
  font-size: 0.825rem;
  width: max-content;
  border-radius: 0.3125rem;
`

export default {
  Item,
  ItemWrapper,
}
