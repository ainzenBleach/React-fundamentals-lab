import { useState } from "react";

import React from 'react'

export default function HookUseState() {
    // 1 - useState
    let userName = "João"

    const [Name, setName] = useState("Mathues")

    function changeNames(){
       userName = "Joao marcos"
       
       setName("Matheus Marques")
    }

    // 2 - UseState e input
    const [Age, setAge] = useState(18)

    function handleSumbmit(e){
        e.preventDefault()

        //envio a uma API
        console.log(Age)
    }

  return (
    <div>
        {/* 1 - Usestate */}
        <p>Variavel: {userName}</p>
        <p>UseState: {Name}</p>
        <button onClick={changeNames}>Mudar nomes</button>

        {/* 2 - useState e input */}
        <p>digite sua idade</p>
        <form onSubmit={handleSumbmit}>
            <input type="number" value={Age} onChange={(e) => setAge(e.target.value)}/>
            <input type="submit" value="Enviar" />
        </form>
        <p>Você tem {Age} anos!</p>
        <hr />
    </div>
  )
}



