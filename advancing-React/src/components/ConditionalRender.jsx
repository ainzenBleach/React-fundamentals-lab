import { useState } from "react"

const ConditionalRender = () => {

const [x] = useState(false)

const [name, setName] = useState("Vic")

  return (
    <div>
        <h2>Will this be displayed?</h2>
        {x && <p>If X is true, yes</p>}
        {!x && <p>If X is false, no</p>}
        {name === "John" ? <p>This name is John</p> : <p>This name is not John</p>}

        <button onClick={() => name === "Vic" ? setName("John") : setName("Vic")}>Change name</button>
    </div>


  )
}

export default ConditionalRender