import React from 'react'
import{ useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import './dashboard.scss'

function Dashboard() {
    // this will set the displayed array to mapped data
    // const [currentPeople, setCurrentPeople] = useState([])
    // this will take the mapped data and display
    const [displayPeople, setDisplayPeople] = useState([])
    // this will fetch the data again by incrementing
    const [get, setGet] = useState(0)
    let navigate = useNavigate();

    // this will do a get request from my api and return each person
    useEffect(()=>{

            window.scrollTo(0, 0)

        fetch('https://damp-dawn-48917.herokuapp.com/people/', {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+ sessionStorage.getItem("accessToken"),
            }})
        //this will fetch data from my api
        .then(res => res.json())
        //this will create an array of the people data so we can render it
        .then(data => {let peopleArray = data.people.map((person, index)=>{
            console.log(person._id)
            return(
                <div className='peopleCards' onClick={handleDelete} key={index}>
                    <div className="details">
                        <h1 className='nameh1'>{person.firstName} {person.lastName}</h1>
                        <h2>Birthday: {person.birthDay}</h2>
                        <h2>Gender: {person.gender}</h2>
                        <h2>Pronouns: {person.pronouns}</h2>
                        <h2>Relationship: {person.relationship}</h2>
                    </div>
                    <button id={person._id}>X</button>
                </div>
            )
        })
        setDisplayPeople(peopleArray)
    })
    }, [get])

    const handleDelete = (e) =>{
        console.log(e.target.id)
        let id = e.target.id;
        setGet(get + 1)
        fetch(`https://damp-dawn-48917.herokuapp.com/${id}`, {
            method:'DELETE',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ sessionStorage.getItem("accessToken"), 
            }  
        })
      }


  return (
    <div className='dashboard'>
        <nav className='dash-nav'><span className='greeting'>Hello {sessionStorage.getItem("name")}!</span><span className='title' onClick={()=>{navigate("/")}}>Remembrance</span></nav>
        <main>
            <div className='div-button'>
                <button onClick={()=>{navigate("/createperson")}}>+ Add Person</button>
            </div>
            <div className='people'>{displayPeople}</div>
        </main>
    </div>
  )
}

export default Dashboard