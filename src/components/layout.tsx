import '../styles/normalize'
import styled from '@emotion/styled'
import React, { FC } from 'react'
import { colors } from '../styles/variables'
import useSiteMetaData from '../hooks/useSiteMetaData'

const RootContainer = styled('div')`
  display: grid;
  grid-template-rows: repeat(2, max-content);
  grid-template-columns: 1fr;
`

const MainBodyContainer = styled('div')`
  display: grid;
  grid-row: 2;
  margin: 0 auto;
  width: 100vw;
`

const FooterContainer = styled('footer')`
  display: grid;
  align-items: center;
  background-color: ${colors.header};
  grid-column-gap: 0.625rem;
  grid-row: 3 / -1;
  grid-template-columns: max-content max-content;
  justify-content: center;
`

const Layout: FC<{}> = ({ children }) => {
  const { author } = useSiteMetaData()

  return (
    <RootContainer>
      <MainBodyContainer>{children}</MainBodyContainer>
      <FooterContainer>
        &copy; {new Date().getFullYear()}, <span>{author?.name || ''}</span>
      </FooterContainer>
    </RootContainer>
  )
}

export default Layout
