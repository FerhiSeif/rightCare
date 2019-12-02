import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const {
    kind,
    icon,
    darkIcon,
    initialAgents,
    title,
    i18n,
    nameFr,
  } = props;

  const currLang = i18n.language;

  return (
    <>
      <header className="card-header">
        <p className={`${kind === 'channel' ? 'card-header-title' : 'card-header-title agents'}`}>
          <span className="icon">
            <img src={`${kind === 'channel' ? icon : darkIcon}`} alt="Channel Icon" />
          </span>
          {currLang === 'en' ? title : nameFr}
        </p>
        <a href="/onboard" className="card-header-icon" aria-label="more options">
          { initialAgents && initialAgents.length > 0 ? (
            <span className="icon">
              {initialAgents.length}
            </span>
          ) : (
            <span className="icon">
              0
            </span>
          )}
        </a>
      </header>
    </>
  );
};

Header.propTypes = {
  kind: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  darkIcon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  initialAgents: PropTypes.shape({}).isRequired,
};

export default Header;
