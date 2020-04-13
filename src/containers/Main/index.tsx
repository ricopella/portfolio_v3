import AboutMe from '../AboutMe'
import Contact from '../Contact'
import Header from '../../components/Header'
import Home from '../Home'
import HorizontalRule from '../../components/HorizontalRule'
import Portfolio from '../Portfolio'
import React from 'react'
import Skills from '../Skills'
import '../../styles/normalize'

const MainContainer = () => {
  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <Skills />
      <Portfolio />
      <HorizontalRule />
      <Contact />
    </>
  )
}

export default MainContainer
