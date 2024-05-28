import React from 'react'
import '../App.css';
import {Link} from 'react-router-dom';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 

  faInstagram,
  faTwitter,
  faFacebook,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer1'>
        <ul>
          <li><Link to="/contacts">Contacts</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/vacancies">Vacancies</Link></li>
          <li><Link to="/">Home</Link></li>
        </ul>
        <div>
      
        <p className='phoneNUm'><span>Nizami : +994 55 551 60 01</span>    <span>28 may : +994 55 551 60 02</span></p>
       
        <p className='phoneNUm'> <span>Koroglu : +994 55 551 60 03</span>     <span>  Genclik : +994 55 551 60 04</span>   </p>
        
        </div>
       
      </div>
      <div className='gmail'> 
      <FontAwesomeIcon icon={faEnvelope} className='gmail' />
      
        e-mail :aisuperfume@gmail.com
      </div>
      <hr/>
      <div className='footer2'>
      <Link to="https://www.instagram.com/aysu_llyva?igsh=cmMweTJoYnNkZ25o"> <FontAwesomeIcon icon={faInstagram} className="insta-icon"  /></Link>
      <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />
      <FontAwesomeIcon icon={faFacebook} className="facebook-icon" />
      <FontAwesomeIcon icon={faWhatsapp} className="wp-icon" />
      </div>
    </div>
  )
}

export default Footer