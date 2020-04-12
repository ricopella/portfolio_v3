import Page from '../../components/Page/index'
import ProfileImage from '../../components/ProfileImage'
import React, { useState } from 'react'
import Styled from './AboutMe.styles'
import TerminalCommand from '../../components/TerminalCommand/index'
import ToggleSwitch from '../../components/ToggleSwitch'
import useSiteMetaData from '../../hooks/useSiteMetaData'
import { AboutMeViewsArr } from '../../types'
import { COLORS } from '../../styles/variables'
import { SLIDE_IN_ANIMATION_OPTIONS } from '../../styles/variables'

const VIEWS: AboutMeViewsArr = ['bio', 'terminal']
const HEADING = 'About Me'

const AboutMeMain = () => {
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

  const renderInfo = () => (
    <Styled.BioContainer {...SLIDE_IN_ANIMATION_OPTIONS}>
      <Styled.BioHeadingWrapper>
        <ProfileImage />
        <Styled.BioHeadingText>
          <h2>{`Hi, I'm Narin.`}</h2>
          <h4>{`I'm grateful that you've visited my page.`}</h4>
        </Styled.BioHeadingText>
      </Styled.BioHeadingWrapper>
      <Styled.BioParagraph className="first">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut
        lorem sit amet mi tincidunt venenatis eu vitae libero. Aliquam erat
        volutpat. Nam ut molestie urna, in placerat dolor. Aenean eget vulputate
        arcu, ut hendrerit elit. Phasellus ullamcorper nulla quis diam
        porttitor, nec interdum elit hendrerit. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Etiam ut augue
        nibh. Quisque varius vulputate ex, sit amet aliquam justo cursus vel.
        Sed velit augue, elementum vehicula condimentum in, fringilla sed felis.
        Maecenas tincidunt hendrerit lacinia. Maecenas sit amet felis vel tortor
        interdum eleifend tristique at metus.
      </Styled.BioParagraph>
      <Styled.BioParagraph>
        Curabitur blandit, justo vel vestibulum consequat, lorem nisl accumsan
        magna, eu accumsan urna ex id arcu. Ut mattis vitae sem id placerat.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        Curae; Duis vel luctus nisi. Cras at nisl vitae elit pharetra porta.
        Maecenas ornare tincidunt mauris ac lacinia. Sed in eleifend velit.
        Donec at ex vitae dui dignissim euismod in et nulla. In sodales tortor
        quis felis suscipit, nec tristique nulla lobortis. Phasellus suscipit mi
        orci, ut ornare massa varius at. Integer placerat sodales quam, luctus
        gravida dui maximus quis.
      </Styled.BioParagraph>
    </Styled.BioContainer>
  )

  return (
    <Page id="about-me" title={HEADING}>
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
