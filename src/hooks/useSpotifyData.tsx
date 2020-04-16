import { graphql, useStaticQuery } from 'gatsby'
import { UseSpotifyData } from '../types'

const useSpotifyData = (): UseSpotifyData[] => {
  const { spotifyRecentTracks } = useStaticQuery(graphql`
    query {
      spotifyRecentTracks: allSpotifyRecentTrack(limit: 3) {
        nodes {
          track {
            external_urls {
              spotify
            }
            name
            preview_url
            artists {
              name
            }
            href
            image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
          played_at
        }
      }
    }
  `)

  return spotifyRecentTracks?.nodes || null
}

export default useSpotifyData
