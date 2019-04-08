import React, { Suspense } from 'react'
import Home from './Home'
const Gallery = React.lazy(() => import('./Gallery'))
const AboutMe = React.lazy(() => import('./AboutMe'))
const Skills = React.lazy(() => import('./Skills'))
const Contact = React.lazy(() => import('./Contact'))

const MainContainer = ({ data }) => {
  return (
    <>
      <Home
        data={data}
        name="Narin R. Sundarabhaya"
        position="Full Stack Developer"
      />
      <Suspense fallback={<div>Loading...</div>}>
        <Gallery />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <AboutMe />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Skills />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Contact />
      </Suspense>
    </>
  )
}

export default MainContainer
