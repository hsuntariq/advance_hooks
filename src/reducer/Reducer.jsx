import { useReducer, useState } from "react"
import { reducer } from "./reducer"
const Reducer = () => {
  // make a state
  const [todo,setTodo] = useState('')
  // define reducer/is a function


  // define the initial state of the app
  const initialState = {
      todos:[],
      err:false,
      success:false,
      message:''
  }

  const [state,dispatch] = useReducer(reducer,initialState);

  const handleClick = (e) => {
    e.preventDefault();
    if(!todo){
      dispatch({type:'EMPTY'});
    }else{
      dispatch({type:'ADD_TODO',payload:todo})
    }


    setTimeout(()=>{
      dispatch({type:'RESET'})
    },2000)

    setTodo('')

  }
    
  return (
    
    <div className="container shadow p-3 col-lg-7">
        <h1 className="display-1">
          UseReducer Todo List
        </h1>
        <form onSubmit={handleClick} >
          <label htmlFor="">Name</label>
          <input value={todo} onChange={(e)=>setTodo(e.target.value)} className='form-control' type="text" name="" id="" />
          <p className="text-danger fw-bolder">
            {state.err && state.message}
          </p>
          <button className='btn btn-dark d-block w-25 my-2 m-auto'>
            Add Todo
          </button>
        </form>
       </div>
  )
}

export default Reducer