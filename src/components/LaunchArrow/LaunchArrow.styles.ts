import styled from '@emotion/styled'
import { COLORS } from '../../styles/variables'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const LaunchArrowWrapper = styled(OutboundLink)`
  align-items: center;
  background-color: ${COLORS.terminalBackground};
  border-radius: 0.3125rem;
  display: grid;
  grid-template-columns: 1fr;
  height: 1.5rem;
  justify-content: center;
  position: relative;
  width: 1.5rem;
  border: none;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`

const LaunchArrowInner = styled.div`
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-style: solid;
  border-width: 0.375rem;
  box-sizing: border-box;
  color: ${COLORS.white};
  display: inline-block;
  height: 0;
  position: absolute;
  right: 0.3125rem;
  top: 0.3125rem;
  vertical-align: middle;
  width: 0;
  &:after,
  &:before {
    content: '';
    box-sizing: border-box;
  }
  &:before {
    right: 0;
    top: -0.1875rem;
    position: absolute;
    height: 0.25rem;
    box-shadow: inset 0 0 0 2rem;
    transform: rotate(-45deg);
    width: 0.75rem;
    transform-origin: right top;
  }
`

export default {
  LaunchArrowInner,
  LaunchArrowWrapper,
}
