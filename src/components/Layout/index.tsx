import React, { FC } from 'react'
import Styled from './Layout.styles'
import useSiteMetaData from '../../hooks/useSiteMetaData'
import { AuthorMetaData } from '../../types'

export const PureLayout: FC<{ author: AuthorMetaData }> = ({
  author,
  children,
}) => (
  <Styled.RootContainer>
    <Styled.MainBodyContainer>{children}</Styled.MainBodyContainer>
    <Styled.FooterContainer>
      &copy; {new Date().getFullYear()}, <span>{author?.name || ''}</span>
    </Styled.FooterContainer>
  </Styled.RootContainer>
)

const Layout: FC<{}> = ({ children }) => {
  const { author } = useSiteMetaData()

  return <PureLayout author={author}>{children}</PureLayout>
}

export default Layout
