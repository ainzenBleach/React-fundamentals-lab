//Components
import NavBar from './components/NavBar'

//Custom
import './App.css'

//Config router
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Pages
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product_temp'

function App() {

  return (
    <>
      <div>
        <h1>React Router</h1>
        <BrowserRouter>
          {/* 2 - links with react router */}
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            {/* 4 - dynamic routes */}
            <Route path='/products/:id' element={<Product />} />
          </Routes>
        </BrowserRouter>
        </div>
    </>
  )
}

export default App
