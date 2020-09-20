import Arrow from '../../components/Arrow'
import Hero from '../../components/Hero/index'
import React from 'react'
import Styled from './Home.styles'
import useSiteMetaData from '../../hooks/useSiteMetaData'
import { SLIDE_IN_ANIMATION_OPTIONS } from '../../styles/variables'

const HomeContainer = () => {
  const { author } = useSiteMetaData()

  return (
    <Styled.FullPage id="home" {...SLIDE_IN_ANIMATION_OPTIONS}>
      <Hero />
      <Styled.IntroTextContainer>
        <Styled.IntroContentWrapper>
          <Styled.IntroContentText>{`Hi, my name is`}</Styled.IntroContentText>
          <Styled.IntroTextName>
            {author?.name.toUpperCase()}
          </Styled.IntroTextName>
          <Styled.IntroContentText>
            {`I build things for the web.`}
          </Styled.IntroContentText>
          <Styled.IntroSubDescription>
            {`I'm a software engineer living in Los Angles, CA specializing in building websites, applications, and everything in between.`}
          </Styled.IntroSubDescription>
        </Styled.IntroContentWrapper>
        <Arrow />
      </Styled.IntroTextContainer>
    </Styled.FullPage>
  )
}

export default HomeContainer
