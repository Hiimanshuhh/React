import React, { useEffect } from 'react'

const Fetching = () => {
  useEffect(() => {
    const apiF = async () => {
      const api = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await api.json();
      console.log(data);
    }
    apiF();
  }, [])
  
  return (
    <div>Fetching</div>
  )
}

export default Fetching