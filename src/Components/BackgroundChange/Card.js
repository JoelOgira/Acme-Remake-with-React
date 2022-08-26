import { useState } from 'react';
import './Background.css';
import Buttons from './Buttons';
import Content from './Content';

const Card = () => {

const [cardBackground, setcardBackground] = useState('#F5F5F5');

const [cardTextColor, setcardTextColor] = useState('#212529');

const handleBackgroundChange = (bgColor, txtColor) => {
    setcardBackground(bgColor)
    setcardTextColor(txtColor)
}

  return (
    <div className="container">
        <div className="card my-4" style={{backgroundColor: cardBackground, color: cardTextColor}}>
            <div className="card-body mx-4">
                <Content />
                <Buttons 
                    handleBackgroundChange={handleBackgroundChange}
                />
            </div>
        </div>
    </div>
  )
}

export default Card