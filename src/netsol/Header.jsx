import React, { useRef } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
    const list = useRef();
    const icon = useRef();
    const showList = () => {
        list.current.classList.toggle('show')
        console.log(icon)
        
    }
  return (
    <>
        <div className="d-flex justify-content-between col-lg-11 p-4 m-auto">
            <img style={{
                width:'50px'
            }} src="https://netsoltech.com/images/netsol-logo-white.svg" alt="" />
            <div className="dropdown">
                <p>English  <RiArrowDropDownLine onClick={showList} style={{
                    cursor:'pointer'
                }} size={30} /> </p>
                <ul ref={list} className='list-unstyled '>
                    <li className='px-2'>Language</li>
                    <li className='px-2'>Language</li>
                    <li className='px-2'>Language</li>
                    <li className='px-2'>Language</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Header