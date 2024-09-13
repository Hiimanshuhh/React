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
    setFormData({...formData,[name]:value})
  }
  const submitHandler=(e)=>{
    e.preventDefault();
    alert("Your Form Has Been Submitted");
    console.log(formData);
    setFormData(" ");
  }
  return (
    <>
    <div>
      <form onSubmit={submitHandler}>
        <div><input type="text"  value={formData.name} name='name' onChange={formHandler}/></div>
        <div><input type="email" value={formData.email} name='email' onChange={formHandler}/></div>
        <div><input type="password" value={formData.password} name='password' onChange={formHandler}/></div>
        <div><input type="number" value={formData.age} name='age' onChange={formHandler}/></div>
        <div><input type="number" value={formData.phone} name='phone' onChange={formHandler}/></div>
        <div><button>Submit</button></div>
      </form>
    </div>
    </>
  )
}

export default MultipleForm