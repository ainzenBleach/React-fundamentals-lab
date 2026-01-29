//hooks
import { useParams, Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

//Style
import './Product.css'

const Product = () => {
    //4 - dynamic Routes
    const { id } = useParams()

    //5 - loading individual data
    const url = "http://localhost:3000/products/" + id

    const {data: item, loading, error} = useFetch(url)

    console.log(item)

  return (
    <div>
        <p>item id: {id}</p>
        {error && <p>{error}</p>}
        {loading && <p>Loading...</p>}
        {item && (
          <div key={item.key}> 
            <h1>{item.name}</h1>
            <p>{item.price} | {item.color}</p>
            {/* 6 - nested router */}
            <Link to={`/products/${item.id}/info`}>More information</Link>
          </div>
        )}
    </div>
  )
}

export default Product