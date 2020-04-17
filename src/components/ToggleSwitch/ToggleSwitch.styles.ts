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
  background-color: ${props => props.theme.backgroundContentColor};
  border-radius: 3.4375rem;
  border: 0.25rem solid ${props => props.theme.actionColor};
  color: ${props => props.theme.actionColor};
  font-size: 1.25rem;
  font-weight: bold;
  height: 2.5rem;
  text-transform: capitalize;
  width: 9.375rem;
  letter-spacing: 0.1rem;

  &.active {
    background-color: ${props => props.theme.actionColor};
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
    transform: scale(1.1);
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
