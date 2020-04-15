import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled'
import { COLORS } from '../../styles/variables'

const BackgroundGradient = styled.div`
  background: -webkit-linear-gradient(
    360deg,
    ${COLORS.white} 0.5%,
    ${COLORS.terminalBackground} 360%
  );
  background: linear-gradient(
    360deg,
    ${COLORS.white} 0.5%,
    ${COLORS.terminalBackground} 360%
  );
  grid-column: 1/-1;
  grid-row: 1/-1;
  height: 100vh;
  max-width: 100%;
  min-height: 100vh;
`

export default BackgroundGradient
