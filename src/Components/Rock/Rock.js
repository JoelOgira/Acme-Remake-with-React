import Buttons from "./Buttons";
import Choices from "./Choices";
import { useState } from "react";

const Rock = () => {

  const [computerChoice, setComputerChoice] = useState('');
  const [userChoice, setUserChoice] = useState('');
  const [result, setResult] = useState('');

  const handleComputerChoice = () => {
    const possibleChoices = ['Rock', 'Paper', 'Scissors']
    const randomChoices = Math.floor(Math.random() * possibleChoices.length);
    const computerChoices = possibleChoices[randomChoices];    
    setComputerChoice(computerChoices);
  }

  const handleUserChoice = (choice) => {
    setUserChoice(choice);
  }

  return (
    <div className="container">
        <Choices 
          computerChoice={computerChoice}
          userChoice={userChoice}
          result={result}
        />
        <Buttons 
          handleComputerChoice={handleComputerChoice}
          handleUserChoice={handleUserChoice}
          setResult={setResult}
        />
    </div>
  )
}

export default Rock;