import React from 'react'

const Filter = () => {
  let prods =[
    {id:1, name:"Product1", category: "house"},
    {id:1, name:"Product2", category: "house"},
    {id:1, name:"Product3", category: "outdoor"},
    {id:1, name:"Product4", category: "outdoor"},
    {id:1, name:"Product5", category: "indoor"},
    {id:1, name:"Product6", category: "indoor"},
  ]
  const filData = prods.filter((data)=>data.category == "indoor")
  console.log(filData);
  return (
    <>
    <div>
      {filData.map((data)=>(
        <div key={data.id}>
          <h1>Name of the product is : {data.name}</h1>
          <h1>Category of the product is : {data.category}</h1>
        </div>
      ))}
    </div>
    </>
  )
}

export default Filter