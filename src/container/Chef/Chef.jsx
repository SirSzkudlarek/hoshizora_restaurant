import React from 'react';

import './Chef.css';
import { images } from '../../constants';

const Chef = () => {
  return (
    <div className="hoshizora__chef flex_center section__padding" id="chef">
      <div>
        {'Image and name of our chef'}
        <div>
          <img src={images.chef} alt="chef"></img>
          <h2>Chef</h2>
          <p>Legendary Chef</p>
        </div>
        {'Some information about our chef..'}
        <div></div>
      </div>
    </div>
  );
};

export default Chef;
