import React from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { images } from '../../constants';
import Rings from '../../components/design/Rings';

import './AboutUs.css';

const AboutUs = () => {
  const aboutUs_title = useRef();
  const aboutUs_p = useRef();
  const aboutUs_spoon = useRef();
  const aboutUs_button = useRef();

  const ourHistory_title = useRef();
  const ourHistory_p = useRef();
  const ourHistory_spoon = useRef();
  const ourHistory_button = useRef();

  gsap.registerPlugin(ScrollTrigger);

  const gsap__slide_right = {
    x: -150,
    duration: 2.5,
    opacity: 0,
    ease: 'expo.inOut',
  };

  const gsap__slide_left = {
    x: 150,
    duration: 2.5,
    opacity: 0,
    ease: 'expo.inOut',
  };

  const aboutUsSection__scrollTrigger = {
    scrollTrigger: {
      trigger: '.hoshizora__aboutUs',
      start: '-=200px top',
      markers: true,
    },
  };

  useGSAP(() => {
    gsap.to('.bowl-img', { rotation: 360, duration: 150, repeat: -1, ease: 'none' });

    //aboutUs
    gsap.from(aboutUs_title.current, { ...gsap__slide_right, ...aboutUsSection__scrollTrigger });
    gsap.from(aboutUs_spoon.current, { ...gsap__slide_right, delay: 0.3, ...aboutUsSection__scrollTrigger });
    gsap.from(aboutUs_p.current, { ...gsap__slide_right, delay: 0.6, ...aboutUsSection__scrollTrigger });
    gsap.from(aboutUs_button.current, { ...gsap__slide_right, delay: 0.9, ...aboutUsSection__scrollTrigger });
    //ourHistory
    gsap.from(ourHistory_title.current, { ...gsap__slide_left, ...aboutUsSection__scrollTrigger });
    gsap.from(ourHistory_spoon.current, { ...gsap__slide_left, delay: 0.3, ...aboutUsSection__scrollTrigger });
    gsap.from(ourHistory_p.current, { ...gsap__slide_left, delay: 0.6, ...aboutUsSection__scrollTrigger });
    gsap.from(ourHistory_button.current, { ...gsap__slide_left, delay: 0.9, ...aboutUsSection__scrollTrigger });
  });

  return (
    <div className="hoshizora__aboutUs bg_dark-blue flex_center section__padding" id="about">
      <div className="hoshizora__aboutUs-content flex_center">
        <div className="hoshizora__aboutUs-content_about">
          <h2 ref={aboutUs_title} className="headtext__yusei-magic hoshizora__aboutUs-headtext">
            About Us
          </h2>
          <img ref={aboutUs_spoon} className="spoon__img" src={images.spoon} alt="spoon"></img>
          <p ref={aboutUs_p} className="p__kaisei-tokumin">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <button ref={aboutUs_button} className="custom__button">
            Know more
          </button>
        </div>

        <div className="hoshizora__aboutUs-content_bowl flex_center">
          <img className="bowl-img" src={images.aboutUsPlate} alt="bowl"></img>
          <Rings />
        </div>

        <div className="hoshizora__aboutUs-content_history">
          <h2 ref={ourHistory_title} className="hoshizora__aboutUs-headtext headtext__yusei-magic">
            Our History
          </h2>
          <img ref={ourHistory_spoon} className="spoon__img" src={images.spoon} alt="spoon"></img>
          <p ref={ourHistory_p} className="p__kaisei-tokumin">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <button ref={ourHistory_button} className="custom__button">
            Know more
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
