import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };
  const calculate = () => {
      const evalResult = eval(input);
      setResult(evalResult);
  };
  const clearInput = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className='body'>
    <div className="App">
      <h1>MathSKILLS</h1>
      <div className="calculator">
        <div className='flex'>
        <input type="text" value={input} />
        <div className="result">{result}</div>
        </div>
        <div className="buttons">
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button className="function2" onClick={clearInput}>C</button>
          
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button className="function" onClick={() => handleClick("+")}>+</button>
          
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button className="function" onClick={() => handleClick("*")}>*</button>
          
          <button onClick={() => handleClick("0")}>0</button>
          <button className="function2" onClick={calculate}>=</button>
          <button className="function" onClick={() => handleClick("-")}>-</button>
          <button className="function" onClick={() => handleClick("/")}>/</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
