import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import './Calculator.css';

interface ButtonProps {
  value: string | JSX.Element;
  onClick: () => void;
  className?: string;
}

const Button = ({ value, onClick, className = '' }: ButtonProps) => (
  <button className={`calculator-button ${className}`} onClick={onClick}>
    {value}
  </button>
);

const formatNumber = (num: string) => {
  const [integer, decimal] = num.split('.');
  return decimal ? `${integer}.${decimal}` : integer;
};

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [newNumber, setNewNumber] = useState(true);

  const handleNumber = (num: string) => {
    if (newNumber) {
      setDisplay(num);
      setNewNumber(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleOperator = (op: string) => {
    setPreviousValue(parseFloat(display));
    setOperator(op);
    setNewNumber(true);
  };

  const calculate = () => {
    if (!operator || previousValue === null) return;
    
    const current = parseFloat(display);
    let result = 0;

    switch (operator) {
      case '+':
        result = previousValue + current;
        break;
      case '-':
        result = previousValue - current;
        break;
      case '×':
        result = previousValue * current;
        break;
      case '÷':
        result = previousValue / current;
        break;
    }

    setDisplay(result.toString());
    setPreviousValue(null);
    setOperator(null);
    setNewNumber(true);
  };

  const handleClear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperator(null);
    setNewNumber(true);
  };

  const toggleSign = () => {
    setDisplay((prev) => (parseFloat(prev) * -1).toString());
  };

  const addDecimal = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.');
      setNewNumber(false);
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator-display">{formatNumber(display)}</div>
      
      <div className="calculator-buttons">
        <Button value="AC" onClick={handleClear} className="light-gray" />
        <Button value="±" onClick={toggleSign} className="light-gray" />
        <Button value="%" onClick={() => {}} className="light-gray" />
        <Button value="÷" onClick={() => handleOperator('÷')} className="orange" />
        
        <Button value="7" onClick={() => handleNumber('7')} />
        <Button value="8" onClick={() => handleNumber('8')} />
        <Button value="9" onClick={() => handleNumber('9')} />
        <Button value="×" onClick={() => handleOperator('×')} className="orange">
          <FaTimes />
        </Button>

        <Button value="4" onClick={() => handleNumber('4')} />
        <Button value="5" onClick={() => handleNumber('5')} />
        <Button value="6" onClick={() => handleNumber('6')} />
        <Button value="-" onClick={() => handleOperator('-')} className="orange" />

        <Button value="1" onClick={() => handleNumber('1')} />
        <Button value="2" onClick={() => handleNumber('2')} />
        <Button value="3" onClick={() => handleNumber('3')} />
        <Button value="+" onClick={() => handleOperator('+')} className="orange" />

        <Button value="0" onClick={() => handleNumber('0')} className="span-2" />
        <Button value="." onClick={addDecimal} />
        <Button value="=" onClick={calculate} className="orange" />
      </div>
    </div>
  );
};

export default Calculator;