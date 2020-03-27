import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/*
 * https://noahgilmore.com/blog/easy-gatsby-image-components/
 */

const GalleryImage = props => {
  const { images } = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              sizes(maxWidth: 750) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  `)
  const image = images.edges.find(n => {
    return n.node.relativePath.includes(props.filename)
  })

  const imageSizes = image.node.childImageSharp.sizes

  return (
    <Img
      alt={props.alt}
      sizes={imageSizes ? imageSizes : 0}
      style={props.style}
    />
  )
}
export default GalleryImage
