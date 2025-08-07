
import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

function AdminDashboard(props) {
    console.log(props)
    return (
        <div className='h-screen w-full p-10'>
            <Header changeUser={props.changeUser}/>
            <CreateTask/>
            <AllTask/>
   </div>
            
    )
}

export default AdminDashboard
