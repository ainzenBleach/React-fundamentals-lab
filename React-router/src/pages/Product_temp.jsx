//hooks
import { useParams } from 'react-router-dom'

//Style
import './Product.css'

const Product = () => {
    //4 - dynamic Routes
    const { id } = useParams()
  return (
    <div>
        <p>Product id: {id}</p>
    </div>
  )
}

export default Product