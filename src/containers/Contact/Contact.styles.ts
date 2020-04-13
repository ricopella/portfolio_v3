import styled from '@emotion/styled'
import { BREAKPOINTS, COLORS } from '../../styles/variables'

const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
`

const ContactRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1.25rem;
  margin-top: 1.25rem;

  @media (max-width: ${BREAKPOINTS.smRem}) {
    grid-template-columns: 1fr;
    grid-row-gap: 0.875rem;
  }
`

const ContactDescription = styled.p`
  max-width: calc(100vw - 23%);
  color: ${COLORS.gray.light};
`

const ContactLink = styled.a`
  color: ${COLORS.terminalBackground};
  font-weight: bold;

  :hover {
    color: ${COLORS.gray.calm};
    transform: scale(1.1);
  }
`

export default {
  ContactRow,
  ContactWrapper,
  ContactDescription,
  ContactLink,
}
