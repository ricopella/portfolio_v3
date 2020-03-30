import React from 'react'
import TypeIt from 'typeit-react'
import Hero from '../../components/Hero'
import useSiteMetaData from '../../hooks/useSiteMetaData'
import { SLIDE_IN_ANIMATION_OPTIONS } from '../../styles/variables'
import Styled from './Home.styles'

const HomeContainer = () => {
  const { author } = useSiteMetaData()

  return (
    <Styled.FullPage id="home">
      <Hero />
      <Styled.IntroTextContainer {...SLIDE_IN_ANIMATION_OPTIONS}>
        <Styled.IntroText>{author?.name.toUpperCase()}</Styled.IntroText>
        <Styled.Break />
        <Styled.Description>
          <TypeIt
            options={{ loop: true }}
            getBeforeInit={instance => {
              instance
                .type('Full-Stack Developer')
                .pause(900)
                .delete()
                .type('Front-End Developer')
                .pause(900)
                .delete()
                .type('Freelance Developer')
                .pause(900)
                .delete()
                .type('Scrum Master')
                .pause(700)
                .delete()
                .type('Project Manager')
                .pause(700)
                .delete()
                .type('DeeJay')
                .pause(500)
                .delete()
                .type('Turntablist')
                .pause(500)
                .delete()
                .type('Producer')
                .pause(500)
                .delete()
                .type('Bulldog Owner')
                .pause(500)
                .delete()
                .type('Boston Sports Fan')
                .pause(500)
                .delete()
              return instance
            }}
          />
        </Styled.Description>
      </Styled.IntroTextContainer>
    </Styled.FullPage>
  )
}

export default HomeContainer
