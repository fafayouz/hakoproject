import React from 'react'
import CardsT from './CardsT'
import './CardTerrain.css'

const CardTerrain = () => {
  return (
    <div className="CardTerrain-container">
      <div className="CardTerrain-box">
        <CardsT />
        <CardsT />
        <CardsT />
      </div>
      <div className="CardTerrain-box">
        <CardsT />
        <CardsT />
        <CardsT />
      </div>
    </div>
  )
}

export default CardTerrain
