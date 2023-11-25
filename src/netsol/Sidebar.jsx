import React from 'react'
import './styles.css'
const Sidebar = ({side}) => {
  return (
    <>
    <div ref={side} className="sidebar">
    <h1>sidebar</h1>
    </div>
    </>

  )
}

export default Sidebar