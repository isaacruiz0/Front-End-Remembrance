import React from 'react'

function Dashboard() {

  return (
    <div className='dashboard'>
        <div className='leftSidebar'></div>
        <main>
            <nav className='dash-nav'><h1>Hello, "name"</h1></nav>
            <div className='div-button'><button>New Person +</button></div>
        </main>
        <div className='rightSidebar'></div>
    </div>
  )
}

export default Dashboard