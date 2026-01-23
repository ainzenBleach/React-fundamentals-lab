import { useEffect, useState } from 'react'
import './App.css'

function App() {
const url = "http://localhost:3000/products"

const [products, setproducts] = useState([]);

 // 1 - Request data
 useEffect(() => {

  async function fetchData() {
    const res = await fetch(url)
    const data = await res.json()
    setproducts(data)
  }

  fetchData();

 }, [])

  return (
    <div className='App'>
      <h1>products list</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}> {product.name} | ${product.price}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
