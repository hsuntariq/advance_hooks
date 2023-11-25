import React, { useRef } from 'react'
// import './styles.css'
const Ref = () => {
    const txt1 = useRef();
    const txt2 = useRef();  
    // let inc = 0;
    const handleClick = () => {
       console.log(txt1.current)
    }
  return (
    <>
    <div className="container text-center">
        <h1 ref={txt1} >Some text 1</h1>
        <h2 ref={txt2}>Some text 2</h2>
        <button onClick={handleClick} className="btn btn-dark w-25 m-auto">
            Click Me
        </button>
    </div>
   
    
    </>
  )
}

export default Ref