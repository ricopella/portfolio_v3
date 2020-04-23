import Hero from '../Hero'
import ProfileImage from '../ProfileImage'
import React from 'react'
import SlideUpElement from '../SlideUpElement'
import Styled from './Resume.styles'

const Resume = () => (
  <>
    <Styled.ResumeContainer>
      <Hero />
      <SlideUpElement style={{ gridArea: `1/1/-1/-1` }}>
        <Styled.ResumeWrapper>
          <Styled.Heading>
            <Styled.HeadingProfileImageWrapper>
              <ProfileImage />
            </Styled.HeadingProfileImageWrapper>
            <Styled.HeadingWrapper>
              <Styled.HeadingText className="first">Narin</Styled.HeadingText>
              <Styled.HeadingText className="last">
                Sundarabhaya
              </Styled.HeadingText>
            </Styled.HeadingWrapper>
          </Styled.Heading>
        </Styled.ResumeWrapper>
      </SlideUpElement>
    </Styled.ResumeContainer>
  </>
)

export default Resume
