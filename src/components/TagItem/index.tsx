import React, { FC } from 'react'
import Styled from './TagItem.Styles'
import { TagItemProps } from '../../types'

const TagItem: FC<TagItemProps> = ({ title }) => (
  <Styled.ItemWrapper>
    <Styled.Item>{title}</Styled.Item>
  </Styled.ItemWrapper>
)

export default TagItem
