import React from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { images } from '../../constants';

import './MainHeading.css';
gsap.registerPlugin(ScrollTrigger);

const MainHeading = ({
  heading,
  target,
  small,
  accent_line_duration,
  star_duration,
  heading_duration,
  title_delay,
}) => {
  const titleRef = useRef();
  const title_accent = useRef();
  const title_accent_star = useRef();

  const animsScrollTrigger = {
    scrollTrigger: {
      trigger: target,
      start: 'top 75%', // when the top of the trigger hits the top of the viewport
    },
  };

  useGSAP(() => {
    const titleAnim = gsap.timeline({ ...animsScrollTrigger });
    titleAnim.from(title_accent.current, {
      x: -100,
      opacity: 0,
      duration: accent_line_duration ? accent_line_duration : 0.5,
    });
    titleAnim.from(title_accent_star.current, {
      scale: 0.75,
      opacity: 0,
      duration: star_duration ? star_duration : 0.5,
    });
    titleAnim.from(titleRef.current, {
      y: 100,
      opacity: 0,
      delay: title_delay ? title_delay : NaN,
      duration: heading_duration ? heading_duration : 1,
    });
  });

  return (
    <div className="main_heading-title_wrapper" style={small && { margin: '0 auto 1rem auto' }}>
      <h1 ref={titleRef} className={`headtext__yusei-magic ${small && 'headtext__yusei-magic-small'}`}>
        {heading}
      </h1>
      <div ref={title_accent} className="title_accent-line">
        <img
          ref={title_accent_star}
          className={small ? 'main_heading-accent_star-smaller' : 'main_heading-accent_star'}
          src={images.sparkle1}
          alt="title__accent_star"
        ></img>
      </div>
    </div>
  );
};

export default MainHeading;
