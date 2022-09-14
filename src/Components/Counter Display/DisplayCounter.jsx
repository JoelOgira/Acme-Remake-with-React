import { useState } from 'react';
import Buttons from './Buttons';
import './Counter.css';

const DisplayCounter = () => {

  const [state, setState] = useState(false);

  const [counter, setCounter] = useState({
    count: 0,
    subs: 0
  })

  const handleToggle = () => {
    setState(state => !state)
  }
  
  const countUp = () => {
    setCounter({
      count: counter.count + 1,
      subs: counter.subs
    })
  }

  const countDown = () => {
    setCounter({
      count: counter.count,
      subs: counter.subs - 1
    })
  }

  return (
    <div className='container'>
        <div className="counter-container py-2" style={{border:'2px solid chocolate', borderRadius: '10px', height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', alignSelf: 'center'}}>
          <p className="lead py-2">State Display : {state ? 'Yes': 'NO'}</p>
          <p className="lead py-2">Counter Up : {counter.count}</p>
          <p className="lead py-2">Counter Down : {counter.subs}</p>
          <Buttons
            setState={setState}
            handleToggle={handleToggle}
            counter={counter}
            setCounter={setCounter}
            countUp={countUp}
            countDown={countDown}
          />
        </div>
    </div>
  )
}

export default DisplayCounter;