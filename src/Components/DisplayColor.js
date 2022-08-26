const DisplayColor = ({ colorValue, isDarkText }) => {
  return (
    <div className="card my-4" style={{border: '1px solid chocolate', padding:'10px', backgroundColor: colorValue, color: isDarkText? '#000': '#fff'}}>
        <div className="card-body">
            <p className="text-center card-text">
                {colorValue ? colorValue : 'Empty Value!'}
            </p>
        </div>
    </div>
  )
}

DisplayColor.defaultProps = {
    colorValue: 'Empty color value' 
}

export default DisplayColor;

