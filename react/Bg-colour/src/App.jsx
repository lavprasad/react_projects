import { useState } from "react";
import './App.css'


function App() {
  const [color, setColor] = useState("yellow");

  return (
    <div
      className="w-full h-screen"
      style={{backgroundColor:color}}
    ></div>
  )
}

export default App;
