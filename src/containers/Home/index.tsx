import Arrow from '../../components/Arrow'
import Hero from '../../components/Hero/index'
import React from 'react'
import Styled from './Home.styles'
import TypeIt from '../../components/TypeIt'
import useSiteMetaData from '../../hooks/useSiteMetaData'
import { SLIDE_IN_ANIMATION_OPTIONS } from '../../styles/variables'

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
