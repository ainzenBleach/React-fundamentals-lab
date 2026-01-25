import { useEffect, useState } from 'react'
import './App.css'
//Custom hooks
import { useFetch } from './hooks/useFetch';

// 5 - Refact hooks

function App() {
const url = "http://localhost:3000/products"

// 4 - custom hooks

const {data: items, httpConfig, loading, error} = useFetch(url)

// const [products, setproducts] = useState([]);




const [name, setname] = useState("")
const [price, setprice] = useState("")

 // 1 - Request data
//  useEffect(() => {

//   async function fetchData() {
//     const res = await fetch(url)
//     const data = await res.json()
//     setproducts(data)
//   }

//   fetchData();

//  }, [])

 // 2 - add products
const handleSubmit = async (e) => {
  e.preventDefault()

  
  const product = {

    name,
    price
  
};
  
  console.log(product)

//   const res = await fetch(url, {
//     method: "POST",
//     headers:{
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(product)
//   })

// // dynamic loading

// const addedProduct = await res.json()

// setproducts((prevProducts) => [...prevProducts, addedProduct])

// 5 - Refact Resquest

httpConfig(product, "POST")

setname("")
setprice("")

}

//8 Challenge
const handleRemove = (id) => {
    httpConfig(id, "DELETE")
}


  return (
    <div className='App'>
      <h1>products list</h1>
      {/* 6 - loading*/}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      <ul>
        {items && items.map((product) => (
          <li key={product.id}> {product.name} | ${product.price}
          <button onClick={() => {handleRemove(product.id)}}>Remove item</button>
          </li>
        ))}
      </ul>

        <div className="add-products">
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input type="text" value={name} name="name" onChange={(e) => setname(e.target.value)}/>
              </label>
              <label>
                Price:
                <input type="number" value={price} name="price" onChange={(e) => setprice(e.target.value)}/>
              </label>
              {/* Loading in POST */}
              <div>
                {loading && <input type="submit" disabled value={"Wait"}/>}
                {!loading && <input type="submit" value={"submit"}/>}
              </div>
            </form>
        </div>

    </div>
  )
}

export default App
