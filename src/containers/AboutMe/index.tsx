import Img from 'gatsby-image'
import Page from '../../components/Page/index'
import ProfileImage from '../../components/ProfileImage'
import React, { useState } from 'react'
import Styled from './AboutMe.styles'
import TerminalCommand from '../../components/TerminalCommand/index'
import ToggleSwitch from '../../components/ToggleSwitch'
import useSiteMetaData from '../../hooks/useSiteMetaData'
import useSpotifyData from '../../hooks/useSpotifyData'
import { AboutMeViewsArr } from '../../types'
import { COLORS } from '../../styles/variables'
import { SLIDE_IN_ANIMATION_OPTIONS } from '../../styles/variables'

const VIEWS: AboutMeViewsArr = ['bio', 'terminal']
const HEADING = 'About Me'

const AboutMeMain = () => {
  const { terminalCommands } = useSiteMetaData()
  const [currentView, setCurrentView] = useState<string>(VIEWS[0])
  const recentTracks = useSpotifyData()
  console.log(recentTracks)

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
        {`I’m a frontend software engineer & freelance web developer living in Los
        Angeles. I'm passionate about music, sports, technology and healthy
        living. Collectively I have 10+ years experience in the Sports,
        Entertainment, and Events industries. I'm a life-long learner that's
        looking for ways to get out of my comfort zone to grow my versatility as
        a developer.`}
      </Styled.BioParagraph>
      <Styled.BioParagraph>
        {`I've built sites ranging from simple portfolios, eCommerce shops, to
        data driven B2B web apps with machine learning and data visualizations.
        Some of my freelance web development experience has been with Shopify,
        Wix, and SquareSpace. I've also worked on a freelance project that
        designed a custom API that integrated with 3rd party APIs to automate
        inventory and sales.`}
      </Styled.BioParagraph>
      <Styled.BioParagraph>
        {`In 2017, I attended UCLA's Bootcamp to accelerate my learning and gain
        knowledge of the Node.js ecosystem. Since then, I fell in love with &
        have been primarily using React in web applications. For static sites, I
        love using Gatsby for creating blazing fast, SEO-driven headless
        frontend user interfaces (like this site).`}
      </Styled.BioParagraph>
      <Styled.BioParagraph>
        {`When I'm not looking into a screen filled with code, I'm usually walking
        with my dog, at the gym, meditating, trying a new plant based recipe, or
        doing some form of musical expression. I've owned a pair of turntables,
        beat machine, and records since I was in the 9th grade. I'm in a DJ
        group called `}
        <Styled.ContactLink
          href={'https://themusicplease.com/'}
          target="_blank"
          rel="noopener noreferrer"
        >
          {`Music Please`}
        </Styled.ContactLink>
        {` which started from a radio show that lasted 7 years. And, I'm an avid
        New England sports fan!`}
      </Styled.BioParagraph>
      <div>
        {recentTracks.map((audio, idx) => (
          <div key={audio.track.name + idx}>
            {audio.track.name} -{' '}
            <a href={audio.track.href}>{audio.track.href} </a>
            {audio.track.artists.map(x => `${x.name} -`)}
            {/* <Img fluid={audio.track.image.localFile.childImageSharp.fluid} /> */}
          </div>
        ))}
      </div>
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
