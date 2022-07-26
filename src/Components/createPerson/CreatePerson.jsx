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
        setTimeout(()=>{setOpacitySpan(false)}, 1750);

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
                    <label>First Name </label>
                    <input type='text' placeholder="" onChange={firstHandleChange} value={firstName}/>
                    <label>Last Name </label>
                    <input 
                        type='text'
                        placeholder="" 
                        onChange={lastHandleChange} 
                        value={lastName}/>
                    <label>Birthday </label>
                    <input 
                        type='text' 
                        placeholder="" 
                        onChange={birthdayHandle} 
                        value={birthDay}/>
                        <label>Gender </label>
                    <input 
                        type='text' 
                        placeholder=""
                        onChange={genderHandle} 
                        value={gender}/>
                    <label>Pronouns </label>
                    <input 
                        type='text' 
                        placeholder="" 
                        onChange={pronounsHandle} 
                        value={pronouns}/>
                    <label>Relationship </label>
                    <input 
                        type='text' 
                        placeholder="" 
                        onChange={relationshipHandle} 
                        value={relationship}/>
                    <input type="submit" value="Submit"/>
                    <div className='return-div'>
                    <button className='return-to-dashboard' onClick={()=>navigate('/dashboard')}> Return to Dashboard</button>
                    </div>
                </div> 
              </form>
            </div>
        </main>
    </div>
  )
}

export default CreatePerson