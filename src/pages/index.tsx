import createPersistedState from 'use-persisted-state'
import Layout from '../components/Layout'
import Main from '../containers/Main'
import SEO from '../components/SEO'
import ThemeContext from '../providers/ThemeContext'
import { DARK_MODE_THEME, LIGHT_MODE_THEME } from '../styles/variables'
import { ThemeProvider } from 'emotion-theming'
import '../styles/normalize'
const useThemeState = createPersistedState('theme')

const IndexPage = () => {
  const [isThemeDark, setIsThemeDark] = useThemeState(true)

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
