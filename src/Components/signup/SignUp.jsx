import React from 'react'
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react';
import axios from 'axios'
import './signup.scss'
import SyncLoader from "react-spinners/SyncLoader";

function SignUp() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  let navigate = useNavigate();
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  
  // Sets loading to false so it doesn't display
  const [loading, setLoading] = useState(false)
  // If false then the submit button will be display none
  const [displaySubmit, setDisplaySubmit] = useState(true)
  
  const signUpRequest = async (e) =>{
      e.preventDefault();
      try {
        setDisplaySubmit(false)
        setLoading(true)
        let response = await axios.post('https://damp-dawn-48917.herokuapp.com/user/signup',{
            name,
            username,
            password
        })
        console.log(response)
        if (response.status === 200) {
          sessionStorage.setItem("accessToken", response.data.accessToken)
          sessionStorage.setItem("username", response.data.username)
          sessionStorage.setItem("name", response.data.name)
          navigate("/dashboard")
        }
        else if (response.status === 500){
          setError("Error creating account, please try again later")
          console.log(response)
          setLoading(false)
          setDisplaySubmit(true)
        }
    }
    catch (err) {
      console.log(err)
      setError("Error creating account, please try again later")
      setLoading(false)
      setDisplaySubmit(true)
    }
    
  }

  return (
    <div className='signUp'>
<svg className='topSvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E8B987" fill-opacity="1" d="M0,288L34.3,282.7C68.6,277,137,267,206,266.7C274.3,267,343,277,411,277.3C480,277,549,267,617,250.7C685.7,235,754,213,823,181.3C891.4,149,960,107,1029,90.7C1097.1,75,1166,85,1234,112C1302.9,139,1371,181,1406,202.7L1440,224L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
      <nav><h1>Create Account</h1></nav>
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
                  <SyncLoader 
                  color="#E8B987" 
                  speedMultiplier={1.25}
                  cssOverride={{
                    'margin': '30px 0 20px'
                  }}
                  loading = {loading} 
                  size={20} />
                  <input type="button" value="Submit" onClick={signUpRequest} style={{display:displaySubmit ? "block" : "none"}} /><br/>
                  <span onClick={()=>{navigate("/login")}}>Already have an account?</span>
                </div>
              </form>
              <div className='error'>{error}</div>
            </div>
        </main>
        <svg className='bottomSvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E8B987" fill-opacity="1" d="M0,288L34.3,282.7C68.6,277,137,267,206,266.7C274.3,267,343,277,411,277.3C480,277,549,267,617,250.7C685.7,235,754,213,823,181.3C891.4,149,960,107,1029,90.7C1097.1,75,1166,85,1234,112C1302.9,139,1371,181,1406,202.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
    </div>
  )
}

export default SignUp