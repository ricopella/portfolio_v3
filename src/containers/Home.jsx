import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { colors } from '../styles/variables'

// assets
import BackgroundImage from '../images/nrs_background.jpg'

const StyledFullPage = styled.div`
  background: transparent;
  height: 100vh;
  width: 100vw;
  position: relative;
  background-size: cover;
  display: grid;
`

const StyledIntroTextContainer = styled.div`
  align-content: center;
  display: grid;
  grid-template-columns: auto-fill;
  grid-template-rows: repeat(3, 60px);
  height: 100vh;
  justify-content: center;
  z-index: 2;
`

const StyledIntroText = styled.div`
  color: ${colors.header};
  font-size: 4em;
  text-align: center;
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
    opacity: 0;
  }
`

const HomeContainer = ({ data, name = '', position = '' }) => (
  <StyledFullPage id="home">
    <img src={BackgroundImage} style={{ position: 'unset', opacity: 0.95 }} />
    <StyledIntroTextContainer>
      <StyledIntroText>{name.toUpperCase()}</StyledIntroText>
      <StyledBreak />
      <StyledIntroText className={description}>
        {position.toUpperCase()}
      </StyledIntroText>
    </StyledIntroTextContainer>
  </StyledFullPage>
)

export default HomeContainer
