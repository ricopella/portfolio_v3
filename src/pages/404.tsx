import createPersistedState from 'use-persisted-state'
import Header from '../components/Header'
import Layout from '../components/Layout/index'
import React from 'react'
import SEO from '../components/SEO/index'
import styled from '../styled'
import ThemeContext from '../providers/ThemeContext'
import { DARK_MODE_THEME, LIGHT_MODE_THEME } from '../styles/variables'
import { Link } from 'gatsby'
import { ThemeProvider } from 'emotion-theming'

const useThemeState = createPersistedState('theme')

const PageContainer = styled.div`
  display: grid;
  align-content: center;
  background-color: ${props => props.theme.backgroundColor};
  grid-row: 2;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  height: calc(100vh - 2rem);
  justify-items: center;
  width: 100vw;
`

const H1 = styled.h1`
  color: ${props => props.theme.color};
`

const P = styled.p`
  color: ${props => props.theme.color};
`

const A = styled(Link)`
  color: ${props => props.theme.color};
`

const NotFoundPage = () => {
  const [isThemeDark, setIsThemeDark] = useThemeState(true)

  return (
    <ThemeContext.Provider value={{ isThemeDark, setIsThemeDark }}>
      <ThemeProvider theme={isThemeDark ? DARK_MODE_THEME : LIGHT_MODE_THEME}>
        <SEO title="404: Not found" />
        <Layout>
          <Header />
          <PageContainer>
            <H1>{`< NOT FOUND />`}</H1>
            <P>You just hit a route that doesn&#39;t exist...</P>
            <A to="/">Lets get you back on track</A>
          </PageContainer>
        </Layout>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default NotFoundPage
