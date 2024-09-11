import React from 'react'

const ShowProduct = () => {
  let products = [
    {id: 1, title: "iphone12", space: 64},
    {id: 2, title: "iphone13", space: 128},
    {id: 3, title: "iphone14", space: 1000},
    {id: 4, title: "iphone15", space: 2000},
  ];
  return (
    <>
    <div>
      {products.map((data) => (
        <div key={data.id}>
          <h1>Title is : {data.title}</h1>
          <h1>Space is : {data.space}</h1>

        </div>        
      ))}
    </div>
    </>
  )
}

export default ShowProduct