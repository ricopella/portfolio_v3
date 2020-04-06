import React, { useState, useEffect } from 'react'
import { SubSkills, Skills } from '../types'
import setCurrentSkills from '../utils/setCurrentSkills'

const useCategorySubSkills = (
  categories: Skills[]
): [SubSkills[], string, (category: string) => void] => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories?.[0]?.title
  )
  const [subSkills, setSubSkills] = useState(
    setCurrentSkills(categories, selectedCategory)
  )

  // When the category changes, update the sub-skills
  useEffect(() => {
    setSubSkills(setCurrentSkills(categories, selectedCategory))
  }, [selectedCategory])

  return [subSkills, selectedCategory, setSelectedCategory]
}

export default useCategorySubSkills
