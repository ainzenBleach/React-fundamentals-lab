import { useState } from "react"
const ManageData = () => {7
  let sumData = 10

  const [number, setNumber] = useState(15);
  return (
    <div>
      number:{sumData}
      <button onClick={() => {}}>change number</button>
        <p>number: {number}</p>
      <button onClick={() => setNumber(25)}>change number</button>
    </div>
  )
}

export default ManageData