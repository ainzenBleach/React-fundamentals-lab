import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter"

function Products() {

  const {Counter} = useContext(CounterContext)

  return (
    <div><h1>Products</h1>
      <p>Valor do contador: {Counter}</p>
      {/* 3 - Change context value */}
    <ChangeCounter />
    </div>
  )
}

export default Products