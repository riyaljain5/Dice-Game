import { useState } from "react"
import StartGame from "./Components/StartGame"
import Gameplay from "./Components/Gameplay";


function App() {

  const [isGameStarted, setisGameStarted] = useState(false);
  const toggleGamePlay = ()=>{
    setisGameStarted((prev)=> !prev);
  };

  return (
    <>
    {isGameStarted ? <Gameplay/> : <StartGame toggle= {toggleGamePlay}/>};
   
      
    </>
  )
}

export default App
