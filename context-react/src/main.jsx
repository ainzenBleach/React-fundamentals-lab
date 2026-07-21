import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { CounterContextProvider } from './context/CounterContext.jsx'
import { TitleColorContextProvider } from './context/titleColorContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2 - reate provider */}
    <CounterContextProvider>
      <TitleColorContextProvider>
        <App />
      </TitleColorContextProvider>
    </CounterContextProvider>
  </StrictMode>,
)
