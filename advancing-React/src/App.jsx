// Components
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShorUsersName from './components/ShorUsersName'

//style
import './App.css'
import Pokemon from "./assets/pokemon2.png"
import { useState } from 'react'
import CarDetails from './components/CarDetails'

function App() {
  const name = "Vic"

  const [username] = useState("mary")

  return (
    <div>
      <h1>advancing in React</h1>

      <h3>Imagem in public folder</h3>
      <img src="/pokemon1.png" alt=""/>

      <h3>Imagem in assents folder</h3>
      <img src={Pokemon} alt="" />

      <ManageData/>

      <ListRender/>

      <ConditionalRender />
      {/* Props */}
      <ShorUsersName name={"John"} nameConst={name} nameState={username}/>
      {/* Destructiring */}
      <CarDetails brand={"Fiat"} km={1000} color={"Red"} newCar={false}/>

      {/* Reuse */}
    
      <CarDetails brand={"Ford"} km={0} color={"Blue"} newCar={true}/>
      <CarDetails brand={"VW"} km={300} color={"Gray"} newCar={false}/>

    </div>
  )
}

export default App
