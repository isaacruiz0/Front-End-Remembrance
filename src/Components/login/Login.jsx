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

const loginRequest = async (e) =>{
  e.preventDefault();
  try{
    // The link to our server
    // These credentials are sent to the backend login route
    let response = await axios.post("https://damp-dawn-48917.herokuapp.com/user/login",{
        username,
        password
      })
    // The server will respond with an accessToken, the user's username and the name of the user

    if (response.status === 200){
      await sessionStorage.setItem('accessToken', response.data.accessToken);
      await sessionStorage.setItem("username", response.data.username);
      await sessionStorage.setItem("name", response.data.name)
      navigate("/dashboard")
    }
    else if (response.status === 500) {
      setError("Error signing in, please try again later")
    }
  }
  catch(err){
   console.log(err)
   setError("Error signing in, please try again later")
  }

}


  return (
    <div className='loginDiv'>
      <svg className='topSvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E8B987" fill-opacity="1" d="M0,32L34.3,48C68.6,64,137,96,206,128C274.3,160,343,192,411,192C480,192,549,160,617,128C685.7,96,754,64,823,53.3C891.4,43,960,53,1029,69.3C1097.1,85,1166,107,1234,117.3C1302.9,128,1371,128,1406,128L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
      <nav><h1>Login</h1></nav>
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
        <svg className='bottomSvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E8B987" fill-opacity="1" d="M0,32L34.3,48C68.6,64,137,96,206,128C274.3,160,343,192,411,192C480,192,549,160,617,128C685.7,96,754,64,823,53.3C891.4,43,960,53,1029,69.3C1097.1,85,1166,107,1234,117.3C1302.9,128,1371,128,1406,128L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
    </div>
  )
}

export default Login