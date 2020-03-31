import React from 'react'
import TypeIt from '../../components/TypeIt'
import Hero from '../../components/Hero/index'
import useSiteMetaData from '../../hooks/useSiteMetaData'
import { SLIDE_IN_ANIMATION_OPTIONS } from '../../styles/variables'
import Styled from './Home.styles'
import Arrow from '../../components/Arrow'

const HomeContainer = () => {
  const { author } = useSiteMetaData()

  return (
    <Styled.FullPage id="home">
      <Hero />
      <Styled.IntroTextContainer {...SLIDE_IN_ANIMATION_OPTIONS}>
        <Styled.IntroText>{author?.name.toUpperCase()}</Styled.IntroText>
        <Styled.Break />
        <Styled.Description>
          <TypeIt />
        </Styled.Description>
        <Arrow />
      </Styled.IntroTextContainer>
    </Styled.FullPage>
  )
}

export default HomeContainer
