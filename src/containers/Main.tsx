import React from 'react'
import Home from './Home'
import Gallery from './Gallery'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Contact from './Contact'
import Header from '../components/Header'

const MainContainer = () => {
  return (
    <>
      <Header />
      <Home />
      <Gallery />
      <AboutMe />
      <Skills />
      <Contact />
    </>
  )
}

export default MainContainer
