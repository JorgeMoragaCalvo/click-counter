import './App.css';
import Button from './components/button';
import Counter from './components/counter';
import freeCodeCampLogo from './images/FreeCodeCamp_logo.png';
import { useState } from 'react'; //useState es un Hook que permite agregar un estado a un componente funcional

function App() {

  const [clickNumbers, setNumClicks] = useState(0);

  const clickHandler = () => {
    setNumClicks(clickNumbers + 1);
  };
  
  const counterRestart = () => {
    setNumClicks(0);
  };

  return (
    <div className='App'>
      <div className='freecodecamp-container-logo'>
        <img className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='freeCodeCamp logo'
        />
      </div>
      <div className='main-container'>
        <Counter 
          clickNumbers={clickNumbers}
        />
        <Button 
          text='Click'
          isButtonClick={true}
          clickHandler={clickHandler}
        />
        <Button 
          text='Restart'
          isButtonClick={false}
          clickHandler={counterRestart}
        />
      </div>   
    </div>
  );
}

export default App;
