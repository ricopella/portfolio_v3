import React from 'react'
import Gallery from '../../components/Gallery/index'
import { COLORS } from '../../styles/variables'
import Styled from './Gallery.styles'
import ScrollReveal from '../../components/ScrollReveal'

const GalleryContainer = () => (
  <ScrollReveal>
    <Styled.StyledFullPage
      id="portfolio"
      style={{ backgroundColor: COLORS.header }}
    >
      <h1 css={Styled.PageHeading}>{`portfolio`.toUpperCase()}</h1>
      <Gallery />
    </Styled.StyledFullPage>
  </ScrollReveal>
)

export default GalleryContainer
