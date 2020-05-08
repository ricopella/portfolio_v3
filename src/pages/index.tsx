import Layout from '../components/Layout'
import Main from '../containers/Main'
import React, { useState } from 'react'
import SEO from '../components/SEO'
import ThemeContext from '../providers/ThemeContext'
import { DARK_MODE_THEME, LIGHT_MODE_THEME } from '../styles/variables'
import { ThemeProvider } from 'emotion-theming'
import '../styles/normalize'

const IndexPage = () => {
  const [isThemeDark, setIsThemeDark] = useState<boolean>(true)

  return (
    <ThemeContext.Provider value={{ isThemeDark, setIsThemeDark }}>
      <ThemeProvider theme={isThemeDark ? DARK_MODE_THEME : LIGHT_MODE_THEME}>
        <Layout>
          <SEO />
          <Main />
        </Layout>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default IndexPage
