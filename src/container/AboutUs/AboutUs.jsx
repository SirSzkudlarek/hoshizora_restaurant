import React from 'react';
import { images } from '../../constants';
import Rings from '../../components/design/Rings';

import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="hoshizora__aboutUs bg_dark-blue flex_center section__padding" id="about">
      <div className="hoshizora__aboutUs-content flex_center">
        <div className="hoshizora__aboutUs-content_about">
          <h2 className="headtext__yusei-magic hoshizora__aboutUs-headtext">About Us</h2>
          <img className="spoon__img" src={images.spoon} alt="spoon"></img>
          <p className="p__kaisei-tokumin">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <button className="custom__button">Know more</button>
        </div>

        <div className="hoshizora__aboutUs-content_bowl flex_center">
          <img className="bowl-img" src={images.aboutUsPlate} alt="bowl"></img>
          <Rings />
        </div>

        <div className="hoshizora__aboutUs-content_history">
          <h2 className="hoshizora__aboutUs-headtext headtext__yusei-magic">Our History</h2>
          <img className="spoon__img" src={images.spoon} alt="spoon"></img>
          <p className="p__kaisei-tokumin">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <button className="custom__button">Know more</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
