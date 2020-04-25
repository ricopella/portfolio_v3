import React, { FC } from 'react'
import Styled from './Resume.styles'

const Education: FC<{}> = () => (
  <Styled.Education>
    <Styled.ResumeBodyHeading>Education</Styled.ResumeBodyHeading>
    <Styled.EducationBody>
      <Styled.EducationItem>
        <Styled.EducationItemTitle>UCLA Extension</Styled.EducationItemTitle>
        <Styled.EducationItemSubTitle>
          Full-Stack Web Development Certification
        </Styled.EducationItemSubTitle>
        <Styled.EducationItemDate>2017</Styled.EducationItemDate>
      </Styled.EducationItem>
      <Styled.EducationItem>
        <Styled.EducationItemTitle>
          Johnson & Wales University
        </Styled.EducationItemTitle>
        <Styled.EducationItemSubTitle>
          Bachelor of Arts
        </Styled.EducationItemSubTitle>
        <Styled.EducationItemNote>+ GPA of 3.8 4.0</Styled.EducationItemNote>
        <Styled.EducationItemDate>2005 - 2009</Styled.EducationItemDate>
      </Styled.EducationItem>
      <Styled.EducationItem>
        <Styled.EducationItemTitle>Scrum Alliance</Styled.EducationItemTitle>
        <Styled.EducationItemSubTitle>
          Certified ScrumMaster
        </Styled.EducationItemSubTitle>
        <Styled.EducationItemDate>2018</Styled.EducationItemDate>
      </Styled.EducationItem>
    </Styled.EducationBody>
  </Styled.Education>
)

export default Education
