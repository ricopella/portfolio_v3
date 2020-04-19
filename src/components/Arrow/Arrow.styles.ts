import styled from '@emotion/styled'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { BREAKPOINTS, COLORS } from '../../styles/variables'
import { keyframes } from '@emotion/core'

// Originally from: https://codepen.io/TommiTikall/pen/xZwpGR
const Arrow = styled.div`
  left: calc(50% - 1.5rem);
  opacity: 0;
  position: absolute;
  top: 85%;
  transform-origin: 50% 50%;
  transform: translate3d(-50%, -50%, 0);

  &:before,
  &:after {
    background: ${props => props.theme.actionColor};
    content: '';
    display: block;
    height: 0.1875rem;
    left: 0;
    position: absolute;
    top: 0;
    width: 1.875rem;
  }

  @media (max-width: ${BREAKPOINTS.smRem}) {
    top: 75%;
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
  top: 80%;
}
70% {
  opacity: 1;
}
100% {
  opacity: 0;
}
`

const AnimateMobileArrow = keyframes`
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

  @media (max-width: ${BREAKPOINTS.smRem}) {
    animation: ${AnimateMobileArrow} 2s 1s ease-in-out infinite;
  }
`

const ArrowSecond = styled(Arrow)`
  animation: ${AnimateArrow} 2s 1s ease-in-out infinite;

  @media (max-width: ${BREAKPOINTS.smRem}) {
    animation: ${AnimateMobileArrow} 2s 1s ease-in-out infinite;
  }
`

const ArrowMask = styled(AnchorLink)`
  background-color: transparent;
  border: none;
  color: transparent;
  height: 5rem;
  left: 48%;
  position: absolute;
  top: 78%;
  width: 5rem;
  z-index: 5;
  opacity: 0;

  @media (max-width: ${BREAKPOINTS.smRem}) {
    left: 37%;
    position: absolute;
    top: 68%;
  }
`

export default {
  Arrow,
  ArrowFirst,
  ArrowMask,
  ArrowSecond,
}
