import React, { useState } from 'react'
import Page from '../../components/Page/index'
import TerminalCommand from '../../components/TerminalCommand/index'
import Styled from './AboutMe.styles'
import { COLORS } from '../../styles/variables'
import useSiteMetaData from '../../hooks/useSiteMetaData'
import ProfileImage from '../../components/ProfileImage'
import ToggleSwitch from '../../components/ToggleSwitch'
import { AboutMeViewsArr } from '../../types'

const VIEWS: AboutMeViewsArr = ['bio', 'terminal']

const AboutMeMain = () => {
  const PAGE_TITLE = `about me`
  const { terminalCommands } = useSiteMetaData()
  const [currentView, setCurrentView] = useState<string>(VIEWS[0])

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

  const renderTerminal = () => (
    <Styled.TerminalContainer>
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

  const renderInfo = () => (
    <div>
      <ProfileImage />
    </div>
  )

  return (
    <Page id="about-me" css={Styled.PageStyles}>
      <h1 css={Styled.PageHeading}>{PAGE_TITLE.toUpperCase()}</h1>
      <ToggleSwitch
        currentView={currentView}
        setView={setCurrentView}
        views={VIEWS}
      />
      {currentView === 'bio' ? renderInfo() : renderTerminal()}
    </Page>
  )
}

export default AboutMeMain
