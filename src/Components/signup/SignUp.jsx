import React from 'react'
import { useNavigate } from "react-router-dom"
import { useState } from 'react';
import axios from 'axios'
import './signup.scss'

function SignUp() {
  let navigate = useNavigate();
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  
  const signUpRequest = () =>{
    axios
      .post(
        "http://localhost:5000/user/signup",
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
          navigate("/dashboard")
        }
        else if(res.status === 500){
          setError("Error creating account, please try again.")
        }
      })
      .catch((err) => setError('Error creating account, please try again.'))
  }

  return (
    <div className='signUp'>
      <nav>Create Account</nav>
        <main>
            <div className='signupBox'>
              <form className='signup-form'>
                <h1 className='title' onClick={()=>{navigate("/")}}><span>Welcome to</span><br/> Remembrance</h1>
                <div className="inputField">
                  <label>First Name</label>
                  <input type='Name' placeholder="Enter Name" value={name} onChange = {(e) => {setName(e.target.value)}} />
                  <label>Email</label>
                  <input type='Email' placeholder="Enter Email" value={username} onChange = {(e) => {setUsername(e.target.value)}} />
                  <label>Password</label>
                  <input type='Password' placeholder="Enter Password" value={password} onChange = {(e) => {setPassword(e.target.value)}} />
                  <input type="button" value="Submit" onClick={signUpRequest} /><br/>
                  <span onClick={()=>{navigate("/login")}}>Already have an account?</span>
                </div>
              </form>
              <div className='error'>{error}</div>
            </div>
        </main>
    </div>
  )
}

export default SignUp