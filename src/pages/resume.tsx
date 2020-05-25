import createPersistedState from 'use-persisted-state'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Resume from '../components/Resume'
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
          <Header />
          <Resume />
        </Layout>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default IndexPage
