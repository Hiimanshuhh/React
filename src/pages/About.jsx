import React from 'react'

const About = () => {
  const arr = [
    {id: "Mern", course_name: "Mern_Stack", price: "50000", duration: "5 months"},
    {id: "Java", course_name: "Java", price: "40000", duration: "5 months"},
    {id: "Python", course_name: "Python", price: "30000", duration: "5 months"},
    {id: "Cpp", course_name: "Cpp", price: "20000", duration: "5 months"}
  ]
  return (
    <>
    <div>
      <ul>
        {arr.map((data)=><div key={data.id}>
          <li>{data.course_name}</li>
        </div>)}
      </ul>
    </div>
    </>
  )
}

export default About