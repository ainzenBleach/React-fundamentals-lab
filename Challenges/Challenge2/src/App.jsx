//Components
import UserDetails from '../Components/UserDetails'

//Style
import './App.css'

function App() {

  const people = [
    {id: 1, name:"John", age: 19, job:"Police"},
    {id: 2,name:"Alex", age: 12, job:"-"},
    {id: 3,name:"Bruce", age: 10, job:"-"},
    {id: 4,name:"Mary", age: 23, job:"Cooker"}
  ]

  return (
    <>
    <div>

      <h1>Render Conditional</h1>

      {
        people.map((person) => 
        <UserDetails name={person.name} age={person.age} job={person.job} key={person.id}/>
        )
      }

    </div>
    </>
  )
}

export default App
