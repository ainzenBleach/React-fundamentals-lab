//components
import Myform from '../components/Myform'

//style
import './App.css'

function App() {

  return (
    <div className='app'>
      <h2>Forms</h2>
      < Myform user={{name:"Jonh", email:"Jonh@gmail.com", bio:"I like cars", role:"admin"}}/>
    </div>
  )
}

export default App
