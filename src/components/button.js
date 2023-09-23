import React from 'react';
import '../stylesheets/button.css'
//clickHandler es una funcion
function Button({ text, isButtonClick, clickHandler }){
    return (
        <button className={ isButtonClick ? 'button-click' : 'button-restart' }
            onClick={clickHandler}>
            {text}
        </button>
    )
}

export default Button;