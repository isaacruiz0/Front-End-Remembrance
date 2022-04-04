import React from 'react'
import{ useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import apiUrl from '../apiURL'


function Dashboard() {
    // this will set the displayed array to mapped data
    // const [currentPeople, setCurrentPeople] = useState([])
    // this will take the mapped data and display
    const [displayPeople, setDisplayPeople] = useState([])
    let navigate = useNavigate();

    

    // this will do a get request from my api and return each person
    useEffect(()=>{


        fetch(apiUrl + '/people')
        //this will fetch data from my api
        .then(res => res.json())
        //this will create an array of the people data so we can render it
        .then(data => {let peopleArray = data.people.map((person, index)=>{
            return(
                <div className='peopleCards'>
                    <h1 >{person.firstName} {person.lastName}</h1>
                </div>
            )
        })
        setDisplayPeople(peopleArray)
    })
    }, [])


  return (
    <div className='dashboard'>
        <div className='leftSidebar'></div>
        <main>
            <nav className='dash-nav'><h1>Hello, "name"</h1></nav>
            <div className='div-button'>
                <button onClick={()=>{navigate("/createperson")}}>Add Person +</button>
            </div>
            {displayPeople}
        </main>
        <div className='rightSidebar'></div>
    </div>
  )
}

export default Dashboard