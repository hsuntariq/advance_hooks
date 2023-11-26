export const reducer = (state,action) => {

    if(action.type === 'EMPTY'){
      return {
        ...state,
        err:true,
        message:'Please enter some value'
      }

      
    }
    if(action.type === 'RESET'){
      return {
        ...state,
        err:false,
        success:false,
        message:''
      }
    }
    if(action.type === 'ADD_TODO'){
      return {
        ...state,
        success: true,
        message:'Todo added successfully',
        err:false,
        todos:[...state.todos,action.payload]
      }
    }

    return state;
  }
