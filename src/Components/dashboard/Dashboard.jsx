import React from 'react'
import{ useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

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
    const getPeople =() =>{
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
            let personId = person._id
            return(
                <div className='peopleCards'  key={index}>
                    <div className="details">
                        <h1 className='nameh1'>{person.firstName} {person.lastName}</h1>
                        <h2><span>Birthday</span> {person.birthDay}</h2>
                        <h2><span>Gender</span> {person.gender}</h2>
                        <h2><span>Pronouns </span>{person.pronouns}</h2>
                        <h2><span>Relationship </span>{person.relationship}</h2>
                        {person.extraDetails.map((trait, index)=>{
                            return(<h2 key={index}><span>{trait.key}</span>{trait.value}</h2>)
                        })}
                    </div>
                    <div className="buttonsContainer">
                        <button onClick={handleDelete} id={person._id}>
                            <FontAwesomeIcon icon={faCircleXmark} className='deleteIcon'/>
                        </button>
                        <button onClick={()=>{navigate("/addDetails",{state:{id: personId}})}}> 
                            <FontAwesomeIcon icon={faCircleXmark} className='addDetails' />
                        </button>
                    </div>
                </div>
            )
        })
        setDisplayPeople(peopleArray)
        })
    }
    useEffect(()=>{

        window.scrollTo(0, 0)

        getPeople()
    }, [])

    const handleDelete = async (e) =>{
        console.log(e.target.id)
        let id = e.target.id;
        await fetch(`https://damp-dawn-48917.herokuapp.com/${id}`, {
            method:'DELETE',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ sessionStorage.getItem("accessToken"), 
            }  
        })
        getPeople()
      }


  return (
    <div className='dashboard'>
        <svg className='topSvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E8B987" d="M0,320L48,320C96,320,192,320,288,277.3C384,235,480,149,576,106.7C672,64,768,64,864,53.3C960,43,1056,21,1152,16C1248,11,1344,21,1392,26.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>


        <button className='greeting' onClick={()=>{navigate("/")}} >Hello {sessionStorage.getItem("name")}!</button>

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