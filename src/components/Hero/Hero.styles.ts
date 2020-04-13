import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled'

const ImageBackground = styled(BackgroundImage)`
  background-size: cover;
  height: 100vh;
  position: 'unset';
  opacity: 0.95;
  max-width: 100%;
  padding: 0;
  grid-row: 1/-1;
  grid-column: 1/-1;
  min-height: 100vh;

  + * {
    margin-top: 0;
  }
`

export default ImageBackground
