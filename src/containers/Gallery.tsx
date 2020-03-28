import React from 'react'
import Gallery from '../components/Gallery'
import styled from '@emotion/styled'
import { colors } from '../styles/variables'

const StyledFullPage = styled.div`
  width: 100%;
  padding: 5%;

  @media (max-width: 750px) {
    padding: 10%;
  }
`

const GalleryContainer = () => (
  <StyledFullPage id="portfolio" style={{ backgroundColor: colors.header }}>
    <h1
      style={{
        fontSize: '3rem',
        textAlign: 'center',
        textDecoration: 'underline',
      }}
    >
      {`portfolio`.toUpperCase()}
    </h1>
    <Gallery />
  </StyledFullPage>
)

export default GalleryContainer
