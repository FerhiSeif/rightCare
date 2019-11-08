import React from 'react';
import PropTypes from 'prop-types';

const SingleChannel = (props) => {
  const {
    agentCount,
    t,
    type,
    icon,
  } = props;

  return (
    <div className="columns">
      <div className={`${type}-icon column`}>
        <img alt="logo icon" src={icon} />
      </div>
      <div className="column col-content">
        <h4>
          {type}
          {' '}
          {t('side_menu.channel')}
        </h4>
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
  t: PropTypes.func.isRequired,
  agentCount: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default SingleChannel;
