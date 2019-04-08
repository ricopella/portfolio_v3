import '../styles/normalize'
import get from 'lodash/get'
import styled from '@emotion/styled'
import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { colors } from '../styles/variables'

const RootContainer = styled('div')`
  display: grid;
  grid-template-rows: repeat(2, max-content);
  grid-template-columns: 1fr;
`

const MainBodyContainer = styled('div')`
  display: grid;
  width: 100vw;
  margin: 0 auto;
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
            author {
              name
              url
              email
              handle
            }
          }
        }
      }
    `}
    render={data => (
      <RootContainer>
        <MainBodyContainer>{children}</MainBodyContainer>
        <FooterContainer>
          © {new Date().getFullYear()},{' '}
          <span>
            {get(data, ['site', 'siteMetadata', 'author', 'name'], '')}
          </span>
        </FooterContainer>
      </RootContainer>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
