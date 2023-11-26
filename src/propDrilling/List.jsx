import React from 'react'

const List = ({id,name,email,age,rem}) => {
  return (
    <>
        <div className="container">
            <div className="card my-2">
                <h4>Name:{name}</h4>
                <a>Name:{email}</a>
                <h6>Age:{age}</h6>
                <button onClick={()=>rem(id)} className="btn btn-danger">
                    Delete
                </button>
            </div>
        </div>
    </>
  )
}

export default List