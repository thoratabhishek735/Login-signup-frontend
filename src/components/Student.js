import React from 'react'

export default function Student() {
    return (
        <div>
            <h1>Hi student section</h1>

            <button type="button" className="btn btn-lg btn-danger d-block mx-auto w-20 mt-5" onClick={localStorage.clear()}>Logout</button>
        </div>
    )
}
