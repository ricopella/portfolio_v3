import { graphql, useStaticQuery } from 'gatsby'

const useSpotifyData = () => {
  const { spotifyRecentTracks } = useStaticQuery(graphql`
    query {
      spotifyRecentTracks: allSpotifyRecentTrack(limit: 3) {
        nodes {
          track {
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
        }
      }
    }
  `)

  return spotifyRecentTracks?.nodes || null
}

export default useSpotifyData
