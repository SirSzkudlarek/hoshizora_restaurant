import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import StarsBackground from '../../components/StarsBackground/StarsBackground';

import { images } from '../../constants';
import { useRef } from 'react';
// eslint-disable-next-line
import { MouseParallax } from 'react-just-parallax';

import './Header.css';

const Header = () => {
  const parallaxRef = useRef(null);

  return (
    <header className="hoshizora__header bg_sky-gradient hoshizora__wrapper section__padding" ref={parallaxRef}>
      <div className="hoshizora__header-introduction">
        <SubHeading title="Dare to taste heavenly food" />
        <h1 className="hoshizora__header-h1">Traditional Japanese Dining</h1>
        <p className="p__kaisei-tokumin" style={{ margin: '2rem 0' }}>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque
          sapien. Et, penatibus aliquam amet tellus{' '}
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
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
