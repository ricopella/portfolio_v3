import Gallery from '../../components/Gallery/index'
import Page from '../../components/Page'
import PageHeading from '../../components/PageHeading'
import React from 'react'
import ScrollReveal from '../../components/ScrollReveal'
import Styled from './Experience.styles'

const HEADING = `Experience / Projects`

const Experience = () => (
  <ScrollReveal>
    <Page id="experience" css={Styled.ExperiencePage}>
      <PageHeading title={HEADING} />
      <Gallery />
    </Page>
  </ScrollReveal>
)

export default Experience
