import React, { useState, useRef } from 'react';
import { images, laurels__content } from '../../constants';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Observer } from 'gsap/Observer';

import './Laurels.css';

gsap.registerPlugin(ScrollTrigger);

const animsScrollTrigger = {
  scrollTrigger: {
    trigger: '.hoshizora__laurels',
    start: 'top 75%', // when the top of the trigger hits the top of the viewport
  },
};

const Laurels = () => {
  const { introduction, the_tabelog, mechelin, gault_millau, taste_of_japan } = laurels__content;
  const [award, SetAward] = useState(introduction);

  const laurels_titleRef = useRef();
  const laurels__title_accent = useRef();
  const laurels__title_accent_star = useRef();
  const laurels_contentRef = useRef();
  const dateClan_logoRef = useRef();
  const tabelog_imgRef = useRef();
  const mechelin_imgRef = useRef();
  const gaultMilau_imgRef = useRef();
  const tasteOfJapan_imgRef = useRef();
  const blue_gradientRef = useRef();

  const laurels_contentAnim = () => {
    gsap.fromTo(laurels_contentRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5, ease: 'none' });
  };

  const changeAward = (award) => {
    SetAward(award);
    laurels_contentAnim();
  };

  useGSAP(() => {
    const mm = gsap.matchMedia();
    const awardsGridAnim = gsap.timeline({ duration: 1, ...animsScrollTrigger });
    awardsGridAnim.fromTo(
      tabelog_imgRef.current,
      { y: 100, x: 75, opacity: 0 },
      { delay: 3.5, y: 0, x: 0, opacity: 1 }
    );
    awardsGridAnim.fromTo(mechelin_imgRef.current, { y: 100, x: -75, opacity: 0 }, { y: 0, x: 0, opacity: 1 });
    awardsGridAnim.fromTo(tasteOfJapan_imgRef.current, { y: -100, x: -75, opacity: 0 }, { y: 0, x: 0, opacity: 1 });
    awardsGridAnim.fromTo(gaultMilau_imgRef.current, { y: -100, x: 75, opacity: 0 }, { y: 0, x: 0, opacity: 1 });
    awardsGridAnim.fromTo(blue_gradientRef.current, { opacity: 0 }, { opacity: 0.2 });
    mm.add('(max-width: 1023px)', () => {
      awardsGridAnim.fromTo('.laurels__gallery-info', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });
    });

    const awardsContentAnim = gsap.timeline({ ...animsScrollTrigger });
    awardsContentAnim.from(laurels__title_accent.current, { x: -100, opacity: 0, duration: 0.5 });
    awardsContentAnim.from(laurels__title_accent_star.current, { opacity: 0, duration: 0.5 });
    awardsContentAnim.from(laurels_titleRef.current, { y: 100, opacity: 0, duration: 1 });
    awardsContentAnim.from(laurels_contentRef.current, { x: -100, opacity: 0, duration: 1 });
    awardsContentAnim.fromTo(dateClan_logoRef.current, { opacity: 0 }, { opacity: 0.3, duration: 1 });

    const awardsImges = document.querySelectorAll('.laurels__awards-img');

    awardsImges.forEach((image) => {
      Observer.create({
        target: image,
        onHover: () => gsap.to(image, { scale: 1.15 }),
        onHoverEnd: () => gsap.to(image, { scale: 1 }),
      });
    });
  });

  return (
    <div className="hoshizora__laurels flex_center section__padding">
      <div className="hoshizora__laurels-wrapper">
        <div className="hoshizora__laurels-gallery">
          <h3 className="p__yusei-magic laurels__gallery-info">Click on award to read about it!</h3>
          <div className="laurels__gallery">
            <img
              ref={tabelog_imgRef}
              className="laurels__awards-img"
              onClick={() => changeAward(the_tabelog)}
              src={images.theTabelogAward}
              alt="the-tabelog-award"
            />
            <img
              ref={mechelin_imgRef}
              className="laurels__awards-img"
              onClick={() => changeAward(mechelin)}
              src={images.mechelinThreeStars}
              alt="mechelin-three-stars"
            />
            <img
              ref={gaultMilau_imgRef}
              className="laurels__awards-img"
              onClick={() => changeAward(gault_millau)}
              src={images.gaultMillau}
              alt="gault&millau"
            />
            <img
              ref={tasteOfJapan_imgRef}
              className="laurels__awards-img"
              onClick={() => changeAward(taste_of_japan)}
              src={images.tasteOfJapan}
              alt="taste-of-japan"
            />
            <div ref={blue_gradientRef} className="section__gradient-wrapper">
              <img className="section__gradient" src={images.sectionGradient2} alt="section__gradient2"></img>
            </div>
          </div>
        </div>
        <div className="hoshizora__laurels-content_wrapper">
          <div className="hoshizora__laurels-title_wrapper">
            <h1 ref={laurels_titleRef} className="headtext__yusei-magic">
              Laurels
            </h1>
            <div ref={laurels__title_accent} className="title_accent-line">
              <img
                ref={laurels__title_accent_star}
                className="laurels-accent_star"
                src={images.sparkle1}
                alt="title__accent_star"
              ></img>
            </div>
          </div>
          <div class="hoshizora__laurels-content" ref={laurels_contentRef}>
            <h2 className="p__yusei-magic">{award.title}</h2>
            <p className="p__kaisei-tokumin">{award.paragraph_one}</p>
            <p className="p__kaisei-tokumin">{award.paragraph_two}</p>
            <div className="hoshizora__laurels-bg_blur">
              <img
                ref={dateClan_logoRef}
                className="laurels__image-blur"
                src={images.dateClanLogo}
                alt="date-clan-logo"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="section__gradient-wrapper laurels__gold-gradient">
        <img className="section__gradient" src={images.sectionGradient3} alt="section__gradient2"></img>
      </div>
    </div>
  );
};

export default Laurels;
