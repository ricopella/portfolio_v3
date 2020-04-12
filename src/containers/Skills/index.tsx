import Page from '../../components/Page/index'
import PageHeading from '../../components/PageHeading'
import ProgressBar from '../../components/ProgressBar'
import React, { useEffect } from 'react'
import SlideUp from '../../components/SlideUpElement'
import Styled from './Skills.styles'
import ToggleTabs from '../../components/ToggleTabs'
import useCategoryItems from '../../hooks/useCategoryItems'
import useIsMobile from '../../hooks/useIsMobile'
import useSiteMetaData from '../../hooks/useSiteMetaData'

const HEADING_TITLE = `Technical Skills`

const SkillsContainer = () => {
  const isMobile = useIsMobile()
  const { skills: categories } = useSiteMetaData()
  const [
    selectedCategorySubSkills,
    selectedCategory,
    setSelectedCategory,
  ] = useCategoryItems(categories)

  useEffect(() => {
    if (isMobile) {
      // If on mobile, reset the tabs to none
      setSelectedCategory('')
    } else {
      if (selectedCategory === '') {
        setSelectedCategory(categories?.[0].title)
      }
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
    <Page id="technical-skills">
      <Styled.SkillsWrapper>
        <PageHeading title={HEADING_TITLE} />
        <ToggleTabs
          items={categories.map(category => category.title)}
          selectedItem={selectedCategory}
          setSelectedItem={handleSetSelectedCategory}
        >
          <Styled.SelectedSkillsWrapper>
            {selectedCategorySubSkills.map(skill => (
              <SlideUp key={`skill_${selectedCategory}_${skill.title}`}>
                <ProgressBar title={skill.title} percent={skill.percent} />
              </SlideUp>
            ))}
          </Styled.SelectedSkillsWrapper>
        </ToggleTabs>
      </Styled.SkillsWrapper>
    </Page>
  )
}

export default SkillsContainer
