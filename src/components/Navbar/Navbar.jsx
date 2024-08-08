import React from 'react';
import { useState } from 'react';
import images from '../../constants/images'
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GiChopsticks } from "react-icons/gi";
import StarsBackground from '../StarsBackground/StarsBackground';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='hoshizora__navbar'>
      <div className='hoshizora__navbar-logo'>
        <img src={images.hoshizora} alt="hoshizora logo" />
      </div>
      <ul className='hoshizora__navbar-links'>
        <li className='p__kaisei-tokumin'><a href="#home">Home</a></li>
        <li className='p__kaisei-tokumin'><a href="#about">About & History</a></li>
        <li className='p__kaisei-tokumin'><a href="#menu">Menu</a></li>
        <li className='p__kaisei-tokumin'><a href="#awards">Awards</a></li>
        <li className='p__kaisei-tokumin'><a href="#contact">Contact</a></li>
      </ul>
      <div className='hoshizora__navbar-login'>
        <a href='#login' className='p__kaisei-tokumin'>Log In / Registration</a>
        <div />
        <a href='/' className='p__kaisei-tokumin'>Book Table</a>
      </div>
      <div className="hoshizora__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={()=> setToggleMenu(true)}/>

        {toggleMenu && (
          <div className='hoshizora__navbar-smallscreen_overlay bg_sky-gradient flex__center'>
            <GiChopsticks fontSize={27} className='overlay__close' onClick={()=> setToggleMenu(false)} />
            <ul className='hoshizora__navbar-smallscreen_links'>
              <li className='p__kaisei-tokumin'><a href="#home">Home</a></li>
              <li className='p__kaisei-tokumin'><a href="#about">About & History</a></li>
              <li className='p__kaisei-tokumin'><a href="#menu">Menu</a></li>
              <li className='p__kaisei-tokumin'><a href="#awards">Awards</a></li>
              <li className='p__kaisei-tokumin'><a href="#contact">Contact</a></li>
              <StarsBackground mobile={true} style={{ position: 'absolute', width: '100%'}}/>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;