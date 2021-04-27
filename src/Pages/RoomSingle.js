import React, { useEffect, useState } from 'react'
import './RoomSingle.css'
import API from '../Api/api'
import NouvCardDetails from '../components/nouv-card/NouvCardDetails'


const RoomSingle = (props) => {

    const [singleDetails, setSingleDetails] = useState({})
    const [message , setMessage] = useState()
    useEffect(() => {
        API.get('/api/Fetchhousesdata').then(res => {
            if(res.data.length === 0 ) {
              setMessage("Il ñ'y a pas de nouveaux publication");
            }else {
                const card= res.data.find(x => x._id === props.match.params.id)
                setSingleDetails(card)
            }
          }).catch(err => {
            console.log(err)
          })
        
    }, [])
    
    return (
        <div className='RoomSingle-container'>
            {[singleDetails] && [singleDetails].map(single => 
                    <NouvCardDetails
                    title={single.title}
                    imagepath={single.imagepath}
                    imagepath1={single.imagepath1}
                    imagepath2={single.imagepath2}
                    image={single.title}
                    bio={single.bio}
                    douche={single.douche}
                    salle={single.salle}
                    area={single.area}
                    typedebien={single.typedebien}
                    wilaya={single.wilaya}
                    />
                    )}
                    
        </div>
    )
}

export default RoomSingle
