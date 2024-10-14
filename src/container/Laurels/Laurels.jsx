import React, { useState } from 'react';
import { images, laurels__content } from '../../constants';

import './Laurels.css';

const Laurels = () => {
  const { introduction, the_tabelog, mechelin, gault_millau, taste_of_japan } = laurels__content;
  const [award, SetAward] = useState(introduction);

  const changeAward = (award) => {
    SetAward(award);
  };

  return (
    <div className="hoshizora__laurels flex_center section__padding">
      <h1 className="headtext__yusei-magic">Laurels</h1>
      <div className="hoshizora__laurels-wrapper">
        <div class="hoshizora__laurels-gallery">
          <img onClick={() => changeAward(the_tabelog)} src={images.theTabelogAward} alt="the-tabelog-award" />
          <img onClick={() => changeAward(mechelin)} src={images.mechelinThreeStars} alt="mechelin-three-stars" />
          <img onClick={() => changeAward(gault_millau)} src={images.gaultMillau} alt="gault&millau" />
          <img onClick={() => changeAward(taste_of_japan)} src={images.tasteOfJapan} alt="taste-of-japan" />
          <div className="section__gradient-wrapper">
            <img className="section__gradient" src={images.sectionGradient2} alt="section__gradient2"></img>
          </div>
        </div>
        <div class="hoshizora__laurels-content">
          <h2 className="p__yusei-magic">{award.title}</h2>
          <p className="p__kaisei-tokumin">{award.paragraph_one}</p>

          <p className="p__kaisei-tokumin">{award.paragraph_two}</p>
        </div>
      </div>
    </div>
  );
};

export default Laurels;
