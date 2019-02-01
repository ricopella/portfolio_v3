import React from 'react'
import Home from './Home'
import Gallery from './Gallery'

const MainContainer = ({ data }) => {
  return (
    <>
      <Home
        data={data}
        name="Narin R. Sundarabhaya"
        position="Full Stack Developer"
      />
      <Gallery />
    </>
  )
}

export default MainContainer
