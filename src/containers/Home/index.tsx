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
          <Styled.IntroContentText>{`Hi, I'm`}</Styled.IntroContentText>
          <Styled.IntroTextName>
            {author?.name.toUpperCase()}
          </Styled.IntroTextName>
          <Styled.IntroContentText>
            {`a web & mobile app developer in Los Angeles, CA.`}
          </Styled.IntroContentText>
        </Styled.IntroContentWrapper>
        <Arrow />
      </Styled.IntroTextContainer>
    </Styled.FullPage>
  )
}

export default HomeContainer
