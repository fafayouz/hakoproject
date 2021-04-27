import React from 'react';
import './Slider.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';


const Slider = () => {


    return (
        <div className='containerSlider'>
                <Slide className='slider' >
                <div>
                   <img src = {img1} alt='img1' />
                </div>
                <div>
                   <img src = {img2} alt='img2' />
                </div>
                <div>
                   <img src = {img3} alt='img3' />
                </div>
                </Slide>
        </div>
    )
}

export default Slider
