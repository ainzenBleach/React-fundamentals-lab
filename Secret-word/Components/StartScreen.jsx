import "./StartScreen.css";

function StartScreen({startGame}) {
  return (
    <div className="start">
        <h1>Secret word</h1>
        <p>Clique para começar</p>
        <button onClick={startGame}>Iniciar</button>
    </div>
  )
}

export default StartScreen