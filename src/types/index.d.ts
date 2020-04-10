import { CSSProperties } from 'react'
import { SerializedStyles } from '@emotion/core'

export type AboutMeViews = 'bio' | 'terminal'
export type AboutMeViewsArr = ['bio', 'terminal']
export interface ContainerProps {
  className?: string
  style?: CSSProperties
}

export interface GalleryProps extends GalleryImageProps {
  description: string
  href: string
  myTitle?: string
  tech: string[]
  title: string
  year: string
}

export interface GalleryImageProps {
  alt: string
  filename: string
  css?: SerializedStyles
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

export interface ToggleTabsProps {
  items: string[]
  selectedItem: string
  setSelectedItem: (item: string) => void
}

export interface PageHeadingProps {
  title: string
}

export interface TagItemProps {
  title: string
}

export interface LaunchArrowProps {
  href: string
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
  portfolioItems: Portfolio[]
  terminalCommands: TerminalCommand[]
  skills: Skills[]
  title: string
  titleTemplate: string
}

export interface SubSkills {
  title: string
  percent: number
}

export interface Skills {
  title: string
  items: SubSkills[]
}

export interface Portfolio {
  title: string
  items: PortfolioItem[]
}

export interface PortfolioItem {
  alt: string
  description: string
  fileName: string
  href: string
  myTitle?: string
  tech?: string[]
  title: string
  year?: string
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

export interface UsePortfolioItems {
  selectedToggleItem: string
  selectedView: string
  setSelectedToggleItem: (item: string) => void
  setSelectedView: (item: string) => void
  shownItem: PortfolioItem | null
  views: string[]
}
