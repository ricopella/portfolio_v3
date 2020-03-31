import React, { FC } from 'react'
import { TerminalCommandProps } from '../../types'
import Styled from './TerminalCommand.styles'

const TerminalCommand: FC<TerminalCommandProps> = ({
  question,
  answer,
  href,
}) => (
  <Styled.TerminalWrapper>
    {question && answer ? (
      <>
        <Styled.TerminalInput>
          <Styled.TerminalArrow>>></Styled.TerminalArrow> {question}
        </Styled.TerminalInput>
        <Styled.TerminalOutput>
          {!href ? (
            answer
          ) : (
            <Styled.TerminalLink
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              "{answer}"
            </Styled.TerminalLink>
          )}
        </Styled.TerminalOutput>
      </>
    ) : (
      <>
        <Styled.TerminalInput>
          <Styled.TerminalArrow>>></Styled.TerminalArrow>{' '}
          <Styled.FinalStatement />
        </Styled.TerminalInput>
      </>
    )}
  </Styled.TerminalWrapper>
)

export default TerminalCommand
