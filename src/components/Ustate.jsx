import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Ustate = () => {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    document.title = counter;
    console.log("Effect Is Running");
  }, [counter])
  
  return (
    <>
    <div>
      <h1>{counter}</h1>
      <button onClick={()=>setCounter(counter+1)}>Increase</button>
      <button onClick={()=>setCounter(counter-1)}>Decrease</button>
    </div>
    </>
  )
}

export default Ustate