import React from 'react'
import Styled from './Arrow.styles'

const Arrow = () => (
  <div>
    <Styled.ArrowFirst />
    <Styled.ArrowSecond />
    <Styled.ArrowMask to="/#about-me">Scroll Down</Styled.ArrowMask>
  </div>
)

export default Arrow
