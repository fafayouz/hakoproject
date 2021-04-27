import React, { useEffect, useState } from 'react'
import API from '../../../Api/api'
import './FormTerrain.css'

const FormTerrain = () => {
    const [Cards, setCards] = useState()
    const [message, setMessage] = useState()
    
    useEffect(() => {
        API.get('/api/Fetchhousesdata').then(res => {
          if(res.data.length === 0 ) {
            setMessage("Il ñ'y a pas de nouveaux publication");
          }else {
            setCards(res.data)
          }
        }).catch(err => {
          console.log(err)
        })
        
      }, [])
    return (
        <div className='formterrain-container'>
            {Cards && Cards.map()
            }
            
            
        </div>
    )
}

export default FormTerrain
