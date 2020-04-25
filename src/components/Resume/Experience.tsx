import React, { FC } from 'react'
import Styled from './Resume.styles'
import useSiteMetaData from '../../hooks/useSiteMetaData'
import { ResumeExperienceItem } from '../../types'

export const PureExperience: FC<{
  experienceItems: ResumeExperienceItem[]
  title: string
}> = ({ experienceItems = [], title = '' }) => (
  <Styled.WorkExperience>
    <Styled.ResumeMainBodyHeading>{title}</Styled.ResumeMainBodyHeading>
    <Styled.ExperienceBody>
      {(experienceItems || []).map((item, idx) => (
        <Styled.ExperienceItem
          key={`experience_item_${item.company}_${item.title}`}
        >
          <Styled.ExperienceFirstTitleRow>
            <Styled.ExperienceTitle>{item.title}</Styled.ExperienceTitle>
            {item.href === '/' ? (
              <Styled.ExperienceInternalLink
                to={item.href}
                title={item.company}
              >
                {item.company}
              </Styled.ExperienceInternalLink>
            ) : (
              <Styled.ExperienceCompanyLink
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                title={item.company}
              >
                {item.company}
              </Styled.ExperienceCompanyLink>
            )}

            <Styled.ExperienceYear>{item.date}</Styled.ExperienceYear>
          </Styled.ExperienceFirstTitleRow>
          {item.items ? (
            <Styled.ExperienceUl>
              {(item.items || []).map((content, idx) => (
                <Styled.ExperienceListItem
                  key={`resume_experience_description_item_${idx}`}
                >
                  {content}
                </Styled.ExperienceListItem>
              ))}
            </Styled.ExperienceUl>
          ) : null}
        </Styled.ExperienceItem>
      ))}
    </Styled.ExperienceBody>
  </Styled.WorkExperience>
)

const Experience: FC<{}> = () => {
  const { resume } = useSiteMetaData()

  return (
    <PureExperience
      experienceItems={resume.experience}
      title={Object.keys(resume)[2]}
    />
  )
}

export default Experience
