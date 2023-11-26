import React from 'react'
import List from './List'

const SinglePerson = ({id,name,age,email,remove}) => {
  return (
    <>
        <List id={id} name={name} age= {age} email ={email} rem={remove} />
    </>
  )
}

export default SinglePerson