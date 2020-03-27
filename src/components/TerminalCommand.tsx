import React, { FC } from 'react'
import styled from '@emotion/styled'
import { colors } from '../styles/variables'
import { TerminalCommandProps } from '../types'

const TerminalWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  margin: 2rem 0;
`

const TerminalInput = styled.div`
  color: ${colors.gray.calm};
`

const TerminalOutput = styled.div`
  color: ${colors.accent};
`

const TerminalArrow = styled.span`
  color: ${colors.limeGreen};
`
const TerminalLink = styled.a`
  cursor: pointer;
  color: ${colors.teal};
`

const FinalStatement = styled.div`
  content: '';
  display: inline-block;
  background-color: ${colors.code};
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

const TerminalCommand: FC<TerminalCommandProps> = ({
  question,
  answer,
  href,
}) => (
  <TerminalWrapper>
    {question && answer ? (
      <>
        <TerminalInput>
          <TerminalArrow>>></TerminalArrow> {question}
        </TerminalInput>
        <TerminalOutput>
          {!href ? (
            answer
          ) : (
            <TerminalLink href={href} target="_blank" rel="noopener noreferrer">
              "{answer}"
            </TerminalLink>
          )}
        </TerminalOutput>
      </>
    ) : (
      <>
        <TerminalInput>
          <TerminalArrow>>></TerminalArrow> <FinalStatement />
        </TerminalInput>
      </>
    )}
  </TerminalWrapper>
)

export default TerminalCommand
