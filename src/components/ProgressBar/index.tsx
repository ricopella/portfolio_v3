import React, { FC } from 'react'
import Styled from './Progress.styles'
import { ProgressBarProps } from '../../types'

const ProgressBar: FC<ProgressBarProps> = ({ title, percent }) => (
  <Styled.ProgressRowContainer>
    <Styled.ProgressTitle>{title}</Styled.ProgressTitle>
    <Styled.ProgressBarContainer>
      <Styled.ProgressBarFiller style={{ width: `${percent}%` }} />
    </Styled.ProgressBarContainer>
    <Styled.ProgressTitle>{percent}%</Styled.ProgressTitle>
  </Styled.ProgressRowContainer>
)

export default ProgressBar
