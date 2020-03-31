import React, { FC } from 'react'
import StyledContainer from './Container.styles'
import { ContainerProps } from '../../types'

const Container: FC<ContainerProps> = ({ children, className, style }) => (
  <StyledContainer className={className} style={style}>
    {children}
  </StyledContainer>
)

export default Container
