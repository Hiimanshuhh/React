import React from 'react'
import Marks from './Marks'

const Intro = () => {
  const person = {
    name: "Himanshu Joshi",
    section: "802_JT",
    group: "A",
    uid: "22BCS14648"
  }
  return (
    <>
    <div>
      <h1>Introduction</h1>
      <h3>Name : {person.name}</h3>
      <h3>Section : {person.section}</h3>
      <h3>Group : {person.group}</h3>
      <h3>UID : {person.uid}</h3>
    </div>
    <Marks />
    </>
  )
}

export default Intro