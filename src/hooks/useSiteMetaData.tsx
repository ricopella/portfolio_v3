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
          description
          lang
          headerItems
          portfolioItems {
            alt
            description
            fileName
            href
            title
            span
          }
          skills {
            title
            skills {
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

  console.log(data.siteMetadata)
  return data?.siteMetadata || null
}

export default useSiteMetaData
