import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

// Background image
const Image = ({ style }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "nrs_background.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img style={style} fluid={data.placeholderImage.childImageSharp.fluid} />
    )}
  />
)
export default Image
