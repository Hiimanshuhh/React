import React from 'react'
import { Link } from 'react-router-dom'
const Product = () => {
  const arr = [
    { id: 1, name: 'Product 1', price: 10 , weight: 100},
    { id: 2, name: 'Product 2', price: 10 , weight: 200},
    { id: 3, name: 'Product 3', price: 10 , weight: 300},
    { id: 4, name: 'Product 4', price: 10 , weight: 400}
  ]
  return (
    <>
    <div>
      <ul>
      {arr.map((data)=><div key={data.id}>
        <li> <Link to={`/product/${data.id}`} >{data.name}</Link> </li>
      </div>)}
      </ul>
    </div>
    </>
  )
}

export default Product