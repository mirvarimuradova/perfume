import React from 'react'
import { Link  } from 'react-router-dom';
import './Style.css'
import { FaShoppingCart } from 'react-icons/fa'
const Header = () => {
    return (
      <div className='div-general'>
          <div className='header'>
            <h1 className='main-name'> Aisu Perfume</h1>
           </div>
            <div className='header'>
        <nav class="navButtons"> 
        <p  class="navButton"> <Link to="/" >Home </Link> </p>
        <p class="navButton"> <Link to="/contacts">Contacts</Link></p>  
        <p class="navButton"> <Link to="/shop">Shop</Link></p>
        <p class="navButton"> <Link to="/basket"> <FaShoppingCart /></Link></p>
        {/* <p class="navButton"> <Link to="/contacts">Contact us</Link></p> */}
        
        </nav>

        
              </div>
         
      </div>
    )
  }
  
  export default Header