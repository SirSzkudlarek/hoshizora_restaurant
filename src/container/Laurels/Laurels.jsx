import React, { useState, useRef } from 'react';
import { images, laurels__content } from '../../constants';
import gsap from 'gsap';

import './Laurels.css';

const Laurels = () => {
  const { introduction, the_tabelog, mechelin, gault_millau, taste_of_japan } = laurels__content;
  const [award, SetAward] = useState(introduction);

  const laurels_contentRef = useRef();

  const laurels_contentAnim = () => {
    gsap.fromTo(laurels_contentRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5, ease: 'none' });
  };

  const changeAward = (award) => {
    SetAward(award);
    laurels_contentAnim();
  };

  return (
    <div className="hoshizora__laurels flex_center section__padding">
      <div className="hoshizora__laurels-wrapper">
        <div className="hoshizora__laurels-gallery">
          <img onClick={() => changeAward(the_tabelog)} src={images.theTabelogAward} alt="the-tabelog-award" />
          <img onClick={() => changeAward(mechelin)} src={images.mechelinThreeStars} alt="mechelin-three-stars" />
          <img onClick={() => changeAward(gault_millau)} src={images.gaultMillau} alt="gault&millau" />
          <img onClick={() => changeAward(taste_of_japan)} src={images.tasteOfJapan} alt="taste-of-japan" />
          <div className="section__gradient-wrapper">
            <img className="section__gradient" src={images.sectionGradient2} alt="section__gradient2"></img>
          </div>
        </div>
        <div className="hoshizora__laurels-content_wrapper">
          <div className="hoshizora__laurels-title_wrapper">
            <h1 className="headtext__yusei-magic">Laurels</h1>
            <div className="title_accent-line"></div>
          </div>
          <div class="hoshizora__laurels-content" ref={laurels_contentRef}>
            <h2 className="p__yusei-magic">{award.title}</h2>
            <p className="p__kaisei-tokumin">{award.paragraph_one}</p>
            <p className="p__kaisei-tokumin">{award.paragraph_two}</p>
            <div className="hoshizora__laurels-bg_blur">
              <img className="laurels__image-blur" src={images.dateClanLogo} alt="date-clan-logo"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="section__gradient-wrapper bottom__gradient">
        <img className="section__gradient" src={images.sectionGradient3} alt="section__gradient2"></img>
      </div>
    </div>
  );
};

export default Laurels;
