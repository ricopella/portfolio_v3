import { CSSProperties } from 'react'

export interface ContainerProps {
  className?: string
  style?: CSSProperties
}

export interface GalleryProps extends GalleryImageProps {
  description: string
  href: string
  span: string
  title: string
}

export interface GalleryImageProps {
  alt: string
  filename: string
  style?: CSSProperties
}

export interface UseSiteMetaDataReturns {
  author: {
    name: string
    url: string
    email: string
    handle: string
  }
  title: string
}
