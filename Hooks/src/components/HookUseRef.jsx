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

  return (
    <div>
        <p>o componente rendenizou: {numberRef.current} vezes.</p>
        <p>Counter 1: {counter}</p>
        <button onClick={()=> setcounter(counter + 1)}>Contador A</button>

        <br /><br />

        <p>Counter 2: {counter}</p>
        <button onClick={()=> setcounterB(counterB + 1)}>Contador B</button>
        
    </div>
  )
}

export default HookUseRef