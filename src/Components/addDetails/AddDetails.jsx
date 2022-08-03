import React from 'react'
import './addDetails.scss'
import { useState, useEffect } from 'react'
import {useLocation} from 'react-router-dom';
import axios from 'axios'

function AddDetails() {

    let location = useLocation();

    useEffect(() => {
        const personId = location.state.id
        const getPerson = async () => {
            const response = await axios.get(`http://localhost:5000/people/${personId}`)
            console.log(response.data)
        }
        getPerson()
    },[])

    return (
        <div className='addDetailsComponent'>
        </div>
    )
}

export default AddDetails