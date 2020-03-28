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
          keywords
          lang
          title
          titleTemplate
        }
      }
    }
  `)

  return data?.siteMetadata
}

export default useSiteMetaData
