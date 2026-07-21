// import { useContext } from "react"

// import {CounterContext} from "../context/CounterContext"
import ChangeCounter from "../components/ChangeCounter"

// 4 - refactor with hook
import { useCounterContext } from "../hooks/useCounterContext"

// 5 - context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

function Home() {

  // const {Counter} = useContext(CounterContext)

  const {Counter} = useCounterContext();

  // 5 - context mais complexo
  const {color, dispatch} = useTitleColorContext()

  // 6 - Change complex state
  const setTitleColor = (color) =>{
    dispatch({type:color})
  }

  return (
    <div>
      <h1 style={{color:color}}>Home</h1>
      <p>Valor do contador: {Counter}</p>
      {/* 3 - Change context value */}
      <ChangeCounter />
      {/* 6 - Change complex state */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
      </div>
    </div>
  )
}

export default Home