import { GithubDonutItem, GithubLanguageItem } from '../types'

const setGithubLanguageData = (
  languages: GithubLanguageItem
): GithubDonutItem[] => {
  const total = languages.totalSize

  const result = (languages?.edges || []).map(lang => {
    return {
      name: lang?.node?.name,
      y: Number(((lang?.size / total) * 100).toPrecision(2)),
    }
  })

  return result
}

export default setGithubLanguageData
