import React from 'react'
import Home from '../Home/index'
import Gallery from '../Gallery/index'
import AboutMe from '../AboutMe/index'
import Skills from '../Skills/index'
import Contact from '../Contact/index'
import Header from '../../components/Header/index'
import '../../styles/normalize'

const MainContainer = () => {
  return (
    <>
      {/* <Header /> */}
      <Home />
      <Gallery />
      <AboutMe />
      <Skills />
      <Contact />
    </>
  )
}

export default MainContainer
