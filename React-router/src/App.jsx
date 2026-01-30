//Components
import NavBar from './components/NavBar'
import SearchForm from './components/SearchForm'
import Search from './components/Search'

//Custom
import './App.css'

//Config router
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

//Pages
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product_temp'
import Info from './pages/info'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <div>
        <h1>React Router</h1>
        <BrowserRouter>
          {/* 2 - links with react router */}
          <NavBar />
          <SearchForm />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            {/* 4 - dynamic routes */}
            <Route path='/products/:id' element={<Product />} />
            {/* 6 - nested routes */}
            <Route path='/products/:id/info' element={<Info />} />
            {/* 9 - Search */}
            <Route path="/search" element={<Search />}/>
            {/* 10 - redirect */}
            <Route path='/company' element={<Navigate to="/about" />} />
            {/* 7 - error 404 */}
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </BrowserRouter>
        </div>
    </>
  )
}

export default App
