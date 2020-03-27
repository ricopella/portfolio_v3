import { css } from '@emotion/core'
import styled from '@emotion/styled'
import React, { useState, useEffect } from 'react'
import TypeIt from 'typeit-react'
import useIsMobile from '../hooks/useIsMobile'
import Hero from '../components/Hero'
import { colors } from '../styles/variables'
import MobileImage from '../components/GalleryImage'

// assets
const StyledFullPage = styled.div`
  background: transparent;
  height: 100%;
  width: 100%;
  position: relative;
  background-size: cover;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
`

const StyledIntroTextContainer = styled.div`
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  display: grid;
  grid-template-columns: auto-fill;
  grid-template-rows: 3.75rem 0.625rem 3.75rem;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  z-index: 2;
  grid-row: 1 / -1;
  grid-column: 1 / -1;

  @media (max-width: 46.875rem) {
    grid-template-rows: 2.25rem 3.75rem 0px;
  }
`

const StyledIntroText = styled.div`
  color: ${colors.header};
  font-size: 4rem;
  text-align: center;
  align-self: center;
  justify-self: center;
  width: calc(100vw + (1.5rem * 2));

  @media (max-width: 46.875rem) {
    font-size: 2rem;
  }
`

const description = css`
  font-size: 1.9em;

  @media (max-width: 46.875rem) {
    word-wrap: break-word;
    font-size: 1rem;
    padding: 7% 0;
  }
`

const StyledBreak = styled.div`
  align-self: center;
  background-color: ${colors.white};
  height: 4px;
  justify-self: center;
  width: 37.5rem;

  @media (max-width: 46.875rem) {
    width: 80%;
  }
`

const HomeContainer = ({ name = '', ...rest }) => {
  const isMobile = useIsMobile()

  return (
    <StyledFullPage id="home">
      <Hero />
      <StyledIntroTextContainer>
        <StyledIntroText>{name.toUpperCase()}</StyledIntroText>
        <StyledBreak />
        <StyledIntroText style={description}>
          <TypeIt
            options={{ loop: true }}
            getBeforeInit={instance => {
              instance
                .type('Full-Stack Developer')
                .pause(700)
                .delete()
                .type('Front-End Developer')
                .pause(700)
                .delete()
                .type('Freelance Developer')
                .pause(700)
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
                .type('Amateur Photographer')
                .pause(500)
                .delete()
                .type('Boston Sports Fan')
                .pause(500)

              return instance
            }}
          />
        </StyledIntroText>
      </StyledIntroTextContainer>
    </StyledFullPage>
  )
}

export default HomeContainer
