const ChangeMenssageState = ({handleMenssage}) => {
  
  const menssage = ["Hi!", "Hello!!!", "Good day"]
  
  return (
    <div>
        <button onClick={() => handleMenssage(menssage[Math.floor(Math.random() * 3)])}>Choice your menssage</button>
    </div>
  )
}

export default ChangeMenssageState