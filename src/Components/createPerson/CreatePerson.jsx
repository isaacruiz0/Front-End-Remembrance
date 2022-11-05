import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"

import './createPerson.scss'

function CreatePerson() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    // I am going to need to do a post request and within that i will have use states that are correlated with the user's input
    // these two usestates will handle the change of user input
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthDay, setBirthday] = useState('')
    const [relationship, setRelationship] = useState('')
    const [gender, setGender] = useState('')
    const [pronouns, setPronouns] = useState('')
    const [opacitySpan, setOpacitySpan] = useState(false)

    const navigate = useNavigate()

    // FIRST NAME
    const firstHandleChange = (event) => {
        event.preventDefault();
        setFirstName(event.target.value)
    }
    // LAST NAME
    const lastHandleChange = (event) => {
        event.preventDefault();
        setLastName(event.target.value)
    }
    // BIRTHDAY
    const birthdayHandle = (event) => {
        event.preventDefault();
        setBirthday(event.target.value)
    }
    // RELATIONSHIP
    const relationshipHandle = (event) => {
        event.preventDefault();
        setRelationship(event.target.value)
    }
    // GENDER
    const genderHandle = (event) => {
        event.preventDefault();
        setGender(event.target.value)
    }
    // PRONOUNS
    const pronounsHandle = (event) => {
        event.preventDefault();
        setPronouns(event.target.value)
    }
    // SUBMIT
    const handleSubmit = (event) => {
        setOpacitySpan(true);
        setTimeout(()=>{setOpacitySpan(false)}, 1500);

        event.preventDefault();
        fetch('https://damp-dawn-48917.herokuapp.com/createperson', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ sessionStorage.getItem("accessToken"),
    },
    body: JSON.stringify({
        "firstName":firstName.toString(),
        "lastName":lastName.toString(),
        "birthDay":birthDay.toString(),
        "gender":gender.toString(),
        "pronouns":pronouns.toString(),
        "relationship":relationship.toString(),
        "username": sessionStorage.getItem('username')
    })
    
  }).then(() => {
    setFirstName("");
    setLastName("");
    setBirthday("");
    setGender("");
    setPronouns("");
    setRelationship("");

  })

}





  return (
    <div className='createPerson'>
        <span style={opacitySpan ? {opacity: '1'} : {opacity: '0'}}>Card Created!</span>
        <main>
            <div className='person-box'>
            <header><h1>Create Card</h1></header>
              <form className='person-info-form' onSubmit={handleSubmit}>
                <div className="inputField">
                    <div className="inputLabel">
                        <label>First Name </label>
                        <input type='text' placeholder="" onChange={firstHandleChange} value={firstName}/>
                    </div>
                    <div className="inputLabel">
                        <label>Last Name </label>
                        <input 
                            type='text'
                            placeholder="" 
                            onChange={lastHandleChange} 
                            value={lastName}/>
                        </div>
                    <div className="inputLabel">
                        <label>Birthday </label>    
                        <input 
                            type='text' 
                            placeholder="" 
                            onChange={birthdayHandle} 
                            value={birthDay}/>
                    </div>
                    <div className="inputLabel">
                        <label>Gender </label>
                        <input 
                            type='text' 
                            placeholder=""
                            onChange={genderHandle} 
                            value={gender}/>
                    </div>
                    <div className="inputLabel">
                        <label>Pronouns </label>
                        <input 
                            type='text' 
                            placeholder="" 
                            onChange={pronounsHandle} 
                            value={pronouns}/>
                    </div>
                    <div className="inputLabel">
                        <label>Relationship </label>
                       <input 
                            type='text' 
                            placeholder="" 
                            onChange={relationshipHandle} 
                            value={relationship}/>
                    </div>
                    <div className="submitReturn">
                        <input type="submit" value="Submit"/>
                        <div className='return-div'>
                            <button className='return-to-dashboard' onClick={()=>navigate('/dashboard')}> Return to Dashboard</button>
                        </div>
                    </div>
                </div> 
              </form>
            </div>
            <svg className='bottomSvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E8B987" fill-opacity="1" d="M0,320L34.3,282.7C68.6,245,137,171,206,128C274.3,85,343,75,411,69.3C480,64,549,64,617,80C685.7,96,754,128,823,170.7C891.4,213,960,267,1029,261.3C1097.1,256,1166,192,1234,181.3C1302.9,171,1371,213,1406,234.7L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg> 
        </main>
        
    </div>
  )
}

export default CreatePerson