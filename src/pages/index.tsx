import Layout from '../components/Layout/index'
import Main from '../containers/Main/index'
import React from 'react'
import SEO from '../components/SEO/index'
import { DARK_MODE_THEME, LIGHT_MODE_THEME } from '../styles/variables'
import { ThemeProvider } from 'emotion-theming'

const IndexPage = () => (
  <ThemeProvider theme={DARK_MODE_THEME}>
    <Layout>
      <SEO />
      <Main />
    </Layout>
  </ThemeProvider>
)

export default IndexPage
