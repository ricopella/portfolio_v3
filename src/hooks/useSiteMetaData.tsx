import { graphql, useStaticQuery } from 'gatsby'
import { UseSiteMetaDataReturns } from '../types'

const useSiteMetaData = (): UseSiteMetaDataReturns => {
  const { data } = useStaticQuery(graphql`
    query {
      data: site {
        siteMetadata {
          author {
            name
            url
            email
            handle
          }
          contactItems {
            href
            title
          }
          description
          lang
          headerItems
          portfolioItems {
            title
            items {
              alt
              description
              fileName
              href
              githubId
              myTitle
              tech
              title
              year
            }
          }
          skills {
            title
            items {
              title
              percent
            }
          }
          terminalCommands {
            answer
            href
            question
          }
          title
          titleTemplate
        }
      }
    }
  `)

  return data?.siteMetadata || null
}

export default useSiteMetaData
