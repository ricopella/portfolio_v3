import { SubSkills, Skills } from '../types'

export default (categories: Skills[], selectedCategory: string): SubSkills[] =>
  categories.find(category => category.title === selectedCategory)?.skills || []
