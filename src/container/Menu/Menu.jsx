import React from 'react';

import MenuList from '../../components/MenuList/MenuList.jsx';
import { beefs, ramen, sashimi, sea__food } from '../../constants/index.js';

import './Menu.css';

const Menu = () => {
  return (
    <div className="hoshizora__menu flex_center section__padding" id="menu">
      <h2 className="headtext__yusei-magic">Our Special Menu</h2>

      <div className="hoshizora__menu-bento">
        <div className="hoshizora__menu-bento_col">
          <div className="hoshizora__menu-bento_box bg_sky-gradient">
            <h3 className="hoshizora__japanease-text p__kaisei-tokumin">A5ランクの牛肉</h3>
            <h3 className="p__yusei-magic">Beef (A5)</h3>
            <MenuList category={beefs} />
          </div>
          <div className="hoshizora__menu-bento_box bg_sky-gradient">
            <h3 className="hoshizora__japanease-text p__kaisei-tokumin">ラーメン</h3>
            <h3 className="p__yusei-magic">Ramen</h3>
            <MenuList category={ramen} />
          </div>
        </div>
        <div className="hoshizora__menu-bento_col">
          <div className="hoshizora__menu-bento_box bg_sky-gradient">
            <h3 className="hoshizora__japanease-text p__kaisei-tokumin">刺身</h3>
            <h3 className="p__yusei-magic">Sashimi</h3>
            <MenuList category={sashimi} />
          </div>
          <div className="hoshizora__menu-bento_box bg_sky-gradient">
            <h3 className="hoshizora__japanease-text p__kaisei-tokumin">Beef (A5)</h3>
            <h3 className="p__yusei-magic">シーフード</h3>
            <MenuList category={sea__food} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
