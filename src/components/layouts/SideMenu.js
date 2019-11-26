import React from 'react';
import PropTypes from 'prop-types';
import Channels from './utilities/sidemenu/Channels';
import Header from './utilities/sidemenu/Header';
import MenuSide from './utilities/sidemenu/Menu';

const SideMenu = (props) => {
  const {
    t,
    containerWidth,
  } = props;
  const isEmpty = false; // when not emty display all available channels

  return (
    <div className="column dashboard-side-menu">
      <aside className="menu">
        <Header containerWidth={containerWidth} />
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
  containerWidth: PropTypes.number.isRequired,
};

export default SideMenu;
