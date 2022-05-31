import React from 'react'
import { useNavigate } from "react-router-dom"
import { useState } from 'react';
import axios from 'axios'

function SignUp() {
  let navigate = useNavigate();
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  
  const signUpRequest = () =>{
    axios
      .post(
        "http://localhost:6000/user/signup",
        {
          name,
          username,
          password
        }
      )
      .then((res) =>{
        if (res.status === 200){
          sessionStorage.setItem("accessToken", res.data.accessToken)
          sessionStorage.setItem("username", res.data.username)
          sessionStorage.setItem("name", res.data.name)

        }
      })
  }

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
                <input type='text' placeholder="Enter Name" value={name} onChange = {(e) => {setName(e.target.value)}} />
                <label>Email</label>
                <input type='text' placeholder="Enter Email" value={username} onChange = {(e) => {setUsername(e.target.value)}} />
                <label>Password</label>
                <input type='text' placeholder="Enter Password" value={password} onChange = {(e) => {setPassword(e.target.value)}} />
                <input type="button" value="Submit" onCliick={signUpRequest} />
              </form>
              <div className='error'>{error}</div>
            </div>
        </main>
        <div className='rightSideBar'></div>
    </div>
  )
}

export default SignUp