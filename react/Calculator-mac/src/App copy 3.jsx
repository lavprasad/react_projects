import { useState, useEffect, useRef, useCallback } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [newNumber, setNewNumber] = useState(true);

  // Refs for current state values
  const displayRef = useRef(display);
  const newNumberRef = useRef(newNumber);
  const previousValueRef = useRef(previousValue);
  const operationRef = useRef(operation);

  // Update refs when state changes
  useEffect(() => {
    displayRef.current = display;
  }, [display]);

  useEffect(() => {
    newNumberRef.current = newNumber;
  }, [newNumber]);

  useEffect(() => {
    previousValueRef.current = previousValue;
  }, [previousValue]);

  useEffect(() => {
    operationRef.current = operation;
  }, [operation]);

  // Keyboard handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;

      // Prevent default for keys we handle
      if (["0","1","2","3","4","5","6","7","8","9","+","-","*","/","Enter","Escape",".","%"].includes(key)) {
        e.preventDefault();
      }

      if (key >= "0" && key <= "9") {
        handleNumber(key);
      } else if (["+", "-", "*", "/"].includes(key)) {
        let op = key;
        if (key === "*") op = "×";
        if (key === "/") op = "÷";
        handleOperation(op);
      } else if (key === "Enter") {
        calculate();
      } else if (key === "Escape") {
        handleClear();
      } else if (key === ".") {
        handleDecimal();
      } else if (key === "%") {
        handlePercent();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNumber = useCallback((num) => {
    setNewNumber((prevNew) => {
      if (prevNew) {
        setDisplay(num);
        return false;
      } else {
        setDisplay((prev) => prev + num);
        return prevNew;
      }
    });
  }, []);

  const handleOperation = useCallback((op) => {
    setPreviousValue(parseFloat(displayRef.current));
    setOperation(op);
    setNewNumber(true);
  }, []);

  const calculate = useCallback(() => {
    if (!operationRef.current) return;
    const current = parseFloat(displayRef.current);
    let result;
    switch (operationRef.current) {
      case "+":
        result = previousValueRef.current + current;
        break;
      case "-":
        result = previousValueRef.current - current;
        break;
      case "×":
        result = previousValueRef.current * current;
        break;
      case "÷":
        result = previousValueRef.current / current;
        break;
      default:
        return;
    }
    setDisplay(result.toString());
    setOperation(null);
    setPreviousValue(null);
    setNewNumber(true);
  }, []);

  const handleClear = useCallback(() => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setNewNumber(true);
  }, []);

  const handleSign = useCallback(() => {
    setDisplay((prev) => (parseFloat(prev) * -1).toString());
  }, []);

  const handlePercent = useCallback(() => {
    setDisplay((prev) => (parseFloat(prev) / 100).toString());
  }, []);

  const handleDecimal = useCallback(() => {
    setNewNumber((prevNew) => {
      if (prevNew) {
        setDisplay("0.");
        return false;
      } else if (!displayRef.current.includes(".")) {
        setDisplay((prev) => prev + ".");
        return prevNew;
      }
      return prevNew;
    });
  }, []);

  return (
    <div className="flex flex-col bg-black p-4 rounded-2xl shadow-xl w-[90vmin] max-w-[320px] mx-auto">
      <div className="text-white text-right text-[10vmin] font-light mb-4 h-[20vmin] overflow-hidden flex items-center justify-end">
        {display}
      </div>

      <div className="grid grid-cols-4 gap-2">
        {/* Top Row */}
        <button onClick={handleClear} className="aspect-square bg-gray-300 rounded-full text-black text-[5vmin] hover:bg-gray-400 active:bg-gray-500 flex items-center justify-center">
          {display === "0" ? "AC" : "C"}
        </button>
        <button onClick={handleSign} className="aspect-square bg-gray-300 rounded-full text-black text-[5vmin] hover:bg-gray-400 active:bg-gray-500 flex items-center justify-center">
          ±
        </button>
        <button onClick={handlePercent} className="aspect-square bg-gray-300 rounded-full text-black text-[5vmin] hover:bg-gray-400 active:bg-gray-500 flex items-center justify-center">
          %
        </button>
        <button onClick={() => handleOperation("÷")} className="aspect-square bg-orange-400 rounded-full text-white text-[5vmin] hover:bg-orange-500 active:bg-orange-600 flex items-center justify-center">
          ÷
        </button>

        {/* Number Pad */}
        {[7, 8, 9, "×", 4, 5, 6, "-", 1, 2, 3, "+"].map((btn, i) => (
          <button
            key={i}
            onClick={() => typeof btn === "number" ? handleNumber(btn.toString()) : handleOperation(btn)}
            className={`aspect-square rounded-full text-[5vmin] flex items-center justify-center ${
              typeof btn === "number" 
                ? "bg-gray-700 text-white hover:bg-gray-800 active:bg-gray-900"
                : "bg-orange-400 text-white hover:bg-orange-500 active:bg-orange-600"
            }`}
          >
            {btn}
          </button>
        ))}

        {/* Bottom Row */}
        <button onClick={() => window.open('calculator:', '_blank')} className="aspect-square bg-gray-300 rounded-full text-black text-[5vmin] hover:bg-gray-400 active:bg-gray-500 flex items-center justify-center">
          <i className="bi bi-calculator-fill"></i>
        </button>
        <button
          onClick={() => handleNumber("0")}
          className="col-span-2 bg-gray-700 rounded-full text-white text-[5vmin] hover:bg-gray-800 active:bg-gray-900 flex items-center justify-center h-full w-full"
        >
          0
        </button>
        <button onClick={handleDecimal} className="aspect-square bg-gray-700 rounded-full text-white text-[5vmin] hover:bg-gray-800 active:bg-gray-900 flex items-center justify-center">
          .
        </button>
        <button onClick={calculate} className="aspect-square bg-orange-400 rounded-full text-white text-[5vmin] hover:bg-orange-500 active:bg-orange-600 flex items-center justify-center">
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;