const ChangeColor = ({ colorValue, setColorValue, isDarkText, setisDarkText }) => {
  return (
    <form className="searchForm input-group my-4" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="Add Color Name" className="form-label">Change Color</label>
        <input 
            type="text" 
            className="form-control py-2 px-4"  
            autoFocus 
            id="change-color"
            role="searchbox" 
            placeholder="Add Color Name" 
            value={colorValue}
            onChange={(e) => setColorValue(e.target.value.trim())}
        />

        <button className="btn text-center my-4" style={{width: '100%', background: 'transparent', border:'1px solid chocolate'}} onClick={() => setisDarkText(!isDarkText)}>
            Toggle Color
        </button>

    </form>
  )
}

export default ChangeColor;