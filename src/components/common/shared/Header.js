import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const {
    kind,
    icon,
    darkIcon,
    initialAgents,
    name,
    nameFr,
    i18n,
  } = props;

  const currLang = i18n.language;

  return (
    <>
      <header className="card-header">
        <p className={`${kind === 'channel' ? 'card-header-title' : 'card-header-title agents'}`}>
          <span className="icon">
            <img src={`${kind === 'channel' ? icon : darkIcon}`} alt="Channel Icon" />
          </span>
          {currLang === 'en' ? name : nameFr}
        </p>
        <div className="card-header-icon" aria-label="more options">
          { initialAgents && initialAgents.length > 0 ? (
            <span className="icon">
              {initialAgents.length}
            </span>
          ) : (
            <span className="icon">
              0
            </span>
          )}
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
  kind: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  darkIcon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nameFr: PropTypes.string.isRequired,
  initialAgents: PropTypes.shape({}).isRequired,
};

export default Header;
