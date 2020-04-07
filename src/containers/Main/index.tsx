import AboutMe from '../AboutMe'
import Contact from '../Contact'
import Experience from '../Experience'
import Header from '../../components/Header'
import Home from '../Home'
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
      <Experience />
      <Contact />
    </>
  )
}

export default MainContainer
