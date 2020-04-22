import Img from 'gatsby-image'
import React, { FC } from 'react'
import { GalleryImageProps, PureGalleryImageProps } from '../../types'
import { graphql, useStaticQuery } from 'gatsby'

export const PureGalleryImage: FC<PureGalleryImageProps> = ({
  imageSizes = undefined,
  css,
  alt,
  style = {},
}) => <Img css={css} alt={alt} sizes={imageSizes} style={style} />

/*
 * https://noahgilmore.com/blog/easy-gatsby-image-components/
 */
const GalleryImage: FC<GalleryImageProps> = ({ filename, ...rest }) => {
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

  return <PureGalleryImage {...rest} imageSizes={imageSizes} />
}
export default GalleryImage
