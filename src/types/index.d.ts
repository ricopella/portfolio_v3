import { CSSProperties } from 'react'

export interface ContainerProps {
  className?: string
  style?: CSSProperties
}

export interface GalleryProps extends GalleryImageProps {
  description: string
  href: string
  span?: string
  title: string
}

export interface GalleryImageProps {
  alt: string
  filename: string
  style?: CSSProperties
}

export interface PageProps {
  className?: string
  id: string
  style?: CSSProperties
}

export interface TerminalCommandProps {
  answer?: string
  href?: string
  question?: string
}

// GRAPHQL QUERIES

export interface UseSiteMetaDataReturns {
  author: {
    name: string
    url: string
    email: string
    handle: string
  }
  description?: string
  lang?: string
  meta?: []
  keywords?: string[]
  title: string
  titleTemplate: string
}

export interface SEOProps {
  title?: string
}
