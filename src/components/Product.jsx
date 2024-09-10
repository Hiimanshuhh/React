import React from 'react'

const Product = ({Title,Name,Model,Space,Color}) => {
  return (
    <>
    <div>
      <h1>{Title}</h1>
      <h3>Name Of the Phone is : {Name}</h3>
      <h3>Model Of the Phone is : {Model}</h3>
      <h3>Space the phone has is : {Space}</h3>
      <h3>Color of the phone is : {Color}</h3>
    </div>
    </>
  )
}

export default Product