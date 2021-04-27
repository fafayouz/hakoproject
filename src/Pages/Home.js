import React from 'react'
import NouvCardAP from '../components/nouv-card-appartement/NouvCardAP'
import NouvCardVI from '../components/nouv-card-villa/NouvCardVI'
import NewHouse from '../components/titles/NewHouse'
import NewVilla from '../components/titles/NewVilla'
import Loading from './Loading'

const Navbar = React.lazy(()=> import('../components/navbar/navbar'))
const Search = React.lazy(()=> import('../components/search/Search'))
const Slider = React.lazy(()=> import('../components/slider/Slider'))
const NouvCard = React.lazy(()=> import('../components/nouv-card/NouvCard'))
const CardTerrain = React.lazy(()=> import('../components/card-terrain/CardTerrain'))

const Footer = React.lazy(()=> import('../components/footer/Footer'))
const Home = () => {
    return (
        <div>
          <React.Suspense fallback={<Loading/>}>
          <Navbar/> 
          <Slider/>
          <Search/> 
          <NouvCard/>
          <NewHouse/>
          <NouvCardAP/>
          <NewVilla/>
          <NouvCardVI/>
          <Footer/>
          </React.Suspense>
        </div>
    )
}

export default Home;
