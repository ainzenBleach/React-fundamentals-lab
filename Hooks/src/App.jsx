import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// Style
import './App.css'

// Pages
import Home from './pages/Home'
import UseStatePage from './pages/UseState'
import UseReducerPage from './pages/UseReducer'
import UseEffectPage from './pages/UseEffect'
import UseContextPage from './pages/UseContext'
import UseRefPage from './pages/UseRef'

// Context
import { HookUseContextProvider } from './components/HookUseContext'

function App() {
  return (
    <HookUseContextProvider>
      <div className='app'>
        <h1>React Hooks</h1>

        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/useState'>UseState</Link>
              </li>
              <li>
                <Link to='/useReducer'>UseReducer</Link>
              </li>
              <li>
                <Link to='/useEffect'>UseEffect</Link>
              </li>
              <li>
                <Link to='/useContext'>useContext</Link>
              </li>
              <li>
                <Link to='/useRef'>useRef</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/useState' element={<UseStatePage />} />
            <Route path='/useReducer' element={<UseReducerPage />} />
            <Route path='/useEffect' element={<UseEffectPage />} />
            <Route path='/useContext' element={<UseContextPage />} />
            <Route path='/useRef' element={<UseRefPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </HookUseContextProvider>
  )
}

export default App