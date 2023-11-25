import React, { useState } from 'react'

const Reducer = () => {
  const [todo,setTodo] = useState('');
  const [message,setMessage] = useState('');
  const [error,setError] = useState(false);
  const [success,setSuccess] = useState(false);
  const [data,setData] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    if(!todo){
      setSuccess(false)
      setError(true);
      setMessage('Please enter the field');
    }else{
      setError(false)
      setSuccess(true);
      setMessage('Todo added successfully');
      setData([...data,todo])
    }
  }


  return (
    <>
       <div className="container shadow p-3 col-lg-7">
        <h1 className="display-1">
          UseReducer Todo List
        </h1>
        <form>
          <label htmlFor="">Name</label>
          <input value={todo} onChange={(e)=>setTodo(e.target.value)} className='form-control' type="text" name="" id="" />
          <p className='text-danger fw-bolder'>{error && message}</p>
          <p className='text-success fw-bolder'>{success && message}</p>
          <button onClick={handleClick} className='btn btn-dark d-block w-25 my-2 m-auto'>
            Add Todo
          </button>
        </form>
       </div>
    </>
  )
}

export default Reducer