import React, { FC } from 'react'
import Styled from './PageHeading.styles'
import { PageHeadingProps } from '../../types'

const PageHeading: FC<PageHeadingProps> = ({ css, title }) => (
  <Styled.PageHeading css={css}>{title}</Styled.PageHeading>
)

export default PageHeading
