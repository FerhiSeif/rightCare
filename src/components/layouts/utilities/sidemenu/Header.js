import React from 'react';
import DesktopLogo from '../../../../assets/images/logo/medium.png';

const Header = () => (
  <div className="left-menu-logo-container">
    <a className="navbar-item" href="/">
      <img alt="logo icon" src={DesktopLogo} />
    </a>
  </div>
);

export default Header;
