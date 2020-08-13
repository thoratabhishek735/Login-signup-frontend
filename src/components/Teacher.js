import React from 'react'

export default function Teacher() {
    const user = JSON.parse(localStorage.getItem("user"));
  
    return (
        <>
    <h1 className="text-center">Welcome teacher {user?user.name:""}</h1>



    <button type="button" className="btn btn-lg btn-danger d-block mx-auto w-20 mt-5" onClick={localStorage.clear()}>Logout</button>
    
    </>
    )
}
