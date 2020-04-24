import React, { CSSProperties, FC } from 'react'
import Styled from './ProfileImage.styles'
import { graphql, useStaticQuery } from 'gatsby'
import { SerializedStyles } from '@emotion/core'

/**
 *`Simple Component that shows users Profile Image
 *
 */
const ProfileImage: FC<{
  outerStyle?: SerializedStyles
  innerStyle?: SerializedStyles
}> = ({ outerStyle, innerStyle }) => {
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
    <Styled.ProfileImageOuterBorder css={outerStyle}>
      <Styled.ProfileImage
        fixed={desktopImage.sharp.fixed}
        alt="Profile Image"
        css={innerStyle}
      />
    </Styled.ProfileImageOuterBorder>
  )
}
export default ProfileImage
