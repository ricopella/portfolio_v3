import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Main from '../containers/Main'
import { colors } from '../styles/variables'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Welcome"
      keywords={[`web developer`, `full-stack`, `react`, `Los Angeles`]}
    />
    <Main style={{ backgroundColor: colors.backgroundColor }} />
  </Layout>
)

export default IndexPage
