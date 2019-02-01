import React from 'react'
import Gallery from '../components/Gallery'
import styled from '@emotion/styled'

const StyledFullPage = styled.div`
  width: 100%;
  padding: 5%;
`

const GalleryContainer = ({ data }) => (
  <StyledFullPage id="portfolio">
    <h1
      style={{
        fontSize: '3rem',
        textAlign: 'center',
        textDecoration: 'underline',
      }}
    >
      {`portfolio`.toUpperCase()}
    </h1>
    <Gallery data={data} />
  </StyledFullPage>
)

export default GalleryContainer
