import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Crosslines.css';

const Crosslines = ({ scrollTrigger }) => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const crosslineHorizontal = document.querySelectorAll('.hoshizora__crossline-horizontal');
    const crosslineVertical = document.querySelectorAll('.hoshizora__crossline-vertical');
    gsap.from(crosslineHorizontal, {
      opacity: 0,
      delay: 3.5,
      duration: 1.5,
      scaleX: 0.75,
      ...scrollTrigger,
    });
    gsap.from(crosslineVertical, {
      opacity: 0,
      delay: 3.5,
      duration: 1.5,
      scaleY: 0.75,
      ...scrollTrigger,
    });
  });
  return (
    <div className="hoshizora__crossline">
      <div className="hoshizora__crossline-line hoshizora__crossline-vertical"></div>
      <div className="hoshizora__crossline-line hoshizora__crossline-vertical"></div>
      <div className="hoshizora__crossline-line hoshizora__crossline-horizontal"></div>
      <div className="hoshizora__crossline-line hoshizora__crossline-horizontal"></div>
      <div className="hoshizora__crossline-line hoshizora__crossline-horizontal"></div>
    </div>
  );
};

export default Crosslines;
