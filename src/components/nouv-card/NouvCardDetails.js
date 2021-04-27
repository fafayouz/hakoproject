import React, { useState } from 'react'
import Navbar from '../navbar/navbar'
import './NouvCardDetails.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import BathtubOutlinedIcon from '@material-ui/icons/BathtubOutlined';
import KingBedOutlinedIcon from '@material-ui/icons/KingBedOutlined';
import CompareArrowsOutlinedIcon from '@material-ui/icons/CompareArrowsOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

const NouvCardDetails = (props) => {
    const [imageone , setImageone] = useState(true)
    const [imagetwo , setImagetwo] = useState(false)
    const [imagethree , setImagethree] = useState(false)

    const next1 = () => {
        setImageone(false)
        setImagetwo(true)
        setImagethree(false)
    }
    const next2 = () => {
        setImageone(false)
        setImagetwo(false)
        setImagethree(true)
    }
    const next3 = () => {
        setImageone(true)
        setImagetwo(false)
        setImagethree(false)
    }
    const URI = 'http://www.localhost:8001/'
    return (
        <div className='houses-page-details'>
            <div className='Navbar-2--'>
            <Navbar/>
            </div>
            <div className='image-slider-container-'>
                {imageone && <div onClick={next1} className='Images-Houses-'>
                 <img src={`${URI}${props.imagepath}`} alt='image1'/>
                </div>}
                {imagetwo && <div onClick={next2} className='Images-Houses-'>
                 <img src={`${URI}${props.imagepath1}`} alt='image2'/>
                </div>}
                {imagethree && <div onClick={next3} className='Images-Houses-'>
                 <img src={`${URI}${props.imagepath2}`} alt='image3'/>
                </div>}
                <div className='Houses-details-'>
                    <span> {props.title} </span>
                    <div className='info-box-houses'>
                            <div className='info-box-houses-icons-'>
                            <LocationOnOutlinedIcon/>
                            <span> {props.wilaya} </span>
                            </div>
                            <div className='info-box-houses-icons-'>
                            <CompareArrowsOutlinedIcon/>
                            <span> {props.area} </span>
                            </div>
                            <div className='info-box-houses-icons-'>
                            <BathtubOutlinedIcon/>
                            <span> {props.douche} </span>
                            </div>
                            <div className='info-box-houses-icons-'>
                            <KingBedOutlinedIcon/>
                            <span> {props.salle} </span>
                            </div>
                            
                    </div>
                    <div className='info-box-houses-bio-'>
                        <div className='info-box-houses-type-'>
                            <h2> {props.typedebien} </h2>
                        </div>
                        <p> {props.bio} </p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default NouvCardDetails
