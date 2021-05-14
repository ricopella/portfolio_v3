import { css, Global } from '@emotion/react'
import { ThemeProvider } from 'emotion-theming'
import createPersistedState from 'use-persisted-state'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Main from '../containers/Main'
import ThemeContext from '../providers/ThemeContext'
import '../styles/normalize'
import { DARK_MODE_THEME, LIGHT_MODE_THEME } from '../styles/variables'

const useThemeState = createPersistedState('theme')

const IndexPage = () => {
  const [isThemeDark, setIsThemeDark] = useThemeState(true)

  return (
    <ThemeContext.Provider value={{ isThemeDark, setIsThemeDark }}>
      <ThemeProvider theme={isThemeDark ? DARK_MODE_THEME : LIGHT_MODE_THEME}>
        <Global
          styles={css`
            body {
              background: ${isThemeDark
                ? DARK_MODE_THEME.backgroundColor
                : LIGHT_MODE_THEME.backgroundColor};
            }
          `}
        />
        <Layout>
          <SEO />
          <Main />
        </Layout>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default IndexPage
