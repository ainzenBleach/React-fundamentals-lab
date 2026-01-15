import { useState } from "react";
import "./app.css";
import MyComponents from "./components/MyComponents";
import Title from "./components/Title";
const App = () => {
  const n = 15;

  const name = useState("Matheus")

  const redTitle = false;
  return (
    <div>
        {/* GLobal CSS */}
        <h1>React with CSS</h1>
        <p>Menssage text in the parents components</p>

        {/* CSS if component */}
        < MyComponents/>

        {/* Inline CSS */}
        <p style={{color: "blue", padding: "20px", borderTop:"100px", background:"white"}}>Test menssage - CSS inline</p>

        {/* Dynamic inline CSS */}
        <h2 style={n > 10 ? {color:"purple"}:{color:"pink"}}>Dynamic CSS</h2>

        <h2 style={name === "Matheus" ? {color:"green", background:"gold"}:null}>Dynamic CSS 2</h2>

        {/* Dynamic Class */}

        <h2 className={redTitle ? "red-title" : "title"}> This title will have a dynamic class</h2>


        {/* CSS modules */}

        < Title />

    </div>
  )
}

export default App