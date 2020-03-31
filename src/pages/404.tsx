import React from 'react'
import Layout from '../components/Layout/index'
import SEO from '../components/SEO/index'
import Header from '../components/Header/index'
import Styled from './Pages.styles'

const NotFoundPage = () => (
  <Layout>
    <Header />
    <SEO title="404: Not found" />
    <Styled.Styled404>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist...</p>
    </Styled.Styled404>
  </Layout>
)

export default NotFoundPage
