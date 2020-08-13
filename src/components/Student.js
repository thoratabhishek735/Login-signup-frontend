import React from 'react'


export default function Student() {
  
    const user = JSON.parse(localStorage.getItem("user"));
    return (
        <div>
            <h1>Hi student {user?user.name:""}</h1>

            <button type="button" className="btn btn-lg btn-danger d-block mx-auto w-20 mt-5" onClick={localStorage.clear()}>Logout</button>
        </div>
    )
}
