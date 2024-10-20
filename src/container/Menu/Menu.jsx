import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Observer } from 'gsap/Observer';

import MenuList from '../../components/MenuList/MenuList.jsx';
import { beefs, images, ramen, sashimi, sea__food } from '../../constants/index.js';

import './Menu.css';

const Menu = () => {
  const bentoBoxRefs = useRef([]);

  gsap.registerPlugin(Observer);

  useGSAP(() => {
    const animationUp = () => {
      bentoBoxRefs.current.forEach((Box) => {
        gsap.to(Box, {
          y: -15,
          duration: 0.75,
          yoyo: true,
          repeat: 1,
        });
      });
    };

    const animationDown = () => {
      bentoBoxRefs.current.forEach((Box) => {
        gsap.to(Box, {
          y: 15,
          duration: 0.75,
          yoyo: true,
          repeat: 1,
        });
      });
    };

    const multiple_targets = ['.hoshizora__menu', '.hoshizora__aboutUs', '.hoshizora__chef'];

    multiple_targets.forEach((current_target) => {
      Observer.create({
        target: current_target,
        type: 'wheel,touch',
        onUp: () => animationUp(),
        onDown: () => animationDown(),
      });
    });
  });

  return (
    <div className="hoshizora__menu flex_center section__padding" id="menu">
      <h2 className="headtext__yusei-magic">Our Special Menu</h2>
      <img className="hoshizora__menu-accent" src={images.menuAccent} alt="menu__accent"></img>

      <div className="hoshizora__menu-bento">
        <div className="hoshizora__menu-bento_col">
          <div
            className="hoshizora__menu-bento_box lighting-border bg_sky-gradient"
            ref={(el) => (bentoBoxRefs.current[0] = el)}
          >
            <h3 className="hoshizora__japanease-text p__kaisei-tokumin">A5ランクの牛肉</h3>
            <h3 className="p__yusei-magic">Beef (A5)</h3>
            <MenuList category={beefs} />
          </div>
          <div
            className="hoshizora__menu-bento_box lighting-border bg_sky-gradient"
            ref={(el) => (bentoBoxRefs.current[1] = el)}
          >
            <h3 className="hoshizora__japanease-text p__kaisei-tokumin">ラーメン</h3>
            <h3 className="p__yusei-magic">Ramen</h3>
            <MenuList category={ramen} />
          </div>
        </div>
        <div className="hoshizora__menu-bento_col">
          <div
            className="hoshizora__menu-bento_box lighting-border bg_sky-gradient"
            ref={(el) => (bentoBoxRefs.current[2] = el)}
          >
            <h3 className="hoshizora__japanease-text p__kaisei-tokumin">刺身</h3>
            <h3 className="p__yusei-magic">Sashimi</h3>
            <MenuList category={sashimi} />
          </div>
          <div
            className="hoshizora__menu-bento_box lighting-border bg_sky-gradient"
            ref={(el) => (bentoBoxRefs.current[3] = el)}
          >
            <h3 className="hoshizora__japanease-text p__kaisei-tokumin">シーフード</h3>
            <h3 className="p__yusei-magic">Seafood</h3>
            <MenuList category={sea__food} />
          </div>
        </div>
      </div>
      <div className="vertical__line vertical__line-left">
        <img className="vertical__star-small-top" src={images.sparkle1} alt="vertical__line-star"></img>
        <img className="vertical__star-big" src={images.sparkle1} alt="vertical__line-star"></img>
        <img className="vertical__star-small-bottom" src={images.sparkle1} alt="vertical__line-star"></img>
      </div>
      <div className="vertical__line vertical__line-right">
        <img className="vertical__star-small-top" src={images.sparkle1} alt="vertical__line-star"></img>
        <img className="vertical__star-big" src={images.sparkle1} alt="vertical__line-star"></img>
        <img className="vertical__star-small-bottom" src={images.sparkle1} alt="vertical__line-star"></img>
      </div>
      <div className="section__gradient-wrapper top__gradient">
        <img className="section__gradient " src={images.sectionGradient} alt="section__gradient"></img>
      </div>
      <div className="section__gradient-wrapper bottom__gradient">
        <img className="section__gradient" src={images.sectionGradient2} alt="section__gradient2"></img>
      </div>
    </div>
  );
};

export default Menu;
