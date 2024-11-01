import React from "react";
import './boton.css'

const ButtonCalc = (props) => {
    return (
        <div className={'buttonnumber'}
            onClick={() => props.clickHandler(props.value)}>
            {props.value} 
        </div>
    );
};

export default ButtonCalc;