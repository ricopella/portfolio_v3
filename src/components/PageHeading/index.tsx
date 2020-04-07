import React, { FC } from 'react'
import Styled from './PageHeading.styles'
import { PageHeadingProps } from '../../types'

const PageHeading: FC<PageHeadingProps> = ({ title }) => (
  <Styled.PageHeading>{title}</Styled.PageHeading>
)

export default PageHeading
