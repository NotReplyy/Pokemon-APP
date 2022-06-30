import React from 'react'
import imgBack from '../../Images/pokemon-go-logo-minimalism.jpg'
import { Link } from 'react-router-dom'
import './LandingPage.css'


function Landingpage() {
  return (
    <div className="landing-Class">
      <div>
        <img className="img-Class" src={imgBack} alt='Background' />
      </div>
      <div>
        <Link to='/home'>
          <button className="button-Class">Get Into</button>
        </Link>
      </div>
    </div>

  )
}

export default Landingpage