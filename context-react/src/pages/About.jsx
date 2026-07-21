import { useContext } from "react"

import {CounterContext} from "../context/CounterContext"
import ChangeCounter from "../components/ChangeCounter"



function about() {

  const {Counter} = useContext(CounterContext)

  return (
    <div>
      <h1>About</h1>
      <p>Valor do contador: {Counter}</p>
      {/* 3 - Change context value */}
      <ChangeCounter />
    </div>
  )
}

export default about