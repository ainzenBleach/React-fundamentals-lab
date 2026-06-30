import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import Products from "./pages/Products"
import About from "./pages/about"
import NavBar from "./components/NavBar"

function App() {

  return (
    <>
      <h1>Context</h1>
      <BrowserRouter>
      <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
