// Components
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUsersName from './components/ShowUsersName'
import Fragments from './components/Fragments'

//style
import './App.css'
import Pokemon from "./assets/pokemon2.png"
import { useState } from 'react'
import CarDetails from './components/CarDetails'

function App() {
  const name = "Vic"

  const [username] = useState("mary")

  const cars = [
    {id:1,  brand:"Ferrari",color:"Red", new:"True", km:0},
    {id:2,  brand:"BMW",color:"Green", new:"False", km:2000},
    {id:3,  brand:"KIA",color:"white", new:"false", km:15000}
  ]

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
      <ShowUsersName name={"John"} nameConst={name} nameState={username}/>
      {/* Destructiring */}
      <CarDetails brand={"Fiat"} km={1000} color={"Red"} newCar={false}/>

      {/* Reuse */}
    
      <CarDetails brand={"Ford"} km={0} color={"Blue"} newCar={true}/>
      <CarDetails brand={"VW"} km={300} color={"Gray"} newCar={false}/>

      {/* Loop in objects arryas */}

      {cars.map((car) => (
        <CarDetails brand={car.brand} km={car.km} color={car.color} newCar={car.new}/>
      ))}

      {/* Fragments */}

      <Fragments propFragment={"Teste"}/>

    </div>
  )
}

export default App
