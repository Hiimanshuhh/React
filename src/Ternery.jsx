import React from 'react'

const Ternery = ({name, age}) => {
  return (
    <>
    <div>
      <h1>Name Is : {name}</h1>
      <h1>Age Is : {age}</h1>
      <h1>Status: {age>18 ? <p>You Can Drive</p>: <p>You Can't Drive</p>}</h1>
      <h1>Eligibility: {age==18 && <p>Hii</p>}</h1>
    </div>
    </>
  )
}

export default Ternery