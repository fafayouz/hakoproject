import React from 'react'
import BathtubOutlinedIcon from '@material-ui/icons/BathtubOutlined';
import KingBedOutlinedIcon from '@material-ui/icons/KingBedOutlined';
import CompareArrowsOutlinedIcon from '@material-ui/icons/CompareArrowsOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { Button } from '@material-ui/core';
import './NouvCard.css'
import { Link } from 'react-router-dom';

const Cards = (props) => {
    const URI = 'http://www.localhost:8001/'
    const priceformat = (new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'DZD',
        minimumFractionDigits: 2
      }).format(props.price))
    return (
        <>
        <div className='Card'>
                <div className='CardImg'>
                    <img src={`${URI}${props.image}`} alt='fafa'/>
                </div>
                <div className='state-info'>
                    <div className='Title-info'>
                        <div className='type-state'>
                            <span>{props.typedebien ? props.typedebien : "Vendre"}</span>
                            <h4>{props.title}</h4>
                        </div>
                        <div className='price'>
                            <h4>{priceformat}</h4>
                        </div>
                    </div>
                    <div className='room-info'>
                        <div className='room-icons'>
                            <KingBedOutlinedIcon/>
                            <span>{props.room} pieces</span>

                        </div>
                        <div className='room-icons'>
                             <BathtubOutlinedIcon/>
                             <span>{props.douche} Douche</span>
                        </div>
                        <div className='room-icons'>
                             <CompareArrowsOutlinedIcon/>
                             <span>{props.area} m²</span>
                        </div>
                        
                    </div>
                    <div className='place'>
                            <LocationOnOutlinedIcon/>
                            <span>{props.place}</span>
                            <Link to={`/room/${props.id}`}>
                            <Button  variant="outlined" color="secondary">
                                 View
                            </Button>
                            </Link>
                    </div>
                </div>
           </div>
           </>
    )
}

export default Cards
