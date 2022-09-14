
const Buttons = ({setState, handleToggle, counter, setCounter, countUp, countDown}) => {
  return (
    <div className="text-center">
        <button className="btn btn-md my-2" style={{border: '1px solid chocolate'}} onClick={() => setState(state => !state)}>Toggle State <strong>(Inline)</strong> </button>
        <br />
        <button className="btn btn-md my-2" style={{border: '1px solid chocolate'}} onClick={handleToggle}>Toggle State </button>
        <br />
        <button className="btn btn-md my-2" style={{border: '1px solid chocolate'}} onClick={() => setCounter({count: counter.count + 1, subs: counter.subs})}>Count Up <strong>(Inline)</strong></button>
        <br />
        <button className="btn btn-md my-2" style={{border: '1px solid chocolate'}} onClick={countUp}>Count Up  </button>
        <br />
        <button className="btn btn-md my-2" style={{border: '1px solid chocolate'}} onClick={countDown}>Count Down  </button>
    </div>
  )
}

export default Buttons;