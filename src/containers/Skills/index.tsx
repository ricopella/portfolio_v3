import React, { useEffect } from 'react'
import Page from '../../components/Page/index'
import ProgressBar from '../../components/ProgressBar'
import Styled from './Skills.styles'
import useSiteMetaData from '../../hooks/useSiteMetaData'
import ToggleTabs from '../../components/ToggleTabs'
import useIsMobile from '../../hooks/useIsMobile'
import useCategorySubSkills from '../../hooks/useCategorySubSkills'

const SkillsContainer = () => {
  const isMobile = useIsMobile()
  const { skills: categories } = useSiteMetaData()
  const [
    selectedCategorySubSkills,
    selectedCategory,
    setSelectedCategory,
  ] = useCategorySubSkills(categories)

  useEffect(() => {
    if (isMobile) {
      // If on mobile, reset the tabs to none
      setSelectedCategory('')
    }
  }, [isMobile])

  const handleSetSelectedCategory = (categoryToSet: string) => {
    if (isMobile && categoryToSet === selectedCategory) {
      // on mobile - means already open, close it
      setSelectedCategory('')
    } else {
      setSelectedCategory(categoryToSet)
    }
  }

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
            {selectedCategorySubSkills.map(skill => (
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
