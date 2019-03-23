import { css } from '@emotion/core'
import styled from '@emotion/styled'
import React, { useState, useEffect } from 'react'

import { colors } from '../styles/variables'
import Image from '../components/image'
import MobileImage from '../components/galleryImage'

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
  grid-template-rows: 60px 10px 60px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  z-index: 2;
  grid-row: 1 / -1;
  grid-column: 1 / -1;

  @media (max-width: 750px) {
    grid-template-rows: 36px 60px 0px;
  }
`

const StyledIntroText = styled.div`
  color: ${colors.header};
  font-size: 4em;
  text-align: center;
  align-self: center;
  justify-self: center;

  @media (max-width: 750px) {
    font-size: 2em;
  }
`

const description = css`
  font-size: 1.9em;

  @media (max-width: 750px) {
    word-wrap: break-word;
    font-size: 1em;
    padding: 7% 0;
  }
`

const StyledBreak = styled.div`
  align-self: center;
  background-color: ${colors.white};
  height: 4px;
  justify-self: center;
  width: 600px;

  @media (max-width: 750px) {
    width: 80%;
  }
`

const HomeContainer = ({ name = '', ...rest }) => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' && window.innerWidth < 768
  )

  useEffect(() => {
    const handleSetMobile = () => setIsMobile(window.innerWidth <= 768)
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleSetMobile)
      try {
        const typeIt = require('typeit')

        new typeIt('#myID', {
          loop: true,
        })
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
          .go()
      } catch (e) {
        console.error(e)
      }
    }

    return () => {
      window.removeEventListener('resize', handleSetMobile)
    }
  })
  return (
    <StyledFullPage id="home">
      {!isMobile ? (
        <Image
          filename="nrs_background.jpg"
          style={{
            position: 'unset',
            opacity: 0.95,
            maxWidth: '100%',
            margin: '0 auto',
            padding: 0,
            gridRow: '1/-1',
            gridColumn: '1/-1',
            minHeight: '100vh',
          }}
          alt="Narin Sundarabhaya - Welcome!"
          {...rest}
        />
      ) : (
        <MobileImage
          filename="nrs_background.jpg"
          style={{
            position: 'unset',
            opacity: 0.95,
            maxWidth: '100%',
            margin: '0 auto',
            padding: 0,
            gridRow: '1/-1',
            gridColumn: '1/-1',
            minHeight: '100vh',
          }}
          alt="Narin Sundarabhaya - Welcome!"
          {...rest}
        />
      )}
      <StyledIntroTextContainer>
        <StyledIntroText>{name.toUpperCase()}</StyledIntroText>
        <StyledBreak />
        <StyledIntroText className={description}>
          <div id="myID" />
        </StyledIntroText>
      </StyledIntroTextContainer>
    </StyledFullPage>
  )
}

export default HomeContainer
