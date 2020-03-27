import { graphql, useStaticQuery } from 'gatsby'
import { UseSiteMetaDataReturns } from '../types'

const useSiteMetaData = (): UseSiteMetaDataReturns => {
  const { data } = useStaticQuery(graphql`
    query {
      data: site {
        siteMetadata {
          title
          author {
            name
            url
            email
            handle
          }
        }
      }
    }
  `)

  return data?.siteMetadata
}

export default useSiteMetaData
