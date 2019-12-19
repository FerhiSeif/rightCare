import React from 'react';
import PropTypes from 'prop-types';
import ImgUser from '../../../assets/images/onboard/channels/dark/user.svg';

const Header = (props) => {
  const {
    kind,
    addAgentsChannel,
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
            <img src={ImgUser} alt="Channel Icon" />
          </span>
          <span className="text">
            {currLang === 'en' ? name : nameFr}
          </span>
        </p>
        <div className="card-header-icon" aria-label="more options">
          { addAgentsChannel && addAgentsChannel.length > 0 ? (
            <span className="icon">
              {addAgentsChannel.length}
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
  name: PropTypes.string.isRequired,
  nameFr: PropTypes.string.isRequired,
  addAgentsChannel: PropTypes.shape({}).isRequired,
};

export default Header;
