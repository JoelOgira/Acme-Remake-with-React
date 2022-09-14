
const Buttons = ({ handleComputerChoice, handleUserChoice, setResult }) => {

  const handleResult = (usrChoice) => {
    // userChoice === 'Rock' && computerChoice === 'Rock' ? (setResult("It's a Draw")) : (userChoice === 'Rock' && computerChoice === 'Paper' ? setResult('You Lose !') : (setResult('You Win')))
    // userChoice === 'Paper' && computerChoice === 'Paper' ? (setResult("It's a Draw")) : (userChoice === 'Paper' && computerChoice === 'Scissors' ? setResult('You Lose !') : (setResult('You Win')))
    // userChoice === 'Scissors' && computerChoice === 'Scissors' ? (setResult("It's a Draw")) : (userChoice === 'Scissors' && computerChoice === 'Rock' ? setResult('You Lose !') : (setResult('You Win')))

    const possibleChoices = ['Rock', 'Paper', 'Scissors']
    const randomChoices = Math.floor(Math.random() * possibleChoices.length);
    const cmpChoice = possibleChoices[randomChoices];
    let result;
    if (cmpChoice === usrChoice) {
      result = "It's a draw";
    }
    if (cmpChoice === 'Rock' && usrChoice === 'Paper') {
      result = "You Win!";
    }
    if (cmpChoice === 'Rock' && usrChoice === 'Scissors') {
        result = "You Lose!";
    }
    if (cmpChoice === 'Paper' && usrChoice === 'Sciccors') {
        result = "You Win!";
    }
    if (cmpChoice === 'Paper' && usrChoice === 'Rock') {
        result = "You Lose!";
    }
    if (cmpChoice === 'Scissors' && usrChoice === 'Rock') {
        result = "You Win!";
    }
    if (cmpChoice === 'Scissors' && usrChoice === 'Paper') {
        result = "You Lose!";
    }
    setResult(result);
  }

  return (
    <div className="container buttons my-4  ">
        <button className="btn btn-lg" 
        onClick={() => (handleComputerChoice) (handleUserChoice('Rock'))
        (handleResult('Rock'))
        }>
            Rock
        </button>
        <button className="btn btn-lg" 
        onClick={() =>  (handleComputerChoice) (handleUserChoice('Paper'))
        (handleResult('Paper'))
        }>
            Paper
        </button>
        <button className="btn btn-lg" 
        onClick={() =>  (handleComputerChoice) (handleUserChoice('Scissors'))
        (handleResult('Scissors'))
        }>
            Scissors
        </button>
    </div>
  )
}

export default Buttons;

