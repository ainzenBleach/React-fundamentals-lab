import { useParams } from "react-router-dom"

useParams

const Info = () => {
    const {id} = useParams();
  return (
    <div>
        <h1>More information abour the product: {id}</h1>
    </div>
  )
}

export default Info