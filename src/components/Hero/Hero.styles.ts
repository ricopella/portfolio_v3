import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled'
import { COLORS } from '../../styles/variables'

const BackgroundGradient = styled.div`
  background: -webkit-linear-gradient(
    360deg,
    ${props => props.theme.backgroundColor} 0.5%,
    ${props => props.theme.actionColor} 360%
  );
  background: linear-gradient(
    360deg,
    ${props => props.theme.backgroundColor} 0.5%,
    ${props => props.theme.actionColor} 360%
  );
  grid-column: 1/-1;
  grid-row: 1/-1;
  height: 100vh;
  max-width: 100%;
  min-height: 100vh;
`

export default BackgroundGradient
