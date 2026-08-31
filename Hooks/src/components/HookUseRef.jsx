import { useEffect, useRef, useState } from 'react'

function HookUseRef() {

    //1 - useRef
    const numberRef = useRef(0)
    const [counter,setcounter] = useState(0)
    const [counterB,setcounterB] = useState(0)

    useEffect(()=>{
        numberRef.current = numberRef.current + 1
        // If use the useState will create a loop with the useEffect instead of useRef
    }
    ,[])

    //2 - useRef and DOM

    const inputRef = useRef("")
    const [text, setText] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        setText("")

        inputRef.current.focus()
    }

  return (
    <div>
        {/* 1 - useRef */}
        <p>o componente rendenizou: {numberRef.current} vezes.</p>
        <p>Counter 1: {counter}</p>
        <button onClick={()=> setcounter(counter + 1)}>Contador A</button>

        <br /><br />

        <p>Counter 2: {counter}</p>
        <button onClick={()=> setcounterB(counterB + 1)}>Contador B</button>
        {/* 2 - useRef and DOM */}
        <br /><br />
        <h2>UseRef and DOM</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" ref={inputRef} value={text} onChange={(e) => setText(e.target.value)}/>
          <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default HookUseRef