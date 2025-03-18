import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const handleDigit = (digit) => {
    if (waitingForSecondOperand) {
      setDisplay(digit);
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display === '0' ? digit : display + digit);
    }
  };

  const handleOperator = (nextOperator) => {
    const inputValue = parseFloat(display);
    
    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = performCalculation();
      setDisplay(String(result));
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const performCalculation = () => {
    const inputValue = parseFloat(display);
    switch(operator) {
      case '+':
        return firstOperand + inputValue;
      case '-':
        return firstOperand - inputValue;
      case '*':
        return firstOperand * inputValue;
      case '/':
        return firstOperand / inputValue;
      default:
        return inputValue;
    }
  };

  const handleEqual = () => {
    if (operator && !waitingForSecondOperand) {
      const result = performCalculation();
      setDisplay(String(result));
      setFirstOperand(null);
      setOperator(null);
      setWaitingForSecondOperand(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  return (
    <div className="w-80 bg-gray-100 p-5 rounded-lg shadow-lg">
      <div className="bg-white p-5 mb-5 rounded text-right text-2xl font-bold">
        {display}
      </div>
      
      <div className="flex flex-col gap-3">
        <button 
          className="p-4 rounded bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition-colors"
          onClick={handleClear}
        >
          C
        </button>
        
        <div className="flex gap-3">
          <button className="flex-1 p-4 rounded bg-gray-200 hover:bg-gray-300 active:bg-gray-400" onClick={() => handleDigit('7')}>7</button>
          <button className="flex-1 p-4 rounded bg-gray-200 hover:bg-gray-300 active:bg-gray-400" onClick={() => handleDigit('8')}>8</button>
          <button className="flex-1 p-4 rounded bg-gray-200 hover:bg-gray-300 active:bg-gray-400" onClick={() => handleDigit('9')}>9</button>
          <button className="flex-1 p-4 rounded bg-orange-500 hover:bg-orange-600 text-white" onClick={() => handleOperator('/')}>/</button>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 p-4 rounded bg-gray-200 hover:bg-gray-300 active:bg-gray-400" onClick={() => handleDigit('4')}>4</button>
          <button className="flex-1 p-4 rounded bg-gray-200 hover:bg-gray-300 active:bg-gray-400" onClick={() => handleDigit('5')}>5</button>
          <button className="flex-1 p-4 rounded bg-gray-200 hover:bg-gray-300 active:bg-gray-400" onClick={() => handleDigit('6')}>6</button>
          <button className="flex-1 p-4 rounded bg-orange-500 hover:bg-orange-600 text-white" onClick={() => handleOperator('*')}>*</button>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 p-4 rounded bg-gray-200 hover:bg-gray-300 active:bg-gray-400" onClick={() => handleDigit('1')}>1</button>
          <button className="flex-1 p-4 rounded bg-gray-200 hover:bg-gray-300 active:bg-gray-400" onClick={() => handleDigit('2')}>2</button>
          <button className="flex-1 p-4 rounded bg-gray-200 hover:bg-gray-300 active:bg-gray-400" onClick={() => handleDigit('3')}>3</button>
          <button className="flex-1 p-4 rounded bg-orange-500 hover:bg-orange-600 text-white" onClick={() => handleOperator('-')}>-</button>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 p-4 rounded bg-gray-200 hover:bg-gray-300 active:bg-gray-400" onClick={() => handleDigit('0')}>0</button>
          <button className="flex-1 p-4 rounded bg-gray-200 hover:bg-gray-300 active:bg-gray-400" onClick={handleEqual}>=</button>
          <button className="flex-1 p-4 rounded bg-orange-500 hover:bg-orange-600 text-white" onClick={() => handleOperator('+')}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;