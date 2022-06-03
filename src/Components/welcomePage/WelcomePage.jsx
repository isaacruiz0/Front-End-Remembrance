import React from 'react'
import { useNavigate } from "react-router-dom"
import './welcomePage.scss'
import { FaHandshake } from "react-icons/fa";


function WelcomePage() {
  let navigate = useNavigate();


  return (
    <div className='welcomePage'>
        
        <nav className='navBar'>
            <h1 className='title'>Remembrance</h1>
            <div className="register">
              <h1 className='login'onClick={()=>{navigate("/login")}}>Login</h1>
            </div>
        </nav>
        <main>
          <h2 className='quote'>
            Genuine relationships require a genuine interest
          </h2>

          <div className="icon">
            <div className="iconPadding">
            <FaHandshake className='handshake' style={{ transform: 'rotate(25deg)' }}/>
            </div>
            </div>          
        </main>
        <div className="createAccount">
          <h1 className='signup'onClick={()=>{navigate("/signup")}}>Create Account</h1>  
          <h1 className='loginMobile'onClick={()=>{navigate("/login")}}>Login</h1>

        </div>


    </div>
  )
}

export default WelcomePage


