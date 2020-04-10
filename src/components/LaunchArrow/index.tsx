import React, { FC } from 'react'
import Styled from './LaunchArrow.styles'
import { LaunchArrowProps } from '../../types'

const LaunchArrow: FC<LaunchArrowProps> = ({ href }) => (
  <Styled.LaunchArrowWrapper
    href={href}
    rel="noopener noreferrer"
    target="_blank"
    title={href}
  >
    <Styled.LaunchArrowInner />
  </Styled.LaunchArrowWrapper>
)

export default LaunchArrow
