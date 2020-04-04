import { CSSProperties } from 'react'

export type AboutMeViews = 'bio' | 'terminal'
export type AboutMeViewsArr = ['bio', 'terminal']
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

export interface ToggleSwitchProps<T> {
  currentView: T
  setView: (view: T) => void
  views: T[]
}

export interface ProgressBarProps {
  percent: number
  title: string
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
  headerItems: string[]
  portfolioItems: PortfolioItem[]
  terminalCommands: TerminalCommand[]
  skills: Skills[]
  title: string
  titleTemplate: string
}

export interface Skills {
  title: string
  skills: { title: string; percent: number }[]
}

export interface PortfolioItem {
  alt: string
  description: string
  fileName: string
  href: string
  title: string
  span?: string
}

export interface SEOProps {
  title?: string
}

export interface DimensionsType {
  fontSize: {
    regular: number
    large: number
  }
  headingSizes: {
    [h: string]: number
  }
  lineHeight: {
    [lH: string]: number
  }
  containerPadding: string | number
}

export interface TerminalCommand {
  answer: string
  href?: string
  question: string
}
