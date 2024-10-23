import React, { useRef } from 'react';
import { useState } from 'react';
import images from '../../constants/images';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GiChopsticks } from 'react-icons/gi';
import StarsBackground from '../StarsBackground/StarsBackground';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const animsScrollTrigger = {
  scrollTrigger: {
    trigger: '.hoshizora__navbar',
    start: 'top 75%', // when the top of the trigger hits the top of the viewport
  },
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navbar_containerRef = useRef();

  useGSAP(() => {
    gsap.from(navbar_containerRef.current.querySelectorAll('.navbar_nav_item'), {
      y: 30,
      opacity: 0,
      duration: 1.25,
      stagger: 0.3,
      ...animsScrollTrigger,
    });
  });

  return (
    <nav ref={navbar_containerRef} className="hoshizora__navbar" id="home">
      <div className="hoshizora__navbar-logo navbar_nav_item">
        <img src={images.hoshizora} alt="hoshizora logo" />
      </div>
      <ul className="hoshizora__navbar-links">
        <li className="p__kaisei-tokumin navbar_nav_item">
          <a href="#home">Home</a>
        </li>
        <li className="p__kaisei-tokumin navbar_nav_item">
          <a href="#about">About</a>
        </li>
        <li className="p__kaisei-tokumin navbar_nav_item">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__kaisei-tokumin navbar_nav_item">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__kaisei-tokumin navbar_nav_item">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="hoshizora__navbar-login">
        <a href="#login" className="p__kaisei-tokumin">
          <span className="navbar_nav_item">Log In / Registration</span>
        </a>
        <div className="navbar_nav_item" />
        <a href="/" className="p__kaisei-tokumin">
          <span className="navbar_nav_item">Book Table</span>
        </a>
      </div>
      <div className="hoshizora__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="hoshizora__navbar-smallscreen_overlay bg_sky-gradient flex__center">
            <GiChopsticks fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="hoshizora__navbar-smallscreen_links">
              <li className="p__kaisei-tokumin">
                <a href="#home">Home</a>
              </li>
              <li className="p__kaisei-tokumin">
                <a href="#about">About</a>
              </li>
              <li className="p__kaisei-tokumin">
                <a href="#menu">Menu</a>
              </li>
              <li className="p__kaisei-tokumin">
                <a href="#awards">Awards</a>
              </li>
              <li className="p__kaisei-tokumin">
                <a href="#contact">Contact</a>
              </li>
              <StarsBackground mobile={true} style={{ position: 'absolute', width: '100%' }} />
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
