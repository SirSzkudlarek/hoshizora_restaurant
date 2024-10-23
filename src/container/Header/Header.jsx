import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import StarsBackground from '../../components/StarsBackground/StarsBackground';

import { images } from '../../constants';
import { useRef } from 'react';
// eslint-disable-next-line
import { MouseParallax } from 'react-just-parallax';

import './Header.css';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const animsScrollTrigger = {
  scrollTrigger: {
    trigger: '.hoshizora__header',
    start: 'top 75%', // when the top of the trigger hits the top of the viewport
  },
};

const Header = () => {
  const parallaxRef = useRef(null);
  const header_contentRef = useRef();

  useGSAP(() => {
    gsap.from(header_contentRef.current.querySelectorAll('.header_content_anim'), {
      y: 30,
      opacity: 0,
      duration: 1.5,
      stagger: 0.75,
      ...animsScrollTrigger,
    });
    gsap.from('.hoshizora__header-img', {
      y: 100,
      opacity: 0,
      delay: 1,
      duration: 1.5,
      ...animsScrollTrigger,
    });
  });

  return (
    <header className="hoshizora__header bg_sky-gradient hoshizora__wrapper section__padding" ref={parallaxRef}>
      <div ref={header_contentRef} className="hoshizora__header-introduction">
        <div className="header_content_anim">
          <SubHeading title="Dare to taste heavenly food" />
        </div>
        <h1 className="hoshizora__header-h1 header_content_anim">Traditional Japanese Dining</h1>
        <p className="p__kaisei-tokumin header_content_anim" style={{ margin: '2rem 0' }}>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque
          sapien. Et, penatibus aliquam amet tellus{' '}
        </p>
        <div className="header_content_anim">
          <button type="button" className="custom__button">
            Explore Menu
          </button>
        </div>
      </div>
      <div className="hoshizora__header-img">
        <img src={images.headerIntroduction} alt="header-img" />
      </div>

      <MouseParallax strength={0.015} isAbsolutelyPositioned>
        <StarsBackground
          className="hoshizora__stars-parallax"
          mobile={false}
          style={{ position: 'absolute', width: '100%' }}
        />
      </MouseParallax>
    </header>
  );
};

export default Header;
