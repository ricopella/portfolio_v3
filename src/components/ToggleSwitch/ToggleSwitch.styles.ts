import styled from '@emotion/styled'
import { BREAKPOINTS, COLORS } from '../../styles/variables'

const ToggleSwitchContainer = styled('div')`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, max-content);
  justify-content: center;
  width: 100%;
`

const ToggleButton = styled('button')`
  background-color: transparent;
  border-radius: 3.4375rem;
  border: 0.25rem solid ${COLORS.terminalBackground};
  color: ${COLORS.terminalBackground};
  font-size: 1.25rem;
  font-weight: bold;
  height: 2.5rem;
  text-transform: capitalize;
  width: 9.375rem;
  letter-spacing: 0.1rem;

  &.active {
    background-color: ${COLORS.terminalBackground};
    color: ${COLORS.white};

    &:hover {
      cursor: not-allowed;
    }
  }

  &.left {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &.right {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${BREAKPOINTS.smRem}) {
    font-size: 1rem;
    height: 2.5rem;
    width: 7.8125rem;
  }
`

export default {
  ToggleSwitchContainer,
  ToggleButton,
}
