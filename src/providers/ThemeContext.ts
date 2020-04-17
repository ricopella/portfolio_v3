import React, { createContext, Dispatch, SetStateAction } from 'react'

type ContextProps = {
  isThemeDark: boolean
  setIsThemeDark: Dispatch<SetStateAction<boolean>>
}

const ThemeContext = createContext<Partial<ContextProps>>({})

export default ThemeContext
