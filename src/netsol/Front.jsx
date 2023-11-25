import React, { useRef } from 'react'
import './styles.css'
import Sidebar from './Sidebar'
const Front = () => {
    const click = useRef()
    const sideDiv = useRef()
    const handleClick = () => {
       sideDiv.current.classList.toggle('show-sidebar')

    }
    return (
        <>
            <Sidebar side={sideDiv}/>
            <div className="row front justify-content-center align-items-center">
                <div className="col-sm-2">
                    <div onClick={handleClick} ref={click} className="menu text-center">
                        <p>MENU</p>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="col-sm-10">
                    <h1 className='display-1 fw-bolder'>adaptive</h1>
                    <h2>to your business, your growth & the future.</h2>
                        <p>Proudly serving the world's top asset finance & leasing companies with smart software technology for over four decades.</p>
                </div>
            </div>
        </>
    )
}

export default Front