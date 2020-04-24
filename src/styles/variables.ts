import { DimensionsType } from '../types'

export const BORDERS = {
  medium: `0 0 0.25rem 0.25rem`,
  large: `0.625rem 0.625rem 0 0`,
}

export const BREAKPOINTS = {
  xs: 0,
  mobileOnly: `25.875rem`,
  sm: 576,
  smRem: `36rem`,
  md: 769, // tablet
  mdRem: `48rem`,
  lg: 992,
  tabletPro: `64rem`,
  xl: 1200,
}

export const COLORS = {
  brand: '#663399',
  darkBackground: `#121212`,
  lighterDarkBackground: `#373737`,
  darkActionColors: `#cac4f5`,
  header: 'rgba(255,255,255, .5)',
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
  homeBanner: `#275573`,
  gray: {
    dark: 'hsla(270, 17.119554496%, 0%, 0.92)',
    copy: 'hsla(270, 15.797828016000002%, 0%, 0.88)',
    calm: 'rgba(0, 0, 0, 0.54)',
    light: '#737272',
  },
  white: '#fff',
  black: '#000',
  limeGreen: '#43b743',
  terminalHeader: '#e4e3e5',
  terminalBackground: '#4c4961',
  terminalActionClose: '#f96256',
  terminalActionMinimize: '#fdbc3d',
  terminalActionExpand: '#2dbb41',
  backgroundColor: '#f6f9fc',
  teal: '#35feff',
  palette: {
    eerieBlack: `#211A1D`,
    hanPurple: `#6320EE`,
    mediumSlateBlue: `#8075FF`,
    magnolia: `#F8F0FB`,
    pastelGray: `#CAD5CA`,
    avalanche: `#a4a599`,
  },
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
  resume: {
    heading: {
      height: `10rem`,
    },
  },
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
  box: `0 3.125rem 6.25rem rgba(50, 50, 93, 0.05),
    0 0.9375rem 2.1875rem rgba(50, 50, 93, 0.1), 0 0.3125rem 0.9375rem rgba(0, 0, 0, 0.1);`,
  header: `rgba(0, 0, 0, 0.1) 0 0.125rem 0.25rem 0`,
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

export const SLIDE_DOWN_ANIMATION_OPTIONS = {
  initial: 'collapsed',
  exit: 'collapsed',
  transition: {
    duration: 0.2,
    ease: [0.04, 0.62, 0.23, 0.98],
  },
  variants: {
    open: {
      opacity: 1,
      height: `100%`,
      display: `grid`,
    },
    collapsed: {
      opacity: 0,
      height: 0,
      display: `none`,
    },
  },
}

export const SLIDE_ELEMENT_DOWN_ANIMATION = {
  initial: 'collapsed',
  exit: 'collapsed',
  variants: {
    collapsed: {
      height: 0,
      opacity: 0,
      transitionEnd: {
        display: 'none',
      },
    },
    visible: {
      opacity: 1,
      height: `100%`,
      display: 'initial',
    },
  },
}

export const BUTTON_ANIMATION = {
  whileHover: {
    scale: 1.1,
  },
  whileTap: {
    scale: 0.95,
  },
}

export const MENU_OPEN_CLOSED_SLIDE_ANIMATION = {
  closed: {
    opacity: 0,
    y: 20,
    // will not occupy space, and fades out when closing
    transitionEnd: {
      display: 'none',
    },
    transition: {
      y: { stiffness: 1000 },
    },
  },
  open: {
    opacity: 1,
    y: 0,
    display: 'grid',
    transition: {
      y: { stiffness: 1000, velocity: -100 },
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
  MOBILE_NAV_BUTTON: 1030 + 1,
  PAGE_CONTENT: 2,
}

export const LIGHT_MODE_THEME = {
  actionBackgroundColor: COLORS.terminalBackground,
  actionColor: COLORS.terminalBackground,
  backgroundColor: COLORS.white,
  backgroundContentColor: COLORS.white,
  color: COLORS.gray.light,
  colorCalm: COLORS.gray.calm,
  imageBorderColor: COLORS.gray.light,
  navBackground: COLORS.palette.magnolia,
  terminalBackground: COLORS.terminalBackground,
  themeToggleBackgroundColor: COLORS.darkBackground,
  themeToggleButtonColor: COLORS.darkActionColors,
  toggleSwitchActiveColor: COLORS.white,
  white: COLORS.white,
}

export const DARK_MODE_THEME = {
  actionBackgroundColor: COLORS.terminalBackground,
  actionColor: COLORS.darkActionColors,
  backgroundColor: COLORS.darkBackground,
  backgroundContentColor: COLORS.lighterDarkBackground,
  color: COLORS.palette.avalanche,
  colorCalm: COLORS.white,
  imageBorderColor: COLORS.lighterDarkBackground,
  navBackground: COLORS.lighterDarkBackground,
  terminalBackground: COLORS.lighterDarkBackground,
  themeToggleBackgroundColor: COLORS.white,
  themeToggleButtonColor: COLORS.terminalBackground,
  toggleSwitchActiveColor: COLORS.lighterDarkBackground,
  white: COLORS.white,
}

export const PIE_SERIES_COLORS = [
  '#204051',
  '#3b6978',
  '#84a9ac',
  '#cae8d5',
  '#d4ded7',
]
