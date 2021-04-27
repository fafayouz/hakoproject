import React from 'react'
import './AdmineSidebar.css'
import {Link} from 'react-router-dom'


const AdminSidebar = () => {
    return (
        <div className='AdminSidebar-container'>
            <div className='AdmineSidebar-link'>
                <div className='link-box'>
                <Link to='/room'>Ajouter</Link>
                </div>
            </div>
            <div className='AdmineSidebar-link'>
                <div className='link-box'>
                <Link to="/ajouter/terrain">Add</Link>
                </div>
            </div>
            <div className='AdmineSidebar-link'>
                <div className='link-box'>
                <Link>Add </Link>
                </div>
            </div>
            <div className='AdmineSidebar-link'>
                <div className='link-box'>
                <Link>Add </Link>
                </div>
            </div>
            <div className='AdmineSidebar-link'>
                <div className='link-box'>
                <Link>Add </Link>
                </div>
            </div>
         
        </div>
    )
}

export default AdminSidebar
