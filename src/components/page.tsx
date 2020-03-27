import React, { FC } from 'react'
import styled from '@emotion/styled'
import { PageProps } from '../types'
import { dimensions } from '../styles/variables'

const StyledPage = styled.div`
  display: flex;
  padding: ${dimensions.containerPadding}rem;
  height: 100vh;
  align-items: center;
  justify-content: center;

  @media (max-width: 46.875rem) {
    height: 100% !important;
  }
`

const Page: FC<PageProps> = ({ children, className, id, style }) => (
  <StyledPage id={id} className={className} style={style}>
    {children}
  </StyledPage>
)

export default Page
