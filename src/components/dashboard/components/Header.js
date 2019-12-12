import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const {
    kind,
    i18n,
  } = props;

  const currLang = i18n.language;

  return (
    <>
      <header className="card-header">
        <p className='card-header-title'>
          Tickets settings
        </p>
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
