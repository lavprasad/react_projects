import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [newNumber, setNewNumber] = useState(true);

  const handleNumber = (num) => {
    if (newNumber) {
      setDisplay(num);
      setNewNumber(false);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperation = (op) => {
    setPreviousValue(parseFloat(display));
    setOperation(op);
    setNewNumber(true);
  };

  const calculate = () => {
    if (!operation) return;
    const current = parseFloat(display);
    let result;
    switch (operation) {
      case "+":
        result = previousValue + current;
        break;
      case "-":
        result = previousValue - current;
        break;
      case "×":
        result = previousValue * current;
        break;
      case "÷":
        result = previousValue / current;
        break;
      default:
        return;
    }
    setDisplay(result.toString());
    setOperation(null);
    setPreviousValue(null);
    setNewNumber(true);
  };

  const handleClear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setNewNumber(true);
  };

  const handleSign = () => {
    setDisplay((prev) => (parseFloat(prev) * -1).toString());
  };

  const handleCal = () => {
    setDisplay("NA");
    // return(<div><h1>Not implemented</h1></div>)
  };

  const handlePercent = () => {
    setDisplay((prev) => (parseFloat(prev) / 100).toString());
  };

  const handleDecimal = () => {
    if (newNumber) {
      setDisplay("0.");
      setNewNumber(false);
    } else if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  return (
    <div className="flex flex-col bg-black p-4 rounded-2xl shadow-xl w-80">
      <div className="text-white text-right text-6xl font-light mb-4 h-20 overflow-hidden">
        {display}
      </div>

      <div className="grid grid-cols-4 gap-4">
        {/* Top Row */}
        <button
          onClick={handleClear}
          className="col-span-1 bg-gray-300 rounded-full h-16 text-black text-2xl hover:bg-gray-400 active:bg-gray-500"
        >
          {display === "0" ? "AC" : "C"}
        </button>
        <button
          onClick={handleSign}
          className="bg-gray-300 rounded-full h-16 text-black text-2xl hover:bg-gray-400 active:bg-gray-500"
        >
          ±
        </button>
        <button
          onClick={handlePercent}
          className="bg-gray-300 rounded-full h-16 text-black text-2xl hover:bg-gray-400 active:bg-gray-500"
        >
          %
        </button>
        <button
          onClick={() => handleOperation("÷")}
          className="bg-orange-400 rounded-full h-16 text-white text-2xl hover:bg-orange-500 active:bg-orange-600"
        >
          ÷
        </button>

        {/* Number Pad */}

        <button
          onClick={() => handleNumber("7")}
          className="bg-gray-700 rounded-full h-16 text-white text-2xl hover:bg-gray-800 active:bg-gray-900"
        >
          7
        </button>

        <button
          onClick={() => handleNumber("8")}
          className="bg-gray-700 rounded-full h-16 text-white text-2xl hover:bg-gray-800 active:bg-gray-900"
        >
          8
        </button>
        <button
          onClick={() => handleNumber("9")}
          className="bg-gray-700 rounded-full h-16 text-white text-2xl hover:bg-gray-800 active:bg-gray-900"
        >
          9
        </button>
        <button
          onClick={() => handleOperation("×")}
          className="bg-orange-400 rounded-full h-16 text-white text-2xl hover:bg-orange-500 active:bg-orange-600"
        >
          ×
        </button>
        <button
          onClick={() => handleNumber("4")}
          className="bg-gray-700 rounded-full h-16 text-white text-2xl hover:bg-gray-800 active:bg-gray-900"
        >
          4
        </button>
        <button
          onClick={() => handleNumber("5")}
          className="bg-gray-700 rounded-full h-16 text-white text-2xl hover:bg-gray-800 active:bg-gray-900"
        >
          5
        </button>
        <button
          onClick={() => handleNumber("6")}
          className="bg-gray-700 rounded-full h-16 text-white text-2xl hover:bg-gray-800 active:bg-gray-900"
        >
          6
        </button>
        <button
          onClick={() => handleOperation("-")}
          className="bg-orange-400 rounded-full h-16 text-white text-2xl hover:bg-orange-500 active:bg-orange-600"
        >
          -
        </button>
        <button
          onClick={() => handleNumber("1")}
          className="bg-gray-700 rounded-full h-16 text-white text-2xl hover:bg-gray-800 active:bg-gray-900"
        >
          1
        </button>
        <button
          onClick={() => handleNumber("2")}
          className="bg-gray-700 rounded-full h-16 text-white text-2xl hover:bg-gray-800 active:bg-gray-900"
        >
          2
        </button>
        <button
          onClick={() => handleNumber("3")}
          className="bg-gray-700 rounded-full h-16 text-white text-2xl hover:bg-gray-800 active:bg-gray-900"
        >
          3
        </button>
        <button
          onClick={() => handleOperation("+")}
          className="bg-orange-400 rounded-full h-16 text-white text-2xl hover:bg-orange-500 active:bg-orange-600"
        >
          +
        </button>

        {/* Bottom Row */}
        <button
          onClick={handleCal}
          className="bg-gray-300 rounded-full h-16 text-black text-2xl hover:bg-gray-400 active:bg-gray-500"
        >
          <i class="bi bi-calculator-fill"></i>
        </button>

        <button
          onClick={() => handleNumber("0")}
          className=" bg-gray-700 rounded-full h-16 text-white text-2xl text-left pl-8 hover:bg-gray-800 active:bg-gray-900"
        >
          0
        </button>
        <button
          onClick={handleDecimal}
          className="bg-gray-700 rounded-full h-16 text-white text-2xl hover:bg-gray-800 active:bg-gray-900"
        >
          .
        </button>
        <button
          onClick={calculate}
          className="bg-orange-400 rounded-full h-16 text-white text-2xl hover:bg-orange-500 active:bg-orange-600"
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
