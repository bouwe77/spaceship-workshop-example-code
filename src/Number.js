import React, { useState } from "react";

export default function Number(props) {
  function decrement() {
    props.setNumber(props.number - 1);
  }

  function increment() {
    props.setNumber(props.number + 1);
  }

  return (
    <div className="bla">
      <button onClick={decrement}>-</button>
      {props.number}
      <button onClick={increment}>+</button>
    </div>
  );
}
