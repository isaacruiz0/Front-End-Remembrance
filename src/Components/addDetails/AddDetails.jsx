import React from 'react'
import './addDetails.scss'
import { useState, useEffect } from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios'

function AddDetails() {

    let location = useLocation();
    const navigate = useNavigate()

    const [displayDetails, setDisplayDetails] = useState([])
    const [inputField, setInputField] = useState('')
    const [inputTrait, setInputTrait] = useState('')
    // This is to display the extra details
    const [displayExtra, setDisplayExtra] = useState('')

    const log = console.log
    // This idea was passed down from the person we clicked on 
    const personId = location.state.id

    // This function retrieves the data from a specific person
    const getPerson = async () => {
        log(personId)
        try{
            // This returns the person of the id that was passed by the useNavigate hook on the card 
            const response = await axios.get(`https://damp-dawn-48917.herokuapp.com/people/${personId}/`)
            const details = await response.data
            setDisplayDetails(details)
            let extraDetailsArray = response.data.extraDetails.map((trait, index) => {
                return(<h2 key={index}><span>{trait.key}</span>{trait.value}</h2>)
            })
            setDisplayExtra(extraDetailsArray)
        } catch(err) {
            console.log(err)
        }
    }
    // This function will add a specific trait to a person and it will call the getPerson() function to display the newly added trait
    const handleSubmit = async (e) =>{
        e.preventDefault()             
        const fieldTrait = {extraDetails: [{key: inputField.toString(), value: inputTrait.toString()}]}
        const response = await axios.put(`https://damp-dawn-48917.herokuapp.com/people/${personId}`, fieldTrait)
        log(response)

        setInputField('')
        setInputTrait('')
        getPerson()

    }
    
    useEffect(() => {
        getPerson()
    },[])



    return (
        <div className='addDetailsComponent'>
            <h1>Lets add more traits!</h1>
            <div className="peopleCards">
                <div className="details">
                    <h1 className='nameh1'>{displayDetails.firstName} {displayDetails.lastName}</h1>
                    <h2><span>Birthday</span> {displayDetails.birthDay}</h2>
                    <h2><span>Gender</span> {displayDetails.gender}</h2>
                    <h2><span>Pronouns</span> {displayDetails.pronouns}</h2>
                    <h2><span>Relationship</span> {displayDetails.relationship}</h2>
                    {displayExtra}
                </div>
                <form onSubmit={(handleSubmit)} action="add trait to person">
                    <div className="inputText">
                        <input type="text" className='field'placeholder='Field' value={inputField} onInput={(e)=>{setInputField(e.target.value)}}/>
                        <input type="text" className='trait' placeholder='Trait' value={inputTrait} onInput={(e)=>{setInputTrait(e.target.value)}}/>
                    </div>
                    <input type="submit" />
                    <button className='return-to-dashboard' onClick={()=>navigate('/dashboard')}> Return to Dashboard</button>
                </form>
            </div>
        </div>
    )
}

export default AddDetails