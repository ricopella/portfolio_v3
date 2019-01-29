import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Main from '../containers/Main'

const IndexPage = () => (
  <Layout>
    <SEO title="nrs." keywords={[`developer`, `full-stack`, `react`]} />
    <Main />
  </Layout>
)

export default IndexPage
