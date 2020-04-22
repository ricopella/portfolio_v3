import { Skills, SubSkills } from '../types'

/**
 * Utility function that list of categories (Languages, Front-End, Back-End, ....)
 * and returns it's children (skills in that category)
 */
export default (categories: Skills[], selectedCategory: string): SubSkills[] =>
  categories.find(category => category.title === selectedCategory)?.items || []
