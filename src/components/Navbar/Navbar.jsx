import React from 'react';
import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {
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
    </nav>
  )
}

export default Navbar;