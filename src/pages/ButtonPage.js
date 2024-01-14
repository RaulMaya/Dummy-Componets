import Button from "../components/Button";
import { FaBeer } from 'react-icons/fa';
import { BiAperture, BiBrightness } from "react-icons/bi";
const ButtonPage = () => {
  const handleClick = () => {
    console.log("PURA GENTE DEL SEÑOR CHEPO")
  }
  return (
    <h1 className="App">
      Hello there, this is an app
      <div>
        <Button success outline rounded onClick={handleClick} className="mb-1">
          <BiAperture />
          Button 1
        </Button>
      </div>
      <div>
        <Button danger onMouseEnter={handleClick} className="mb-1">
          <BiBrightness />
          Button 2
        </Button>
      </div>
      <div>
        <Button secondary outline onMouseLeave={handleClick} className="mb-1"><FaBeer />Button 3</Button>
      </div>
      <div>
        <Button warning className="mb-1">Button 4</Button>
      </div>
      <div>
        <Button primary rounded className="mb-1">Button 5</Button>
      </div>
    </h1>
  );
}

export default ButtonPage;
