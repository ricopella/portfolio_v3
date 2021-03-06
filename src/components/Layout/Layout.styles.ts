import styled from '@emotion/styled'
import { BREAKPOINTS } from '../../styles/variables'

const RootContainer = styled('div')`
  display: grid;
  grid-template-rows: repeat(2, max-content);
  grid-template-columns: 1fr;
  background-color: ${props => props.theme.backgroundColor};
`

const MainBodyContainer = styled('div')`
  display: grid;
  grid-row: 2;
  margin: 0 auto;
  width: 100vw;
`

const FooterContainer = styled('footer')`
  display: grid;
  align-items: center;
  color: ${props => props.theme.color};
  grid-column-gap: 0.25rem;
  grid-row: 3 / -1;
  grid-template-columns: max-content max-content;
  justify-content: center;
  margin: 2% 0 1% 0;

  @media (max-width: ${BREAKPOINTS.mdRem}) {
    margin-bottom: 10%;
    margin-top: 10%;
  }
`

export default {
  RootContainer,
  MainBodyContainer,
  FooterContainer,
}
