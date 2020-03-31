import { DimensionsType } from '../types'

export const BORDERS = {
  medium: `0 0 0.25rem 0.25rem`,
  large: `0.625rem 0.625rem 0 0`,
}

export const BREAKPOINTS = {
  xs: 0,
  sm: 576,
  md: 768, // tablet
  lg: 992,
  xl: 1200,
}

export const COLORS = {
  brand: '#663399',
  header: '#f8f8f8',
  lilac: '#9d7cbf',
  accent: '#ffb238',
  success: '#37b635',
  warning: '#ec1818',
  ui: {
    bright: '#e0d6eb',
    light: '#f5f3f7',
    whisper: '#fbfafc',
  },
  code: '#fcf6f0',
  gray: {
    dark: 'hsla(270, 17.119554496%, 0%, 0.92)',
    copy: 'hsla(270, 15.797828016000002%, 0%, 0.88)',
    calm: 'rgba(0, 0, 0, 0.54)',
    light: '#777',
  },
  white: '#fff',
  black: '#000',
  limeGreen: '#43b743',
  terminalHeader: '#e4e3e5',
  terminalBackground: '#666385',
  terminalActionClose: '#f96256',
  terminalActionMinimize: '#fdbc3d',
  terminalActionExpand: '#2dbb41',
  backgroundColor: '#f6f9fc',
  teal: '#35feff',
}

export const DIMENSIONS: DimensionsType = {
  fontSize: {
    regular: 16,
    large: 18,
  },
  headingSizes: {
    h1: 2.441,
    h2: 1.953,
    h3: 1.563,
    h4: 1.25,
  },
  lineHeight: {
    regular: 1.45,
    heading: 1.2,
  },
  containerPadding: 1.5,
}

export const FONTS = {
  sansSerif:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',
  serif: 'Georgia, "Times New Roman", Times, serif',
  monospace:
    'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace',
}

export const FONT_WIDTHS = {
  SEMI_BOLD: 600,
}

export const HEIGHTS = {
  CONTACT: 300,
  FOOTER: 60,
  HEADER: `5rem`,
  MOBILE_MENU: `21.875rem`,
}

export const SHADOWS = {
  box: `0 50px 100px rgba(50, 50, 93, 0.05),
    0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.1);`,
}

export const SLIDE_IN_ANIMATION_OPTIONS = {
  animate: 'visible',
  exit: 'exit',
  initial: 'hidden',
  variants: {
    exit: {
      opacity: 0,
      y: 20,
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },
}

export const WIDTHS = {
  md: 720,
  lg: `60rem`,
  xl: 1140,
}
export const Z_INDEX = {
  HEADER: 1030,
  MOBILE_NAV_BUTTON: 100,
}
