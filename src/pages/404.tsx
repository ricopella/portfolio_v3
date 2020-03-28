import React from 'react'
import styled from '@emotion/styled'
import { colors, heights } from '../styles/variables'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Header from '../components/Header'

const Styled404 = styled.div`
  height: calc(100vh - ${heights.header}px);
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  align-content: center;
  justify-items: center;
  background-color: ${colors.header};
  grid-row: 2;
`

const NotFoundPage = () => (
  <Layout>
    <Header />
    <SEO title="404: Not found" />
    <Styled404>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist...</p>
    </Styled404>
  </Layout>
)

export default NotFoundPage
