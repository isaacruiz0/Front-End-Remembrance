import React from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { useState, useEffect } from 'react';

import './login.scss'

function Login() {

useEffect(() => {
  window.scrollTo(0, 0)
}, [])

let navigate = useNavigate();
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState("")

const loginRequest = () =>{
  axios
    .post(
      // The link to our server
      "https://damp-dawn-48917.herokuapp.com/user/login",
      // These credentials are sent to the backend login route
      {
        username,
        password
      }
    )
    // The server will respond with an accessToken, the user's username and the name of the user
    .then((res) =>{
      if ( res.status === 200 ){
        sessionStorage.setItem("accessToken", res.data.accessToken);
        sessionStorage.setItem("username", res.data.username);
        sessionStorage.setItem("name", res.data.name)
        // Then we will go to the dashboard where a jwt will be sent alongside a get request
        navigate("/dashboard")
      }
      else if( res.status === 500 ) {
        setError("Error Signing In")
      }
    })

}


  return (
    <div className='loginDiv'>
      <nav>Login</nav>
        <main>
          <div className='login-box'>
            <form className='login-form'>
              <h1 className='title' onClick={()=>{navigate("/")}}>Remembrance</h1>
              <div className="inputField">
                <label>Email</label>
                <input type='Email' placeholder="Enter Email" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <label>Password</label>
                <input type='Password' placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="button" value="Submit" onClick={loginRequest}/>
                <br/>
                <span onClick={()=>{navigate("/signup")}}>Don't have an account?</span>
              </div>
            </form>
            {/* This will pop up if the user failed to log in */}
            <div className='error'>{error}</div>
          </div>
        </main>
    </div>
  )
}

export default Login