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
          title
          titleTemplate
        }
      }
    }
  `)

  return data?.siteMetadata || null
}

export default useSiteMetaData
