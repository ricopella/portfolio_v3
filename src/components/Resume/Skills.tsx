import React, { FC } from 'react'
import Styled from './Resume.styles'
import useSiteMetaData from '../../hooks/useSiteMetaData'
import { ResumeSkillsItem } from '../../types'

export const PureSkills: FC<{
  skillsItems: ResumeSkillsItem[]
  title: string
}> = ({ skillsItems = [], title = '' }) => (
  <Styled.Skills>
    <Styled.ResumeBodyHeading>{title}</Styled.ResumeBodyHeading>
    <Styled.ResumeSkillsBody>
      {(skillsItems || []).map((item, idx) => (
        <Styled.ResumeSkillRow key={`resume_skills_${item.title}_${idx}`}>
          <Styled.ResumeSkillKey>{item.title}</Styled.ResumeSkillKey>
          <Styled.ResumeSkillValue>
            {[...new Array(item.value)].map((x, y) => (
              <Styled.Star key={`resume_skill_star_${item.title}_{idx}_${y}`} />
            ))}
          </Styled.ResumeSkillValue>
        </Styled.ResumeSkillRow>
      ))}
    </Styled.ResumeSkillsBody>
  </Styled.Skills>
)

const Skills = () => {
  const { resume } = useSiteMetaData()
  return (
    <PureSkills skillsItems={resume.skills} title={Object.keys(resume)[3]} />
  )
}

export default Skills
