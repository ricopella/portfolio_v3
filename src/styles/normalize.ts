import { injectGlobal } from 'emotion'
import {
  BREAKPOINTS,
  COLORS,
  DIMENSIONS,
  FONT_WIDTHS,
  FONTS,
} from './variables'
import { getEmSize } from './mixins'

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    font-size: 16px !important;
    line-height: 24px !important;
  }

  body {
    margin: 0 auto;
    width: 100vw;
    overflow-x: hidden;
    overflow-y: scroll;
    font-family: ${FONTS.sansSerif};
    color: ${COLORS.black};
    background-color: ${COLORS.white};
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  a {
    color: ${COLORS.brand};
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
    object-fit: contain;
    position: relative;
  }

  figure {
    margin: 2rem 0;
  }

  figcaption {
    font-size: 80%;
  }

  table {
    width: 100%;
    margin-bottom: 1rem;
    border: 0.0625rem solid ${COLORS.ui.light};
    font-size: 85%;
    border-collapse: collapse;
  }

  td,
  th {
    padding: .25rem .5rem;
    border: 0.0625rem solid ${COLORS.ui.light};
  }

  th {
    text-align: left;
  }

  tbody {
    tr {
      &:nth-of-type(odd) {
        td {
          background-color: ${COLORS.ui.whisper};
        }
        tr {
          background-color: ${COLORS.ui.whisper};
        }
      }
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 1.414rem;
    margin-bottom: .5rem;
    color: ${COLORS.black};
    font-weight: ${FONT_WIDTHS.SEMI_BOLD};
    line-height: ${DIMENSIONS.lineHeight.heading};
    text-rendering: optimizeLegibility;
  }

  h1 {
    margin-top: 0;
    font-size: ${DIMENSIONS.headingSizes.h1}rem;
  }

  h2 {
    font-size: ${DIMENSIONS.headingSizes.h2}rem;
  }

  h3 {
    font-size: ${DIMENSIONS.headingSizes.h3}rem;
  }

  h4, h5, h6 {
    font-size: ${DIMENSIONS.headingSizes.h4}rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  strong {
    color: ${COLORS.black};
  }

  ul,
  ol,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  dt {
    font-weight: bold;
  }

  dd {
    margin-bottom: .5rem;
  }

  hr {
    position: relative;
    margin: 1.5rem 0;
    border: 0;
    border-top: 0.0625rem solid ${COLORS.ui.light};
  }

  blockquote {
    margin: .8rem 0;
    padding: .5rem 1rem;
    border-left: .25rem solid ${COLORS.ui.light};
    color: ${COLORS.gray.calm};

    p {
      &:last-child {
        margin-bottom: 0;
      }
    }

    @media (min-width: ${getEmSize(BREAKPOINTS.md)}em) {
      padding-right: 5rem;
      padding-left: 1.25rem;
    }
  }
`
