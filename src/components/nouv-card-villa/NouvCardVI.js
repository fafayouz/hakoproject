import React from 'react'
import { useEffect, useState } from 'react'
import API from '../../Api/api'
import LoadingData from '../../Pages/LoadingData'
import CardsVI from './CardsVI'

const NouvCardVI = () => {
    const [cards, setCards] = useState()
  const [message,setMessage]= useState()
  const [loading ,setLoading] = useState(false)

useEffect(() => {
  API.get('/api/HouseTypeTwo').then(res => {
    if(res.data.length === 0 ) {
      setMessage("Il ñ'y a pas de nouveaux publication");
    }else {
      setCards(res.data)
      setLoading(true)
    }
  }).catch(err => {
    console.log(err)
  })
  
}, [])
    return (
        <>
        {!message ?  (
           <div className="NouvCard">
           {loading ?
             cards.slice(-3).map((house) => (
               <CardsVI
                 title={house.title}
                 typedebien={house.typedbien}
                 image={house.imagepath}
                 area={house.area}
                 price={house.price}
                 douche={house.douche}
                 place={house.wilaya}
                 room={house.salle}
                 id={house._id}
                 />
                 
             )):<div className='message-err-data'>
               <LoadingData/>
               </div>}
             </div>
        ): (
          <div className='message-err-data'>
              <span>
                {message}
              </span>
          </div>
        )}
         
             
          </>
    )
}

export default NouvCardVI
