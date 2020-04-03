import React, { FC } from 'react'
import { PageProps } from '../../types'
import StyledPage from './Page.styles'
import ScrollReveal from '../ScrollReveal'

const Page: FC<PageProps> = ({ children, className, id, style }) => (
  <ScrollReveal>
    <StyledPage id={id} className={className} style={style}>
      {children}
    </StyledPage>
  </ScrollReveal>
)

export default Page
