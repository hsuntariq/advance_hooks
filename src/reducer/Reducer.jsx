import React, { useReducer } from 'react'

const Reducer = () => {


    // define useReducer

    const [state,dispatch] = useReducer(reducer,initialState);


    
  return (
    
    <div className="container shadow p-3 col-lg-7">
        <h1 className="display-1">
          UseReducer Todo List
        </h1>
        <form>
          <label htmlFor="">Name</label>
          <input className='form-control' type="text" name="" id="" />
          
          <button className='btn btn-dark d-block w-25 my-2 m-auto'>
            Add Todo
          </button>
        </form>
       </div>
  )
}

export default Reducer