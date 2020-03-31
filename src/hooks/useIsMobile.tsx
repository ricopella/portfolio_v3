import React, { useState, useEffect } from 'react'
import { BREAKPOINTS } from '../styles/variables'

const useIsMobile = () => {
  const setStatus = () =>
    typeof window !== 'undefined' && window.innerWidth < BREAKPOINTS.md

  const [isMobile, setIsMobile] = useState(setStatus())
  const updatedState = () => setIsMobile(setStatus())

  useEffect(() => {
    window.addEventListener('resize', () => updatedState())

    return () => {
      window.removeEventListener('resize', () => updatedState())
    }
  })

  return isMobile
}

export default useIsMobile
