import { createContext } from 'react'

export const HookUseContext = createContext()

export function HookUseContextProvider({ children }) {
  const contextValue = {
    nome: 'Context React'
  }

  return (
    <HookUseContext.Provider value={contextValue}>
      {children}
    </HookUseContext.Provider>
  )
}