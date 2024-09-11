import React from 'react'
import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const addCounter = () =>{
    setCounter(counter + 1);
    console.log("counter is : ", counter);

  }
  const minusCounter = () => {
    setCounter(counter - 1);
    console.log("counter is : ", counter);
  }
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={addCounter}>Increase</button>
      <button onClick={minusCounter}>Decrease</button>
    </div>
  )
}

export default Counter