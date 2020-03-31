import React, { FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { GalleryImageProps } from '../../types'

/*
 * https://noahgilmore.com/blog/easy-gatsby-image-components/
 */
const GalleryImage: FC<GalleryImageProps> = ({ alt, filename, style = {} }) => {
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
    return n.node.relativePath.includes(filename)
  })

  const imageSizes = image.node.childImageSharp.sizes

  return <Img alt={alt} sizes={imageSizes ? imageSizes : 0} style={style} />
}
export default GalleryImage
