import AboutMe from '../AboutMe/index'
import Contact from '../Contact/index'
import Gallery from '../Gallery/index'
import Header from '../../components/Header/index'
import Home from '../Home/index'
import React from 'react'
import Skills from '../Skills/index'
import '../../styles/normalize'

const MainContainer = () => {
  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <Skills />
      <Gallery />
      <Contact />
    </>
  )
}

export default MainContainer
