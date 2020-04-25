import Contact from './Contact'
import Education from './Education'
import Experience from './Experience'
import Heading from './Heading'
import Hero from '../Hero'
import React from 'react'
import Skills from './Skills'
import SlideUpElement from '../SlideUpElement'
import Styled from './Resume.styles'

const Resume = () => (
  <Styled.ResumeContainer>
    <Hero />
    <SlideUpElement style={{ gridArea: `1/1/-1/-1` }}>
      <Styled.ResumeWrapper>
        <Heading />
        <Styled.ResumeBody>
          <Contact />
          <Skills />
          <Experience />
          <Education />
        </Styled.ResumeBody>
      </Styled.ResumeWrapper>
    </SlideUpElement>
  </Styled.ResumeContainer>
)

export default Resume
