import {useEffect, useState} from 'react'

export default function HookUseEffect() {


    useEffect(()=>{
        console.log("Executando")
    })

    const [Number, setNuimber] = useState(0)

    function changeSomething(){
        setNuimber(Number + 1)
    }

    // 2 - empty dependency array
    useEffect(()=>{
        console.log("Esxecutando apenas 1 vez")
    },[])

    // 3 - item on dependency array

    const [Word, SetWord] = useState("")

    useEffect(()=>{
    console.log("A palavra mudou")
    },[Word])

    // 4 - UseEffect CleanUp

    useEffect(()=>{
        const timer = setTimeout(()=>{

            console.log("Timer executando")

        },2000)

        return () => clearTimeout(timer)

    },[Word])


  return (
    <div>

        <p>Número: {Number}</p>
        <button onClick={changeSomething}>Mudar número</button>
        <p>Palavra: {Word}</p>
        <input type="text" onChange={(e)=> SetWord(e.target.value)}/>
       <hr /> 
    </div>
  )
}
