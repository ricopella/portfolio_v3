import React from 'react'
import Layout from '../components/Layout/index'
import SEO from '../components/SEO/index'
import Styled from './Pages.styles'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Styled.Styled404>
      <h1>{`< NOT FOUND />`}</h1>
      <p>You just hit a route that doesn&#39;t exist...</p>
      <Link to="/">Lets get you back on track</Link>
    </Styled.Styled404>
  </Layout>
)

export default NotFoundPage
