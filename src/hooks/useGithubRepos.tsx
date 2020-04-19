import { graphql, useStaticQuery } from 'gatsby'
import { UseGithubRepoItem } from '../types'

const useGithubRepos = (): UseGithubRepoItem[] => {
  const { github } = useStaticQuery(graphql`
    query {
      github {
        user(login: "ricopella") {
          repositories(
            first: 50
            orderBy: { field: UPDATED_AT, direction: DESC }
          ) {
            edges {
              node {
                id
                name
                updatedAt
                url
                createdAt
                languages(
                  first: 10
                  orderBy: { field: SIZE, direction: DESC }
                ) {
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
