/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import DesktopLogo from '../../assets/images/logo/medium.png';
import ProfileIcon from '../../assets/images/profile/idpic.jpg';
import NotifIcon from '../../assets/images/profile/notif.svg';
import SearchIcon from '../../assets/images/profile/search.svg';
import DrawerIcon from '../../assets/images/dashboard/drawer.svg';
import AnalyticsManager from '../dashboard/AnalyticsManager';
import SettingsManager from '../dashboard/SettingsManager';
import DrawerLayout from './DrawerLayout';
import Notification from './utilities/Notification';

const Header = (props) => {
  const {
    i18n,
    t,
    options,
    defaultLang,
    changeLang,
    kind,
    isLogged,
    containerWidth,
    containerHeight,
  } = props;

  const [state, setState] = React.useState({ left: false });

  const toggleDrawer = (side, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const topNavCustomStyle = {
    navbar: {
      padding: '.8rem 1rem .8rem 5rem',
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
    select: {
      width: '5rem',
    },
  };

  // const [contentNotification, setContentNotification] = useState({ title: '', msg: '' });
  const [activeNotification, setActiveNotification] = useState(false); // false , true
  const [statusNotification, setStatusNotification] = useState(''); // '' , success , danger
  const [contentNotification, setContentNotification] = useState({ title: '', msg: '' });

  const handleAddNotification = (status = 'success', active = true, content = {}) => {
    setContentNotification({ title: t('notification.title'), msg: t('notification.msg') });
    // setContentNotification(content); // content = objet
    setStatusNotification(status); // success , danger
    setActiveNotification(active); // false , true
  };

  const handleCloseNotification = () => {
    setStatusNotification('');
    setContentNotification({ title: '', msg: '' });
    setActiveNotification(false); // false , true
  };

  useEffect(() => {
    handleAddNotification();
    return () => {
      handleCloseNotification();
    };
  }, []);

  return (
    <div className={`${(kind === 'dashboard' || kind === 'settings') ? 'column dashboard is-four-fifths' : ''}`}>
      <nav className="navbar" role="navigation" aria-label="main navigation" style={topNavCustomStyle.navbar}>
        { (containerWidth <= 768 && kind !== 'onboard') && <img src={DrawerIcon} className="menu-dash-icon" onClick={toggleDrawer('left', true)}/>}
        { containerWidth <= 768 && <DrawerLayout toggleDrawer={toggleDrawer} left={state.left} t={t} containerWidth={containerWidth} />}
        { (kind !== 'dashboard') && (kind !== 'settings')
        && (
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img alt="logo icon" src={DesktopLogo} />
            </a>
            <div className="ml-auto">
              { containerWidth <= 768 && (
                <Select
                  options={options}
                  value={defaultLang}
                  onChange={changeLang}
                  className="App-Select"
                  isSearchable={false}
                  style={topNavCustomStyle.select}
                />
              )}
            </div>
          </div>
        )}
        <div id="navbarBasicExample" className="navbar-menu">
          { (kind === 'dashboard' || kind === 'settings')
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
                  <a href="/onboard" className="button is-primary" style={topNavCustomStyle.isPrimary}>
                    {t('header.get_started')}
                  </a>
                )}
              { isLogged
                ? (
                  <>
                    <img alt="notif icon" src={NotifIcon} />
                    <span style={topNavCustomStyle.userName}>Mashkour Abdel Aziz</span>
                    <img alt="profil icon" src={ProfileIcon} style={topNavCustomStyle.profile} />
                  </>
                )
                : (
                  <>
                    <img alt="profil icon" src={ProfileIcon} style={topNavCustomStyle.profile}
                    onClick={() => handleAddNotification()} />
                  </>
                )}
              <Select
                options={options}
                value={defaultLang}
                onChange={changeLang}
                className="App-Select"
                isSearchable={false}
              />
            </div>
          </div>
        </div>
      </nav>

      { (kind === 'dashboard')
        && activeNotification === true && (
          <Notification
            t={t}
            handleCloseNotification={handleCloseNotification}
            statusNotification={statusNotification}
            contentNotification={contentNotification}
            i18n={i18n}
          />
      )}

      { kind === 'dashboard' && (<AnalyticsManager t={t} containerWidth={containerWidth} containerHeight={containerHeight} i18n={i18n} />)}

      { kind === 'settings' && (<SettingsManager t={t} containerWidth={containerWidth} i18n={i18n} />)}
    </div>
  );
};

Header.propTypes = {
  t: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  defaultLang: PropTypes.shape({}).isRequired,
  i18n: PropTypes.shape({}).isRequired,
  changeLang: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
  containerWidth: PropTypes.number.isRequired,
  containerHeight: PropTypes.number.isRequired,
};

export default Header;
