

//style
import { useState } from "react"
import "./Myform.css"

const Myform = () => {
    // 3 - data managing

    const[name,setname] = useState()
    const[email,setemail] = useState()

    const handleName = (e) => {
        setname(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit form")
        console.log(name, email)
    }

  return (
    <div>
        {/* Submit form */}
        {/* 1 - create form */}

        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" placeholder="Type your name" onChange={handleName}/>
            </div>
            <input type="submit" value="enviar" />
        </form>

        {/* 2 - Label tag  involving the input*/}

        <label>
            <span>E-mail:</span>
            {/* Simple setState */}
            <input type="email" name="email" placeholder="type your email" onChange={(e) => {setemail(e.target.value)}}/>
        </label>        
        <input type="submit" value="Enviar"/>
    </div>
  )
}

export default Myform