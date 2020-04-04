import React from 'react'
import Page from '../../components/Page/index'
import Container from '../../components/Container/index'
import ProgressBar from '../../components/ProgressBar'
import Styled from './Skills.styles'
import useSiteMetaData from '../../hooks/useSiteMetaData'

const SkillsContainer = () => {
  const { skills: categories } = useSiteMetaData()
  return (
    <Page id="skills" css={Styled.PageHeading}>
      <Styled.SkillsWrapper>
        <Container>
          <h1 css={Styled.PageTitle}>{`technical skills`.toUpperCase()}</h1>
          {categories.map(category => (
            <div key={`skill_category_${category.title}`}>
              <div>{category.title}</div>
              {category.skills.map(skill => (
                <ProgressBar
                  key={`skill_${category.title}_${skill.title}`}
                  title={skill.title}
                  percent={skill.percent}
                />
              ))}
            </div>
          ))}
        </Container>
      </Styled.SkillsWrapper>
    </Page>
  )
}

export default SkillsContainer
