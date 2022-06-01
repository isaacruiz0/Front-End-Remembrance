import React from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { useState } from 'react';

function Login() {
let navigate = useNavigate();
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState("")

const loginRequest = () =>{
  axios
    .post(
      // The link to our server
      "http://localhost:5000/user/login",
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
        <div className='leftSideBar'></div>
        <main>
            <h1 className='title' onClick={()=>{navigate("/")}}>Remembrance</h1>
            <div className='login-box'>
              <h1 className='box-title'>Login</h1>
              <form className='login-form'>
                <label>Email</label>
                <input type='text' placeholder="Enter Email" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <label>Password</label>
                <input type='text' placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="button" value="Submit" onClick={loginRequest}/>
              </form>
              {/* This will pop up if the user failed to log in */}
              <div className='error'>{error}</div>
            </div>
        </main>
        <div className='rightSideBar'></div>
    </div>
  )
}

export default Login