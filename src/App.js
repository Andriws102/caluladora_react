import ButtonCalc from './componentes/boton';
import Viewer from './componentes/viewer';
import { useState } from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState('');
  const [isResult, setIsResult] = useState('');

  const addValue = (value) => {
    if(isResult){
      setInput('');
      setIsResult(false);
    }
    console.log("Ingresaste el valor: " + value);
    setInput(input + value);
  }

  const getResult = () => {
    if (input) {
      setInput(eval(input));
      setIsResult(true);
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.");
    }
  };

  return (
    <div className="App">
      <div className='calculadora-body'>
        <Viewer input={input}/>
        <div className='fila'>
          <ButtonCalc clickHandler={addValue} value="1"/>
          <ButtonCalc clickHandler={addValue} value="2"/>
          <ButtonCalc clickHandler={addValue} value="3"/>
          <ButtonCalc clickHandler={addValue} value="+"/>
        </div>
        <div className='fila'>
          <ButtonCalc clickHandler={addValue} value="4"/>
          <ButtonCalc clickHandler={addValue} value="5"/>
          <ButtonCalc clickHandler={addValue} value="6"/>
          <ButtonCalc clickHandler={addValue} value="-"/>
        </div>
        <div className='fila'>
          <ButtonCalc clickHandler={addValue} value="7"/>
          <ButtonCalc clickHandler={addValue} value="8"/>
          <ButtonCalc clickHandler={addValue} value="9"/>
          <ButtonCalc clickHandler={addValue} value="*"/>
        </div>
        <div className='fila'>
          <ButtonCalc clickHandler={addValue} value="."/>
          <ButtonCalc clickHandler={addValue} value="0"/>
          <ButtonCalc clickHandler={getResult} value="="/>
          <ButtonCalc clickHandler={addValue} value="/"/>
        </div>
        <div className='fila'>
          <ButtonCalc clickHandler={() => setInput('')} value="Limpiar"/>
        </div>
      </div>
    </div>
  );
}

export default App;
