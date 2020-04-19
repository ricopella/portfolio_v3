import { GithubDonutItem, GithubLanguageItem } from '../types'

const setGithubLanguageData = (
  languages: GithubLanguageItem
): GithubDonutItem[] => {
  const total = languages.totalSize

  const result = (languages?.edges || []).map(lang => {
    return {
      name: lang?.node?.name,
      y: (lang?.size / total) * 100,
    }
  })

  return result
}

export default setGithubLanguageData
