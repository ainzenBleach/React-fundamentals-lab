//Style
import "./App.css"

//Data
import { wordsList } from "./data/word.js"

//Componente 
import StartScreen from '../Components/StartScreen.jsx'
import Game from '../Components/Game.jsx'
import GameOver from '../Components/GameOver.jsx'
import { useEffect, useState } from "react"

const stages = [
  {id:1, name: "start"},
  {id:2, name: "game"},
  {id:3, name: "end"}
]

function App() {

  const [GameStage,setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [PickedWord, setPickedWord] = useState("")
  const [PickedCategory, setPickedCategory] = useState("")
  const [Letters, setLetters] = useState([])

  const [GuessedLetters, setGuessedLetters] = useState([])
  const [WrongLetters,setWrongLetters] = useState([])
  const [Guesses,setGuesses] = useState(3)
  const [Score,setScore] = useState(0)

  function pickWordAndCategory(){
    // pick a random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * categories.length)]

    //pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return {word, category}
  }

  function clearLettersStates(){
    setGuessedLetters([])
    setWrongLetters([])
  }

  //Start game
  const startGame = () => {
    setGameStage(stages[1].name)

    clearLettersStates()

    // pick word and pick category
    const {word, category} = pickWordAndCategory()

    //create an array of letters
    let wordLetters = word.split("")
    wordLetters = wordLetters.map(letra => letra.toLowerCase())

    //Fill states
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)


  }

  // Process the letter input
  function verifyLetter(letter){
      
    const normalizeLetter = letter.toLowerCase()

    // check if letter has already been utilized
    if(GuessedLetters.includes(normalizeLetter) || WrongLetters.includes(normalizeLetter)) return

    // push guessed letter or remove a guess
    if(Letters.includes(normalizeLetter)){
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizeLetter
      ])
    }else{
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizeLetter
      ])

      setGuesses((actualGuesses) => actualGuesses - 1)
    }



  }

  // check win condition
  useEffect(() => {

    const uniqueLetters = [... new Set(Letters)]

    //win condition

    if(GuessedLetters.length === uniqueLetters.length){
      // add score
      setScore((actualScore) => actualScore + 100)

      startGame();
    }

  },[GuessedLetters, Letters, startGame])


  // check if guesses ended
  useEffect(() => {

    
    
    if(Guesses <= 0){

      //reset all states
      clearLettersStates()
      
      setGameStage(stages[2].name)
    }
  },[Guesses])

  //Restart the game
  function restart(){
      setScore(0)
      setGuesses(3)

      setGameStage(stages[0].name)
  }

  return (
    <div className='app'>
    {GameStage === "start" && <StartScreen startGame={startGame} />}
    {GameStage === "game" && <Game 
    verifyLetter={verifyLetter} 
    pickedWord={PickedWord} 
    pickedCategory={PickedCategory}
    letters={Letters}
    guessedLetters={GuessedLetters}
    wrongLetters={WrongLetters}
    guesses={Guesses}
    score={Score}
    />}
    {GameStage === "end" && <GameOver restart={restart}
    score={Score}
    />}
    </div>
  )
}

export default App