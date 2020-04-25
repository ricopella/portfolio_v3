import Header from '../components/Header'
import Layout from '../components/Layout'
import React, { useState } from 'react'
import Resume from '../components/Resume'
import SEO from '../components/SEO'
import ThemeContext from '../providers/ThemeContext'
import { DARK_MODE_THEME, LIGHT_MODE_THEME } from '../styles/variables'
import { ThemeProvider } from 'emotion-theming'

const IndexPage = () => {
  const [isThemeDark, setIsThemeDark] = useState<boolean>(true)

  return (
    <ThemeContext.Provider value={{ isThemeDark, setIsThemeDark }}>
      <ThemeProvider theme={isThemeDark ? DARK_MODE_THEME : LIGHT_MODE_THEME}>
        <Layout>
          <SEO />
          <Header />
          <Resume />
        </Layout>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default IndexPage
