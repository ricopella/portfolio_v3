import styled from '@emotion/styled'
import { COLORS } from '../../styles/variables'

const TerminalWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  margin: 2rem 0;
`

const TerminalInput = styled.div`
  color: ${COLORS.gray.calm};
`

const TerminalOutput = styled.div`
  color: ${COLORS.accent};
`

const TerminalArrow = styled.span`
  color: ${COLORS.limeGreen};
`
const TerminalLink = styled.a`
  cursor: pointer;
  color: ${COLORS.teal};
`

const FinalStatement = styled.div`
  content: '';
  display: inline-block;
  background-color: ${COLORS.code};
  vertical-align: top;
  width: 0.625rem;
  height: 1.5rem;
  -webkit-animation: blink 1s step-end infinite;
  animation: blink 1s step-end infinite;

  @-webkit-keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export default {
  FinalStatement,
  TerminalLink,
  TerminalArrow,
  TerminalOutput,
  TerminalInput,
  TerminalWrapper,
}
