import React from 'react';
import PropTypes from 'prop-types';

const SingleChannel = (props) => {
  const {
    i18n,
    agentCount,
    t,
    type,
    icon,
    nameFr,
  } = props;

  const currLang = i18n.language;

  return (
    <div className="columns">
      <div className={`${type}-icon column`}>
        <img alt="logo icon" src={icon} />
      </div>
      <div className="column col-content">
        {currLang === 'en' ? (
          <h4>
            {type}
            {' '}
            {t('side_menu.channel')}
          </h4>
        ) : (
          <h4>
            {nameFr}
          </h4>
        )}
        <span>
          {agentCount}
          {' '}
          {t('side_menu.agents_added')}
        </span>
      </div>
    </div>
  );
};

SingleChannel.propTypes = {
  i18n: PropTypes.shape({}).isRequired,
  t: PropTypes.func.isRequired,
  agentCount: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  nameFr: PropTypes.string.isRequired,
};

export default SingleChannel;
