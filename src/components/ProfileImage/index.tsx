import React, { FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/**
 *`Simple Component that shows users Profile Image
 *
 * @returns
 */
const ProfileImage: FC<{}> = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "nrs.jpeg" }) {
        sharp: childImageSharp {
          fixed(width: 200, height: 200, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={image.sharp.fixed} alt="Narin Profile Image" />
}
export default ProfileImage
