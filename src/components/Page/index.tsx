import PageHeading from '../PageHeading'
import React, { FC } from 'react'
import ScrollReveal from '../ScrollReveal'
import StyledPage from './Page.styles'
import { PageProps } from '../../types'

const Page: FC<PageProps> = ({ children, className, id, style, title }) => (
  <ScrollReveal>
    <StyledPage id={id} className={className} style={style}>
      <PageHeading title={title} />
      {children}
    </StyledPage>
  </ScrollReveal>
)

export default Page
