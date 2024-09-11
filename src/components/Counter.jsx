import React from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const addCounter = () =>{
    setCounter(counter + 1);
  }
  const minusCounter = () => {
    setCounter(counter - 1);
  }
  return (
    <>
    <div>
      <h1>This Is A Counter App</h1>
      <button onClick={addCounter}>Increase</button>
      <button onClick={minusCounter}>Decrease</button>
    </div>
    </>
  )
}

export default Counter