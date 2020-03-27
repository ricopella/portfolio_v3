import React, { FC } from 'react'
import styled from '@emotion/styled'
import { ContainerProps } from '../types'
import { widths } from '../styles/variables'
import { getEmSize } from '../styles/mixins'

const StyledContainer = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  max-width: ${getEmSize(widths.lg)}em;
`

const Container: FC<ContainerProps> = ({ children, className, style }) => (
  <StyledContainer className={className} style={style}>
    {children}
  </StyledContainer>
)

export default Container
