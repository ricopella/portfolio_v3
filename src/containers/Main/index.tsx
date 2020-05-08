import AboutMe from '../AboutMe'
import Contact from '../Contact'
import Header from '../../components/Header'
import Home from '../Home'
import Portfolio from '../Portfolio'
import React from 'react'
import Skills from '../Skills'

const MainContainer = () => {
  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  )
}

export default MainContainer
