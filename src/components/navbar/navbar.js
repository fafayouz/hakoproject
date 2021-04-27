import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import Logo from './LOGO.png'
const isLoggedIn = localStorage.getItem('token')

const Navbar = () => {
  return (
    <>
      {!isLoggedIn && (
        <div>
          <nav className="nav-menu">
            <div className="head-logo">
              <img
                className="logo-png"
                alt="Agence Lacolonne"
                src={Logo}
              ></img>
            </div>
            <ul>
              <li>
                <Link to="/" >Accueil</Link>
              </li>
              <li>
                <Link to=''>Présentation</Link>
              </li>
              <li>
                <Link to=''>Location</Link>
                <ul>
                  <li>
                    <Link to=''>Habitation</Link>
                    <ul>
                      <li>
                        <Link to=''>Appartement</Link>
                      </li>
                      <li>
                        <Link to=''>Niveau de villa</Link>
                      </li>
                      <li>
                        <Link to=''>Duplex</Link>
                      </li>
                      <li>
                        <Link to=''>Villa</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to=''>Bureau</Link>
                    <ul>
                      <li>
                        <Link to=''>Appartement</Link>
                      </li>
                      <li>
                        <Link to=''>Niveau de villa</Link>
                      </li>
                      <li>
                        <Link to=''>Duplex</Link>
                      </li>
                      <li>
                        <Link to=''>Villa</Link>
                      </li>
                      <li>
                        <Link to=''>bloc</Link>
                      </li>
                      <li>
                        <Link to=''>Locaux</Link>
                      </li>
                      <li>
                        <Link to=''>Hangars</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link to=''>Vente</Link>
                <ul>
                  <li>
                    <Link to=''>Appartement</Link>
                  </li>
                  <li>
                    <Link to=''>Niveau de villa</Link>
                  </li>
                  <li>
                    <Link to=''>Duplex</Link>
                  </li>
                  <li>
                    <Link to=''>Villa</Link>
                  </li>
                  <li>
                    <Link to=''>bloc</Link>
                  </li>
                  <li>
                    <Link to=''>Locaux</Link>
                  </li>
                  <li>
                    <Link to=''>Hangars</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to=''>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
      {isLoggedIn && (
        <div>
          <nav className="nav-menu">
            <div className="head-logo">
              <img
                className="logo-png"
                alt="Agence Lacolonne"
                src={Logo}
              ></img>
            </div>
            <ul>
              <li>
                <Link to=''>Accueil</Link>
              </li>
              <li>
                <Link to=''>Présentation</Link>
              </li>
              <li>
                <Link to=''>Location</Link>
                <ul>
                  <li>
                    <Link to=''>Habitation</Link>
                    <ul>
                      <li>
                        <Link to=''>Appartement</Link>
                      </li>
                      <li>
                        <Link to=''>Niveau de villa</Link>
                      </li>
                      <li>
                        <Link to=''>Duplex</Link>
                      </li>
                      <li>
                        <Link to=''>Villa</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to=''>Bureau</Link>
                    <ul>
                      <li>
                        <Link to=''>Appartement</Link>
                      </li>
                      <li>
                        <Link to=''>Niveau de villa</Link>
                      </li>
                      <li>
                        <Link to=''>Duplex</Link>
                      </li>
                      <li>
                        <Link to=''>Villa</Link>
                      </li>
                      <li>
                        <Link to=''>bloc</Link>
                      </li>
                      <li>
                        <Link to=''>Locaux</Link>
                      </li>
                      <li>
                        <Link to=''>Hangars</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link to=''>Vente</Link>
                <ul>
                  <li>
                    <Link to=''>Appartement</Link>
                  </li>
                  <li>
                    <Link to=''>Niveau de villa</Link>
                  </li>
                  <li>
                    <Link to=''>Duplex</Link>
                  </li>
                  <li>
                    <Link to=''>Villa</Link>
                  </li>
                  <li>
                    <Link to=''>bloc</Link>
                  </li>
                  <li>
                    <Link to=''>Locaux</Link>
                  </li>
                  <li>
                    <Link to=''>Hangars</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to=''>Contact</Link>
              </li>
			  <li>
                <Link to="AdminControle">Admin Panel</Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}

export default Navbar
