import React from 'react'
import { useParams, Link } from 'react-router-dom'

const Product_Detail = () => {
  const arr = [
    { id: 1, name: 'Product 1', price: 10 , weight: 100},
    { id: 2, name: 'Product 2', price: 10 , weight: 200},
    { id: 3, name: 'Product 3', price: 10 , weight: 300},
    { id: 4, name: 'Product 4', price: 10 , weight: 400}
  ]
  const {id} = useParams();
  const course_detail = arr.filter((data)=>data.id==id)
  console.log(course_detail)
  return (
    <>
    <div>
      <h1>Course Id is  {id}</h1>
      <h2>Name of the product is : {course_detail[0].name}</h2>
      <h2>Price of the product is : {course_detail[0].price}</h2>
      <h2>Weight of the product is : {course_detail[0].weight}</h2>
    </div>
    <button><Link to={'/product'} >All Products</Link></button>
    </>
  )
}

export default Product_Detail