import { CSSProperties } from 'react'
import { FluidObject } from 'gatsby-image'
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
  github: interfaceGithubItem | null
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

export interface PureGalleryImageProps {
  alt: string
  css?: SerializedStyles
  style?: CSSProperties
  imageSizes: FluidObject
}

export interface PageProps {
  className?: string
  id: string
  style?: CSSProperties
  title: string
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
  css?: SerializedStyles
  title: string
}

export interface TagItemProps {
  title: string
}

export interface LaunchArrowProps {
  href: string
}

export interface MenuItemProps {
  item: string
}

export interface SpotifyTopItem extends UseSpotifyData {
  playedAt?: string
}

// GRAPHQL QUERIES

export interface UseSiteMetaDataReturns {
  author: AuthorMetaData
  contactItems: ContactItem[]
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

export interface AuthorMetaData {
  name: string
  url: string
  email: string
  handle: string
}

export interface UseSpotifyData {
  track: {
    name: string
    preview_url: string
    external_urls: {
      spotify: string
    }
    artists: {
      name: string
    }[]
    href: string
    image: {
      localFile: {
        childImageSharp: {
          fluid: {
            base64: string
            aspectRatio: number
            src: string
            srcSet: string
            srcWebp: string
            srcSetWebp: string
            sizes: string
          }
        }
      }
    }
  }
  played_at?: string
}

export interface GatsbyImageSharpSizes {
  based64: string
  originalImg: string
  originalName: string
  presentationHeight: number
  presentationWidth: number
  srcWebp: string
  tracedSVG: string
}

export interface ContactItem {
  href: string
  title: string
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
  githubId?: string
  github?: interfaceGithubItem | null
  myTitle?: string
  tech?: string[]
  title: string
  year?: string
}

export interface SEOProps {
  title?: string
}

export interface GithubDonutItem {
  name: string
  y: number
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
  resume: {
    heading: {
      height: string
    }
  }
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

export interface UseGithubRepoItem {
  node: interfaceGithubItem
}

export interface interfaceGithubItem {
  createdAt: string
  id: string
  languages: GithubLanguageItem
  name: string
  updatedAt: string
  url: string
}

export interface GithubLanguageItem {
  totalCount: number
  totalSize: number
  edges: {
    size: number
    node: {
      name: string
      id: string
    }
  }[]
}

export interface ThemeTypes {
  theme: {
    actionBackgroundColor: string
    actionColor: string
    backgroundColor: string
    backgroundContentColor: string
    color: string
    colorCalm: string
    imageBorderColor: string
    navBackground: string
    terminalBackground: string
    themeToggleBackgroundColor: string
    themeToggleButtonColor: string
    toggleSwitchActiveColor: string
  }
}
