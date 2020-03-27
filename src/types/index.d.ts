import { CSSProperties } from 'react'

export interface ContainerProps {
  className?: string
  style?: CSSProperties
}

export interface GalleryProps {
  alt: string
  description: string
  filename: string
  href: string
  span: string
  style?: CSSProperties
  title: string
}
