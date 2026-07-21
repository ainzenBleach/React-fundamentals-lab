// 3 - Change context

import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

import React from 'react'

function ChangeCounter() {

    const {Counter, setCounter} = useContext(CounterContext)

    return (
    <div>
        <button onClick={() => setCounter(Counter + 1)}>Add value to counter</button>
    </div>
  )
}

export default ChangeCounter


