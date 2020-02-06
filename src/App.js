import React, { useState } from "react";
import "./styles.css";
import Number from "./Number";

export default function App() {
  const [number, setNumber] = useState(42);

  function Even() {
    return <div>even</div>;
  }

  function Odd() {
    return <div>odd</div>;
  }

  return (
    <div className="App">
      <Number number={number} setNumber={setNumber} />
      {number % 2 === 0 ? <Even /> : <Odd />}
    </div>
  );
}
