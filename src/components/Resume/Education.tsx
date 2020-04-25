import React, { FC } from 'react'
import Styled from './Resume.styles'
import useSiteMetaData from '../../hooks/useSiteMetaData'
import { ResumeEducationItem } from '../../types'

export const PureEducation: FC<{
  educationItems: ResumeEducationItem[]
  title: string
}> = ({ educationItems = [], title = '' }) => (
  <Styled.Education>
    <Styled.ResumeBodyHeading>{title}</Styled.ResumeBodyHeading>
    <Styled.EducationBody>
      {(educationItems || []).map((item, idx) => (
        <Styled.EducationItem key={`resume_education_${item}_${idx}`}>
          <Styled.EducationItemTitle>{item.title}</Styled.EducationItemTitle>
          <Styled.EducationItemSubTitle>
            {item.subTitle}
          </Styled.EducationItemSubTitle>
          <Styled.EducationItemDate>{item.date}</Styled.EducationItemDate>
          {item.note ? (
            <Styled.EducationItemNote>+ {item.note}</Styled.EducationItemNote>
          ) : null}
        </Styled.EducationItem>
      ))}
    </Styled.EducationBody>
  </Styled.Education>
)

const Education: FC<{}> = () => {
  const { resume } = useSiteMetaData()
  const key = Object.keys(resume)[1]
  return <PureEducation educationItems={resume.education} title={key} />
}

export default Education
