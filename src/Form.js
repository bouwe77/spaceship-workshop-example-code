import React, { useRef, useState } from "react";

export default function Form() {
  const [number, setNumber] = useState("");
  function changeNumber(event) {
    setNumber(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //... call function and pass the number...
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={number} onChange={changeNumber} />
      <button type="submit">OK</button>
    </form>
  );
}
