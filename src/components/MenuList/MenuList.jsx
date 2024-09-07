import React from 'react';
import { FaYenSign } from 'react-icons/fa6';

import { images } from '../../constants';
import './MenuList.css';

const MenuItem = ({ name, price, grams, description }) => {
  return (
    <div className="hoshizora__menu-list_item">
      <div className="hoshizora__menu-list-name">
        <p className="p__kaisei-tokumin">{name}</p>
        <div className="hoshizora__menu-list-description">
          <p className="p__kaisei-tokumin">
            {description}, {grams}g.
          </p>
        </div>
      </div>

      <div className="hoshizora__menu-list-price">
        <div className="star__line">
          <div className="star__line-line"></div>
          <img className="star__line-star" src={images.sparkle1} alt="star_line"></img>
        </div>
        <p className="p__kaisei-tokumin">
          <span>
            <FaYenSign />{' '}
          </span>
          {price}
        </p>
      </div>
    </div>
  );
};

const MenuList = ({ category }) => {
  return (
    <div className="hoshizora__menu-list">
      {category.map(({ id, name, price, grams, description }) => (
        <MenuItem key={id} name={name} price={price} grams={grams} description={description} />
      ))}
    </div>
  );
};

export default MenuList;
