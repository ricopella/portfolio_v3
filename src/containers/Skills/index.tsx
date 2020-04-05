import React, { useEffect, useState } from 'react'
import Page from '../../components/Page/index'
import ProgressBar from '../../components/ProgressBar'
import Styled from './Skills.styles'
import useSiteMetaData from '../../hooks/useSiteMetaData'
import ToggleTabs from '../../components/ToggleTabs'
import useIsMobile from '../../hooks/useIsMobile'

const SkillsContainer = () => {
  const isMobile = useIsMobile()
  const { skills: categories } = useSiteMetaData()
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories?.[0]?.title
  )

  useEffect(() => {
    if (isMobile) {
      // If on mobile, reset the tabs to none
      setSelectedCategory('')
    }
  }, [isMobile])

  const setCurrentSkills = () => {
    return (
      categories.find(category => category.title === selectedCategory)
        ?.skills || []
    )
  }
  const [shownSkills, setShownSkills] = useState(setCurrentSkills())

  const handleSetSelectedCategory = (categoryToSet: string) => {
    if (isMobile && categoryToSet === selectedCategory) {
      // on mobile - means already open, close it
      setSelectedCategory('')
    } else {
      setSelectedCategory(categoryToSet)
    }
  }

  useEffect(() => {
    setShownSkills(setCurrentSkills)
  }, [selectedCategory])

  return (
    <Page id="skills" css={Styled.PageHeading}>
      <Styled.SkillsWrapper>
        <h1 css={Styled.PageTitle}>{`technical skills`.toUpperCase()}</h1>
        <ToggleTabs
          items={categories.map(category => category.title)}
          selectedItem={selectedCategory}
          setSelectedItem={handleSetSelectedCategory}
        >
          <Styled.SelectedSkillsWrapper>
            {shownSkills.map(skill => (
              <ProgressBar
                key={`skill_${selectedCategory}_${skill.title}`}
                title={skill.title}
                percent={skill.percent}
              />
            ))}
          </Styled.SelectedSkillsWrapper>
        </ToggleTabs>
      </Styled.SkillsWrapper>
    </Page>
  )
}

export default SkillsContainer
