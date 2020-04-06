import styled from '@emotion/styled'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { keyframes } from '@emotion/core'

// Originally from: https://codepen.io/TommiTikall/pen/xZwpGR
const Arrow = styled.div`
  opacity: 0;
  position: absolute;
  left: 50%;
  top: 75%;
  transform-origin: 50% 50%;
  transform: translate3d(-50%, -50%, 0);

  &:before,
  &:after {
    background: #fff;
    content: '';
    display: block;
    height: 0.1875rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 1.875rem;
  }

  &:before {
    transform: rotate(45deg) translateX(-23%);
    transform-origin: top left;
  }

  &:after {
    transform: rotate(-45deg) translateX(23%);
    transform-origin: top right;
  }
`

const AnimateArrow = keyframes`
0% {
  opacity: 0;
  top: 70%;
}
70% {
  opacity: 1;
}
100% {
  opacity: 0;
}
`

const ArrowFirst = styled(Arrow)`
  animation: ${AnimateArrow} 2s ease-in-out infinite;
`

const ArrowSecond = styled(Arrow)`
  animation: ${AnimateArrow} 2s 1s ease-in-out infinite;
`

const ArrowMask = styled(AnchorLink)`
  position: absolute;
  left: 48%;
  top: 69%;
  width: 5rem;
  height: 5rem;
  color: transparent;
  background-color: transparent;
  border: none;
  z-index: 5;
`

export default {
  Arrow,
  ArrowFirst,
  ArrowMask,
  ArrowSecond,
}
