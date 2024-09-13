import React from 'react'
import { useState } from 'react'

const MultipleForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    phone: ""
  })
  const formHandler =(e)=>{
    const{name,value} = e.target;
  }
  return (
    <>
    <div>
      <form>
        <div><input type="text"  value={formData.name} name='name'/></div>
        <div><input type="email" value={formData.email} name='email'/></div>
        <div><input type="password" value={formData.password} name='password'/></div>
        <div><input type="number" value={formData.age} name='age'/></div>
        <div><input type="number" value={formData.phone} name='phone'/></div>
        <div><button>Submit</button></div>
      </form>
    </div>
    </>
  )
}

export default MultipleForm