import React, { useState } from 'react'
import { data } from './data';
import SinglePerson from './SinglePerson';

const PropDrilling = () => {
    const [people,setPeople] = useState(data);
    const removePerson = (id) => {
        const newPer = people.filter((item)=>{
            return item.id !==id;
        })
        setPeople(newPer);
    }
  return (
    <>
        {people.map((person)=>{
            return <SinglePerson {...person} remove = {removePerson} />
        })}
    </>
  )
}

export default PropDrilling