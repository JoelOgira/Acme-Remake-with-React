import { useState } from "react";
import ChangeColor from "./ChangeColor";
import DisplayColor from "./DisplayColor";

const Services = () => {

  const [colorValue, setcolorValue] = useState('');
  const [isDarkText, setisDarkText] = useState(true);

  return (
      <div className="Services container">
          <DisplayColor 
            colorValue={colorValue}
            isDarkText={isDarkText}
          />
          <ChangeColor 
            colorValue={colorValue}
            setColorValue={setcolorValue}
            isDarkText={isDarkText}
            setisDarkText={setisDarkText}
          />
      </div>
    )
  }
  
export default Services;