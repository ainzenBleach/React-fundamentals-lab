import { useState } from "react"

const ListRender = () => {

    const [list] = useState(["John","Mark","Fred"])
    
    const [users, setUsers] = useState(
        [
            {id: 1, name: "Shag", age:"21"},
            {id: 2, name: "Fred", age:"23"},
            {id: 3, name: "Scoob", age:"24"}
        ]    
    )

    const DeleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {

            return prevUsers.filter((user) => randomNumber !== user.id)
            
        })
    }

    return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>

        {/* Using ids coming a data base */}

        <ul>
            {users.map((users) => (
                <li key={users.id}>{users.name} - {users.age}</li>
            ))}
        </ul>

            <button onClick={DeleteRandom}> Detele random user</button>

    </div>
  )
}

export default ListRender