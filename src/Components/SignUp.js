import React from 'react'
import { useNavigate } from "react-router-dom"


function SignUp() {
  let navigate = useNavigate();
  return (
    <div className='signUp'>
        <div className='leftSideBar'></div>
        <main>
            <h1 className='title' onClick={()=>{navigate("/")}}>Remembrance</h1>
            <div className='signUpBox'>
              <h1 className='box-title'>Sign Up</h1>
              <p>Lets start remembering the little things</p>
              <form className='signup-form'>
                <label>First Name</label>
                <input type='text' placeholder="" />
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

export default SignUp