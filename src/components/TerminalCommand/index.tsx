import React, { FC } from 'react'
import { TerminalCommandProps } from '../../types'
import Styled from './TerminalCommand.styles'

const TerminalArrow = () => <Styled.TerminalArrow>{`>> `}</Styled.TerminalArrow>

const TerminalCommand: FC<TerminalCommandProps> = ({
  question,
  answer,
  href,
}) => {
  const renderQuestionAndAnswer = () => (
    <>
      <Styled.TerminalInput>
        <TerminalArrow />
        {` ${question}`}
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
            {`"${answer}"`}
          </Styled.TerminalLink>
        )}
      </Styled.TerminalOutput>
    </>
  )

  const renderFinalCommand = () => (
    <Styled.TerminalInput>
      <TerminalArrow />
      <Styled.FinalStatement />
    </Styled.TerminalInput>
  )

  return (
    <Styled.TerminalWrapper>
      {question && answer ? renderQuestionAndAnswer() : renderFinalCommand()}
    </Styled.TerminalWrapper>
  )
}

export default TerminalCommand
