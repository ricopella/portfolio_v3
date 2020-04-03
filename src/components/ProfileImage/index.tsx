import React, { FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Styled from './ProfileImage.styles'
import useIsMobile from '../../hooks/useIsMobile'

/**
 *`Simple Component that shows users Profile Image
 *
 * @returns
 */
const ProfileImage: FC<{}> = () => {
  const isMobile = useIsMobile()
  const { desktopImage, mobileImage } = useStaticQuery(graphql`
    query {
      desktopImage: file(relativePath: { eq: "nrs.jpeg" }) {
        sharp: childImageSharp {
          fixed(width: 200, height: 200, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mobileImage: file(relativePath: { eq: "nrs.jpeg" }) {
        sharp: childImageSharp {
          fixed(width: 150, height: 150, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Styled.ProfileImageOuterBorder>
      <Styled.ProfileImage
        fixed={isMobile ? mobileImage.sharp.fixed : desktopImage.sharp.fixed}
        alt="Profile Image"
      />
    </Styled.ProfileImageOuterBorder>
  )
}
export default ProfileImage
