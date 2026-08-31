import {useReducer, useState} from 'react'

function HookUseReducer() {
    // 1 - start with useReducer

    const [Number, dispatch] = useReducer((state,action) => {
        return Math.random(state)
    })

    // 2 - Advancing on useReducer

    const initialTasks = [
        {id:1, text:"Reading a book"},
        {id:2, text:"Liten a song"},
    ]

    const [Tasktext, setTaskText] = useState("")

    const taskReducer = (state, action) => {
        switch(action.type){
            case "ADD":
                const newTask = {
                    id: Math.random(),
                    text: Tasktext
                };

                setTaskText("")

                return [...state, newTask]
            case "DELETE":
                return state.filter((task) => task.id !== action.id)
            default:
                return state
        }
    }

    const [Task, dispatchTasks] = useReducer(taskReducer, initialTasks)

    function handleSubmit(e){
        e.preventDefault()

        dispatchTasks({type: "ADD"})
    }

    function removeTask(id){
        dispatchTasks({type: "DELETE", id})
    }

  return (
    <div>
        <p>Número: {Number}</p>
        <button onClick={dispatch}>Alterar número</button>
        <br />
        <h3>Taks</h3>

        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setTaskText(e.target.value)} value={Tasktext}/>
            <input type="submit" value="Enviar" />
        </form>


        {Task.map((task) => {
          return  <li key={task.id} onDoubleClick={() => removeTask(task.id)}>{task.text}</li>
        })}
        <hr />
    </div>
  )
}

export default HookUseReducer