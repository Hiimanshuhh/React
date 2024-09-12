import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Fetching = () => {
  const [apiData, setApiData] = useState([])
  useEffect(() => {
    const Fetchd = async() =>{
      const api = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await api.json();
      setApiData(data);
      console.log(data);
    }
    Fetchd();
  }, [])
  
  return (
    <>
    <div>
      <h1>Fetching the data</h1>
      {apiData.map((data)=>(
        <div key={data.id}>
          <h2>{data.name}</h2>
          <h2>{data.phone}</h2>
        </div>
      ))}
    </div>
    </>
  )
}

export default Fetching