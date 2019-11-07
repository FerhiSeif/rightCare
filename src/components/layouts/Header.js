import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import DesktopLogo from '../../assets/images/logo/medium.png';
import ProfileIcon from '../../assets/images/profile/idpic.jpg';
import NotifIcon from '../../assets/images/profile/notif.svg';
import SearchIcon from '../../assets/images/profile/search.svg';
import Analytics from '../dashboard/Analytics';

const Header = (props) => {
  const {
    t,
    options,
    defaultLang,
    changeLang,
    kind,
    isLogged,
  } = props;

  const topNavCustomStyle = {
    navbar: {
      padding: '.8rem 5rem',
      borderBottom: kind !== 'app' ? '1px solid #e5e5e5' : '0',
      backgroundColor: kind === 'dashboard' ? '#fafbfd' : '#fff',
    },
    isPrimary: {
      marginRight: '5rem',
      marginBottom: 0,
      fontSize: '18px',
    },
    selectLang: {
      borderRadius: '34px',
      boxShadow: '0 3px 20px 0 rgba(137, 137, 137, 0.24)',
      border: 'solid 1px #e5e5e5',
    },
    control: {
      width: '9rem',
    },
    profile: {
      width: '3.0625rem',
      height: '3.0625rem',
      border: 'solid 1px #e3e3e3',
      borderRadius: '50%',
      maxHeight: '3.0625rem',
      margin: '0 .5rem',
    },
    userName: {
      fontSize: '0.875rem',
      color: '#657288',
      margin: '0 .5rem',
    },
    search: {
      backgroundColor: kind === 'dashboard' ? '#fafbfd' : '#fff',
    },
  };

  return (
    <div className={`${kind === 'dashboard' ? 'column dashboard is-four-fifths' : ''}`}>
      <nav className="navbar" role="navigation" aria-label="main navigation" style={topNavCustomStyle.navbar}>
        { kind !== 'dashboard'
        && (
          <div className="navbar-brand">
            <a className="navbar-item" href="http://localhost:3000/">
              <img alt="logo icon" src={DesktopLogo} />
            </a>
            <a href="!#" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
        )}
        <div id="navbarBasicExample" className="navbar-menu">
          { kind === 'dashboard'
            && (
              <div className="navbar-start">
                <div className="field navbar-item">
                  <p className="control has-icons-left has-icons-right">
                    <input className="input search-input" type="text" placeholder={t('header.search')} style={topNavCustomStyle.search} />
                    <span className="icon is-small is-left">
                      <img alt="profil icon" src={SearchIcon} />
                    </span>
                  </p>
                </div>
              </div>
            )}
          <div className="navbar-end">
            <div className="navbar-item">
              { kind === 'onboard'
                && (
                  <a href="!#" className="button is-primary" style={topNavCustomStyle.isPrimary}>
                    {t('header.get_started')}
                  </a>
                )}
              { isLogged
                && (
                  <>
                    <img alt="notif icon" src={NotifIcon} />
                    <span style={topNavCustomStyle.userName}>Mashkour Abdel Aziz</span>
                    <img alt="profil icon" src={ProfileIcon} style={topNavCustomStyle.profile} />
                  </>
                )}
              <Select
                options={options}
                value={defaultLang}
                onChange={changeLang}
                className="App-Select"
              />
            </div>
          </div>
        </div>
      </nav>
      { kind === 'dashboard' && (<Analytics t={t} />)}
    </div>
  );
};

Header.propTypes = {
  t: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  defaultLang: PropTypes.shape({}).isRequired,
  changeLang: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default Header;
