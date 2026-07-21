
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

//Style
import './App.css'

// Pages
import Home from './pages/Home'
import UseState from './pages/useState'

function App() {

  return (
    <div>
      <h1>
        React Hooks
      </h1>
    <BrowserRouter>

        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/useState'>UseState</Link>
          </li>
        </ul>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/useState' element={<UseState />}/>
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
