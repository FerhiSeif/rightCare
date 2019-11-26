import React from 'react';
import PropTypes from 'prop-types';
import DesktopLogo from '../../../../assets/images/logo/medium.png';

const Header = ({ containerWidth }) => (
  <div className="left-menu-logo-container">
    <a className="navbar-item" href="/">
      <img alt="logo icon" src={DesktopLogo} />
    </a>
    {containerWidth <= 768 && <span className="sidemenu-drawer-closer">x</span>}
  </div>
);

Header.propTypes = {
  containerWidth: PropTypes.number.isRequired,
};

export default Header;
