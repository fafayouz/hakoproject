import React, { useState } from 'react'
import './AdminControle.css'
import AdminSidebar from './AdminSidebar'
import { Link, useHistory} from "react-router-dom";
import {useCallback} from "react";
import {setLoggedOut} from "../../store/store";
import {useDispatch} from "react-redux";
import Form from './form/form'
import FormTerrain from './formTerrain/FormTerrain'
import Addadmin from './AddAdmin/Addadmin'

const AdminControle = () => {
  const[showform , setShowform] = useState(true)
  const[showformterrain , setShowformterrain] = useState(false)
  const[showAdmin , setShowAdmin] = useState(false)
  const history = useHistory()
  const dispatch = useDispatch();
  const isLoggedIn = localStorage.getItem('token')

  const navigate = (path) => {
    history.push(path)
}
const loggedOut = useCallback(() =>
        dispatch(setLoggedOut()), [dispatch])

        const logout = () => {
          loggedOut();
          localStorage.setItem('token', '')
          navigate('/Admin')
      }
      

const show = () => {
  setShowform(true)
  setShowformterrain(false)
  setShowAdmin(false)
}
const showagain = () => {
  setShowform(false)
  setShowAdmin(false)
  setShowformterrain(true)
}
const showpageadmin = () => {
  setShowform(false)
  setShowformterrain(false)
  setShowAdmin(true)
}
  return (
    <>
    {isLoggedIn && (
      <div className="Admin-Controle-Container">
      <div className="admin-sidebar">
      <div className='AdminSidebar-container'>
      <div className='AdmineSidebar-span'>
                <div className='span-box'>
                <Link to='/' >Home </Link>
                </div>
            </div>
            <div onClick={show} className='AdmineSidebar-span'>
                <div className='span-box'>
                <span>Ajouter</span>
                </div>
            </div>
            <div onClick={showagain} className='AdmineSidebar-span'>
                <div className='span-box'>
                <span>List</span>
                </div>
            </div>
            <div onClick={showpageadmin}  className='AdmineSidebar-span'>
                <div className='span-box'>
                <span>Ajouter Un Admin </span>
                </div>
            </div>
            
          
            <div onClick={logout} className='AdmineSidebar-span'>
                <div className='span-box'>
                <span>Loogout </span>
                </div>
            </div>
         
        </div>
      </div>
      <div className="admin-post">
        {showform && <Form/>}
        {showformterrain && <FormTerrain/>}
        {showAdmin && <Addadmin/>}

        
      </div>
    </div>
    )}
    {!isLoggedIn && (
      <div>
        <h1>Page 404</h1>
      </div>
    )}
    </>
  )
}

export default AdminControle
