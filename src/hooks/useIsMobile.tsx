import React, { useState, useEffect } from 'react'
import { breakpoints } from '../styles/variables'

const useIsMobile = () => {
  const setStatus = () =>
    typeof window !== 'undefined' && window.innerWidth < breakpoints.md

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