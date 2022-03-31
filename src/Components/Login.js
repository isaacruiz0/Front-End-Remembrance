import React from 'react'
import { useNavigate } from "react-router-dom"


function Login() {
let navigate = useNavigate();
  return (
    <div className='loginDiv'>
        <div className='leftSideBar'></div>
        <main>
            <h1 className='title' onClick={()=>{navigate("/")}}>Remembrance</h1>
            <div className='login-box'>
              <h1 className='box-title'>Login</h1>
              <form className='login-form'>
                <label>Email</label>
                <input type='text' placeholder="" />
                <label>Password</label>
                <input type='text' placeholder="" />
                <input type="button" value="Submit" />
              </form>
            </div>
        </main>
        <div className='rightSideBar'></div>
    </div>
  )
}

export default Login