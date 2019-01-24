import './layout.css'

import styled from '@emotion/styled'
import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import { colors, heights } from '../styles/variables'
import Header from './header'

const RootContainer = styled('div')`
  display: grid;
  grid-template-rows: ${heights.header}px max-content ${heights.footer}px;
  grid-template-columns: 1fr;
`

const MainBodyContainer = styled('div')`
  display: grid;
  height: calc(100vh - ${heights.header}px - ${heights.footer}px);
  width: 100vw;
  margin: 0 auto;
  padding: 0px 1.0875rem 1.45rem;
  grid-row: 2;
`

const FooterContainer = styled('footer')`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-column-gap: 10px;
  align-items: center;
  justify-content: center;
  grid-row: 3 / -1;
  background-color: ${colors.header};
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <RootContainer>
        <Header siteTitle={data.site.siteMetadata.title} />
        <MainBodyContainer>{children}</MainBodyContainer>
        <FooterContainer>
          © {new Date().getFullYear()}, <span>Narin R. Sundarabhaya</span>
        </FooterContainer>
      </RootContainer>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
