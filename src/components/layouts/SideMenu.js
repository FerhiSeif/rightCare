import React from 'react';
import PropTypes from 'prop-types';
import Channels from './utilities/sidemenu/Channels';
import Header from './utilities/sidemenu/Header';
import MenuSide from './utilities/sidemenu/Menu';

const SideMenu = (props) => {
  const {
    t,
  } = props;
  const isEmpty = false; // when not emty display all available channels

  return (
    <div className="column">
      <aside className="menu">
        <Header />
        <div className="menu-container">
          <Channels t={t} isEmpty={isEmpty} />
          <MenuSide t={t} />
        </div>
      </aside>
    </div>
  );
};

SideMenu.propTypes = {
  t: PropTypes.func.isRequired,
};

export default SideMenu;
