import Page from '../../components/Page/index'
import ProfileImage from '../../components/ProfileImage'
import React, { useState } from 'react'
import SpotifyTop3 from '../../components/SpotifyTop3'
import Styled from './AboutMe.styles'
import Terminal from '../../components/Terminal'
import ToggleSwitch from '../../components/ToggleSwitch'
import { AboutMeViewsArr } from '../../types'
import { BUTTON_ANIMATION } from '../../styles/variables'
import {
  SLIDE_IN_ANIMATION_OPTIONS,
  SLIDE_ELEMENT_DOWN_ANIMATION,
} from '../../styles/variables'

const VIEWS: AboutMeViewsArr = ['bio', 'terminal']
const HEADING = 'About Me'

const AboutMeMain = () => {
  const [currentView, setCurrentView] = useState<string>(VIEWS[0])
  const [isMoreShown, setIsMoreShown] = useState<boolean>(false)
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
        {`I’m a software engineer & freelance web developer living in Los
        Angeles. I'm passionate about music, sports, technology and healthy
        living. Collectively I have 10+ years experience in the Sports,
        Entertainment, and Events industries. I'm a life-long learner that's
        looking for ways to get out of my comfort zone to grow my versatility as
        a developer.`}
      </Styled.BioParagraph>
      <Styled.MoreAboutMeWrapper
        animate={isMoreShown ? 'visible' : 'collapsed'}
        {...SLIDE_ELEMENT_DOWN_ANIMATION}
      >
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
        {/* <Styled.SpotifyHeadingWrapper>
          <Styled.SpotifyHeading>
            Here are songs I listened to recently on{' '}
            <Styled.ContactLink
              href="https://developer.spotify.com/documentation/web-api/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spotify
            </Styled.ContactLink>
          </Styled.SpotifyHeading>
          <Styled.SpotifySubheading>
            (most likely while working out)
          </Styled.SpotifySubheading>
        </Styled.SpotifyHeadingWrapper>
        <SpotifyTop3 /> */}
      </Styled.MoreAboutMeWrapper>
      <Styled.ShowMoreButtonWrapper>
        <Styled.ShowMoreButton
          {...BUTTON_ANIMATION}
          onClick={() => setIsMoreShown(curr => !curr)}
        >
          {!isMoreShown ? `Tell Me More!` : `Hide`}
        </Styled.ShowMoreButton>
      </Styled.ShowMoreButtonWrapper>
    </Styled.BioContainer>
  )

  return (
    <Page id="about-me" title={HEADING}>
      <ToggleSwitch
        currentView={currentView}
        setView={setCurrentView}
        views={VIEWS}
      />
      {currentView === 'bio' ? renderInfo() : <Terminal />}
    </Page>
  )
}

export default AboutMeMain
