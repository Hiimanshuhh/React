import React from 'react'
import { useState } from 'react'

const FormHandling = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleForm = (e)=>{
    e.preventDefault();
    alert("Your Form Has Been Submitted"+" "+name+" "+email+" "+password);
    setName("");
    setEmail("");
    setPassword("");
  }
  return (
    <><div>
      <form onSubmit={handleForm}>
        <div>Name :   <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/></div>
        <h4>{name}</h4>
        <div>Email : <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/></div>
        <h4>{email}</h4>
        <div>Password : <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/></div>
        <h4>{password}</h4>
        <div><button>Submit</button></div> 
      </form>
    </div>
    </>
  )
}

export default FormHandling
