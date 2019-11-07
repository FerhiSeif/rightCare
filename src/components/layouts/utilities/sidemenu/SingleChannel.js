import React from 'react';
import PropTypes from 'prop-types';
import EmailIcon from '../../../../assets/images/dashboard/channel/email.svg';
import LiveIcon from '../../../../assets/images/dashboard/channel/live.svg';
import PhoneIcon from '../../../../assets/images/dashboard/channel/phone.svg';
import WebIcon from '../../../../assets/images/dashboard/channel/web.svg';


const SingleChannel = (props) => {
  const { agentCount, t, type } = props;
  const channelIcon = type === 'email' ? EmailIcon
      : type === 'live chat' ? LiveIcon
      : type === 'phone call' ? PhoneIcon
      : type === 'web form' ? WebIcon
      : '';
  const customClass = type === 'email' ? 'email-icon'
      : type === 'live chat' ? 'live-icon'
      : type === 'phone call' ? 'phone-icon'
      : type === 'web form' ? 'web-icon'
      : '';

  return (
    <div className="columns">
      <div className={`${customClass} column`}>
        <img alt="logo icon" src={channelIcon} />
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
};

export default SingleChannel;
