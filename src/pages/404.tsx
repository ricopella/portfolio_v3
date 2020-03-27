import React from 'react'
import styled from '@emotion/styled'
import { colors, heights } from '../styles/variables'

import Layout from '../components/Layout'
import SEO from '../components/seo'

const Styled404 = styled.div`
  height: calc(100vh - ${heights.header}px - ${heights.footer}px);
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  align-content: center;
  justify-items: center;
  background-color: ${colors.header};
  grid-row: 2;
  margin-top: -8px;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Styled404>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist...</p>
    </Styled404>
  </Layout>
)

export default NotFoundPage
