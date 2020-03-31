import Styled from './Layout.styles'
import React, { FC } from 'react'
import useSiteMetaData from '../../hooks/useSiteMetaData'

const Layout: FC<{}> = ({ children }) => {
  const { author } = useSiteMetaData()

  return (
    <Styled.RootContainer>
      <Styled.MainBodyContainer>{children}</Styled.MainBodyContainer>
      <Styled.FooterContainer>
        &copy; {new Date().getFullYear()}, <span>{author?.name || ''}</span>
      </Styled.FooterContainer>
    </Styled.RootContainer>
  )
}

export default Layout
