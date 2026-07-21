// 1  - create context
import { createContext, useState } from "react";

export const CounterContext = createContext()

// 2 - create provider
export const CounterContextProvider = ({children}) => {
    const [Counter, setCounter] = useState(0)
    return(
        <CounterContext.Provider value={{Counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    )
}


