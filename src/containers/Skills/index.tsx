import Page from '../../components/Page/index'
import PageHeading from '../../components/PageHeading'
import ProgressBar from '../../components/ProgressBar'
import React, { useEffect } from 'react'
import Styled from './Skills.styles'
import ToggleTabs from '../../components/ToggleTabs'
import useCategorySubSkills from '../../hooks/useCategorySubSkills'
import useIsMobile from '../../hooks/useIsMobile'
import useSiteMetaData from '../../hooks/useSiteMetaData'
import { motion } from 'framer-motion'
import { SLIDE_IN_ANIMATION_OPTIONS } from '../../styles/variables'

const HEADING_TITLE = `Technical Skills`

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
        <PageHeading title={HEADING_TITLE} />
        <ToggleTabs
          items={categories.map(category => category.title)}
          selectedItem={selectedCategory}
          setSelectedItem={handleSetSelectedCategory}
        >
          <Styled.SelectedSkillsWrapper>
            {selectedCategorySubSkills.map(skill => (
              <motion.div
                {...SLIDE_IN_ANIMATION_OPTIONS}
                key={`skill_${selectedCategory}_${skill.title}`}
              >
                <ProgressBar title={skill.title} percent={skill.percent} />
              </motion.div>
            ))}
          </Styled.SelectedSkillsWrapper>
        </ToggleTabs>
      </Styled.SkillsWrapper>
    </Page>
  )
}

export default SkillsContainer
