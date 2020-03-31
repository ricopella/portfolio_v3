import React, { FC } from 'react'
import { PageProps } from '../../types'
import StyledPage from './Page.styles'

const Page: FC<PageProps> = ({ children, className, id, style }) => (
  <StyledPage id={id} className={className} style={style}>
    {children}
  </StyledPage>
)

export default Page
