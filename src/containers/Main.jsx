import React from 'react'
import Home from './Home'
import Gallery from './Gallery'
import AboutMe from './AboutMe'

const MainContainer = ({ data }) => {
  return (
    <>
      <Home
        data={data}
        name="Narin R. Sundarabhaya"
        position="Full Stack Developer"
      />
      <Gallery />
      <AboutMe />
    </>
  )
}

export default MainContainer
