import React from 'react';
import PropTypes from 'prop-types';
// import Channels from './utilities/sidemenu/Channels';
import Header from './utilities/sidemenu/Header';
import MenuSide from './utilities/sidemenu/Menu';
import logoRC from '../../assets/images/logo/IogoRC.png';

const SideMenu = (props) => {
  const {
    t,
    i18n,
    containerWidth,
  } = props;

  const isEmpty = false; // when not emty display all available channels

  return (
    <div className="column dashboard-side-menu">
      <aside className="menu">
        <Header containerWidth={containerWidth} />
        <div className="menu-container">

          {/* <Channels t={t} isEmpty={isEmpty} i18n={i18n} /> */}

          <MenuSide t={t} />

          <div className="logo-container">
            <p>Powered by</p>
            <img src={logoRC} alt="logo-right-com" />
          </div>
        </div>
      </aside>
    </div>
  );
};

SideMenu.propTypes = {
  i18n: PropTypes.shape({}).isRequired,
  t: PropTypes.func.isRequired,
  containerWidth: PropTypes.number.isRequired,
};

export default SideMenu;
