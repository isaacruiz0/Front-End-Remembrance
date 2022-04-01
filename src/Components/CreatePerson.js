import React from 'react'
import {useState, useNavigate} from 'react'
import apiUrl from '../apiURL'

function CreatePerson() {
    // I am going to need to do a post request and within that i will have use states that are correlated with the user's input
    // these two usestates will handle the change of user input
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    let navigate = useNavigate();

    const firstHandleChange = (event) => {
        event.preventDefault();
        setFirstName(event.target.value)
    }
    const lastHandleChange = (event) => {
        event.preventDefault();
        setLastName(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(apiUrl + '/createperson', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        "firstName":firstName.toString(),
        "lastName":lastName.toString()
    })
  })
      }


  return (
    <div className='create-person-div'>
        <div className='leftSideBar'></div>
        <main>
            <div className='person-box'>
              <h2 className='box-title'>Who would you like to remember?</h2>
              <form className='person-info-form' onSubmit={handleSubmit}>
                <label>First Name</label>
                <input type='text' placeholder="" onChange={firstHandleChange}/>
                <label>Last Name</label>
                <input type='text' placeholder="" onChange={lastHandleChange}/>
                <input type="submit" value="Submit" />
              </form>
            </div>
        </main>
        <div className='rightSideBar'></div>
    </div>
  )
}

export default CreatePerson