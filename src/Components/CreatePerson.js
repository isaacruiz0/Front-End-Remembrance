import React from 'react'

function CreatePerson() {
    // I am going to need to do a post request and within that i will have use states that are correlated with the user's input
    // these two usestates will handle the change of user input

  return (
    <div className='create-person-div'>
        <div className='leftSideBar'></div>
        <main>
            <div className='person-box'>
              <h2 className='box-title'>Who would you like to remember?</h2>
              <form className='person-info-form'>
                <label>First Name</label>
                <input type='text' placeholder=""/>
                <label>Last Name</label>
                <input type='text' placeholder="" />
                <input type="button" value="Submit" />
              </form>
            </div>
        </main>
        <div className='rightSideBar'></div>
    </div>
  )
}

export default CreatePerson