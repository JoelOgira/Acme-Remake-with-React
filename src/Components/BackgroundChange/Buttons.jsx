const Buttons = ({ handleBackgroundChange }) => {
  return (
    <div>
        <button className="btn btn-md" style={{background:'red', marginRight:'20px', borderRadius: '25px', color: 'whitesmoke', padding: '9px 27px 9px 27px'}}
        onMouseMove={() => handleBackgroundChange('#FF0000', '#F5F5F5')}
        onMouseOut={() => handleBackgroundChange('#F5F5F5', '#212529')}
        >
            Red
        </button>
        <button className="btn btn-md" style={{background:'green', marginRight:'20px', borderRadius: '25px', color: 'whitesmoke', padding: '9px 27px 9px 27px'}}
        onMouseMove={() => handleBackgroundChange('#008000', '#F5F5F5')}
        onMouseOut={() => handleBackgroundChange('#F5F5F5', '#212529')}
        >
            Green
        </button>
        <button className="btn btn-md" style={{background:'Black', marginRight:'20px', borderRadius: '25px', color: 'whitesmoke', padding: '9px 27px 9px 27px'}}
        onMouseMove={() => handleBackgroundChange('#000000', '#F5F5F5')}
        onMouseOut={() => handleBackgroundChange('#F5F5F5', '#212529')}>
            Black
        </button>
    </div>
  )
}

export default Buttons;