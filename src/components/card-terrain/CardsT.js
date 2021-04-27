import React from 'react'
import './CardTerrain.css'
import { Button } from '@material-ui/core'
import Img1 from './img1.jpg'

const CardsT = () => {
  return (
    <div className="card-t">
          <div className="card-t-image">
            <img src={Img1} alt="img1" />
          </div>
          <div className="card-t-title">
            <h3> Terrain a el biar</h3>
            <div className="card-t-bar"></div>
          </div>
          <div className="card-t-bio">
            <span>
              Terrain 650 m2, au sein d'une future résidence sécurisée, à 10km
              du port de Mostaganem, 800 mètres de la plage de SAKHRA (10 km de
              plage et à proximité de ZINA BEACH), possibilité de division en 4
              lots de 162,50 m2.
            </span>
          </div>
          <div className="card-t-bar"></div>
          <div className="card-t-btn">
            <Button variant="outlined" color="secondary">
              details
            </Button>
          </div>
        </div>
  )
}

export default CardsT
