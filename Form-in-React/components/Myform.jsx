

//style
import { use, useState } from "react"
import "./Myform.css"

const Myform = ({user}) => {
      // 6 - controlled inputs
    // 3 - data managing

    const[name,setname] = useState(user ? user.name : "")
    const[email,setemail] = useState(user ? user.email : "")

    const[bio,setbio] = useState(user ? user.bio : "")

    const[role, setrole] = useState(user ? user.bio : "")

    const handleName = (e) => {
        setname(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit form")
        console.log(name, email, bio, role)

        // 7 - clean from
        setemail("")
        setname("")
        setbio("")
        setrole("")
    }

  return (
    <div>
        {/* Submit form */}
        {/* 1 - create form */}

        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" placeholder="Type your name" onChange={handleName} value={name}/>
            </div>
            <input type="submit" value="enviar" />
        </form>

        {/* 2 - Label tag  involving the input*/}

        <label>
            <span>E-mail:</span>
            {/* Simple setState */}
            <input type="email" name="email" placeholder="type your email" onChange={(e) => {setemail(e.target.value)}} value={email}/>
        </label>        

        {/* 8 - TextArea */}
        <label>
            <textarea 
            name="bio" 
            placeholder="user's describe" 
            onChange={(e) => setbio(e.target.value)} 
            value={bio}
            ></textarea>
        </label>

        {/* option form */}

        <label>
            <span>Role</span>
            <select 
            name="role" 
            onChange={(e) => setrole(e.target.value)}
            value={role}
            >
                <option value="user">User</option>
                <option value="admin">admin</option>
            </select>

        </label>

        <input type="submit" value="Enviar"/>
    </div>
  )
}

export default Myform