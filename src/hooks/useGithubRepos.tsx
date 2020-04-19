import { graphql, useStaticQuery } from 'gatsby'

const DEFAULT_LIMIT_REPOS = 50
const DEFAULT_LIMIT_LANGUAGES = 10
const USER_SCREEN_NAME = 'ricopella'

const useGithubRepos = () => {
  const { github } = useStaticQuery(graphql`
    query {
      github {
        user(login: USER_SCREEN_NAME) {
          repositories(first: DEFAULT_LIMIT_REPOS) {
            edges {
              node {
                id
                name
                updatedAt
                url
                createdAt
                languages(first: DEFAULT_LIMIT_LANGUAGES) {
                  totalCount
                  totalSize
                  edges {
                    size
                    node {
                      name
                      id
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return github?.user?.repositories?.edges || []
}

export default useGithubRepos
