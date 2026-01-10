// Components

//style
import './App.css'
import Pokemon from "./assets/pokemon2.png"

function App() {

  return (
    <div>
      <h1>advancing in React</h1>

      <h3>Imagem in public folder</h3>
      <img src="/pokemon1.png" alt=""/>

      <h3>Imagem in assents folder</h3>
      <img src={Pokemon} alt="" />
    </div>
  )
}

export default App
