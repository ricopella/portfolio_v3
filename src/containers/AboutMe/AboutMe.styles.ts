import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { BORDERS, SHADOWS, COLORS, FONTS } from '../../styles/variables'

const TerminalContainer = styled.div`
  display: grid;
  grid-template-rows: 1.875rem max-content;
  grid-template-columns: 1fr;
  max-width: 56.25rem;
  align-self: center;
  justify-self: center;
  box-shadow: ${SHADOWS.box};
`
const TerminalHeaderTitle = styled.div`
  color: ${COLORS.gray.dark};
  align-self: center;
  justify-self: center;
`

const TerminalHeader = styled.div`
  background-color: ${COLORS.terminalHeader};
  border-radius: ${BORDERS.large};
  max-height: 1.875rem;
  width: 100%;
  display: grid;
  grid-template-columns: max-content 1fr;
`

const TerminalBody = styled.div`
  background-color: ${COLORS.terminalBackground};
  border-radius: ${BORDERS.medium};
  box-shadow: ${SHADOWS.box};
  font-family: ${FONTS.monospace};
  width: 100%;
  height: 100%;
  padding: 2rem 2rem;
`

const TerminalHeaderActionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-template-rows: 1fr;
  grid-column-gap: 0.3125rem;
  height: 1.875rem;
  align-items: center;
  padding-left: 0.625rem;
`

const TerminalHeaderActionBalls = styled.div`
  height: 0.9375rem;
  width: 0.9375rem;
  border-radius: 50%;
`

const PageStyles = css`
  height: 100vh;
  width: 100vw;
  background-color: ${COLORS.header};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  grid-row-gap: 3.75rem;
  align-content: center;
  justify-content: center;
`

const PageHeading = css`
  fontsize: 3rem;
  text-align: center;
  text-decoration: underline;
  color: ${COLORS.gray.dark};
`

export default {
  TerminalContainer,
  TerminalHeaderTitle,
  TerminalHeader,
  TerminalBody,
  TerminalHeaderActionContainer,
  TerminalHeaderActionBalls,
  PageStyles,
  PageHeading,
}
