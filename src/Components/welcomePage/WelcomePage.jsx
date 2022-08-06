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
            <div className="register" onClick={()=>{navigate("/login")}}>
              <h1 className='login'>Login</h1>
            </div>
        </nav>
        <main>
          <h2 className='quote'>
            Genuine relationships require a  genuine interest
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
        <svg className='bottomSvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E8B987" fill-opacity="1" d="M0,320L34.3,282.7C68.6,245,137,171,206,128C274.3,85,343,75,411,69.3C480,64,549,64,617,80C685.7,96,754,128,823,170.7C891.4,213,960,267,1029,261.3C1097.1,256,1166,192,1234,181.3C1302.9,171,1371,213,1406,234.7L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>


    </div>
  )
}

export default WelcomePage


