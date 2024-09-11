import React from 'react'

const Events = () => {
  const handleClick = () => {
    alert("Hi My Name Is Himanshu Joshi");
  }
  const addition = (a) => {
    alert (2+a);
  }
  return (
    <>
    <div>
      <h1>In Learning Phase</h1>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => addition(5)}>Hi </button>
    </div>
    </>
  )
}

export default Events