import { useContext } from 'react'
import { HookUseContext } from '../components/HookUseContext'

function UseContextPage() {
  const dados = useContext(HookUseContext)

  return (
    <div>
      <h2>useContext</h2>
      <p>{dados?.nome}</p>
    </div>
  )
}

export default UseContextPage