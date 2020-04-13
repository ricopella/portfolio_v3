import React, { FC } from 'react'
import Styled from './ProfileImage.styles'
import { graphql, useStaticQuery } from 'gatsby'

/**
 *`Simple Component that shows users Profile Image
 *
 */
const ProfileImage: FC<{}> = () => {
  const { desktopImage } = useStaticQuery(graphql`
    query {
      desktopImage: file(relativePath: { eq: "nrs.jpeg" }) {
        sharp: childImageSharp {
          fixed(width: 200, height: 200, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Styled.ProfileImageOuterBorder>
      <Styled.ProfileImage
        fixed={desktopImage.sharp.fixed}
        alt="Profile Image"
      />
    </Styled.ProfileImageOuterBorder>
  )
}
export default ProfileImage
