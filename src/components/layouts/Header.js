import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import DesktopLogo from '../../assets/images/logo/medium.png';

const Header = (props) => {
  const topNavCustomStyle = {
    navbar: {
      padding: '1rem 5rem',
      borderBottom: '1px solid #e5e5e5',
    },
    isPrimary: {
      borderRadius: '10px',
      backgroundColor: '#0089e1',
      marginRight: '5rem',
      marginBottom: 0,
      marginTop: '.5rem',
    },
    selectLang: {
      borderRadius: '34px',
      boxShadow: '0 3px 20px 0 rgba(137, 137, 137, 0.24)',
      border: 'solid 1px #e5e5e5',
    },
    control: {
      width: '9rem',
    },
  };

  const {
    t,
    options,
    defaultLang,
    changeLang,
  } = props;

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation" style={topNavCustomStyle.navbar}>
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img alt="logo icon" src={DesktopLogo} />
          </a>

          <a href="!#" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a href="!#" className="button is-primary" style={topNavCustomStyle.isPrimary}>
                  <strong>{t('header.get_started')}</strong>
                </a>
                <Select
                  options={options}
                  value={defaultLang}
                  onChange={changeLang}
                  className="App-Select"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

Header.propTypes = {
  t: PropTypes.func.isRequired,
  options: PropTypes.shape([]).isRequired,
  defaultLang: PropTypes.shape({}).isRequired,
  changeLang: PropTypes.func.isRequired,
};

export default Header;
