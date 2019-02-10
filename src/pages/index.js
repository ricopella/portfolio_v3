import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Main from '../containers/Main'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Welcome"
      keywords={[`web developer`, `full-stack`, `react`, `Los Angeles`]}
    />
    <Main />
  </Layout>
)

export default IndexPage
