import React, { FC } from 'react'
import Styled from './Terminal.styles'
import TerminalCommand from '../../components/TerminalCommand'
import useSiteMetaData from '../../hooks/useSiteMetaData'
import { COLORS } from '../../styles/variables'
import { SLIDE_IN_ANIMATION_OPTIONS } from '../../styles/variables'

const Terminal: FC<{}> = () => {
  const { terminalCommands } = useSiteMetaData()
  const renderTerminalHeader = () => (
    <Styled.TerminalHeader>
      <Styled.TerminalHeaderActionContainer>
        <Styled.TerminalHeaderActionBalls
          style={{ backgroundColor: COLORS.terminalActionClose }}
        />
        <Styled.TerminalHeaderActionBalls
          style={{ backgroundColor: COLORS.terminalActionMinimize }}
        />
        <Styled.TerminalHeaderActionBalls
          style={{ backgroundColor: COLORS.terminalActionExpand }}
        />
      </Styled.TerminalHeaderActionContainer>
      <Styled.TerminalHeaderTitle>
        admin@nrs-portfolio: ~/About_Me
      </Styled.TerminalHeaderTitle>
    </Styled.TerminalHeader>
  )
  return (
    <Styled.TerminalContainer {...SLIDE_IN_ANIMATION_OPTIONS}>
      {renderTerminalHeader()}
      <Styled.TerminalBody>
        {terminalCommands.map(command => (
          <TerminalCommand
            key={`terminal_command_${command.question}`}
            answer={command.answer}
            href={command.href}
            question={command.question}
          />
        ))}
        <TerminalCommand />
      </Styled.TerminalBody>
    </Styled.TerminalContainer>
  )
}

export default Terminal
