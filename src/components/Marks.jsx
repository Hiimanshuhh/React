import React from 'react'


const Marks = () => {
  const Numbers = {
    Math: 90,
    Physics: 40,
    Hindi: 69,
    English: 68,
    Science: 77
  }
  return (
  <>
  <div>
    <h1>Marks</h1>
    <h3>In Maths: {Numbers.Math}</h3>
    <h3>In Physics: {Numbers.Physics}</h3>
    <h3>In Hindi: {Numbers.Hindi}</h3>
    <h3>In English: {Numbers.English}</h3>
    <h3>In Science: {Numbers.Science}</h3>
  </div>
  </>
  )
}

export default Marks