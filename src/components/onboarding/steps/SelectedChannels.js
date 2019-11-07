import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import MailIcon from '../../../assets/images/onboard/services/add-message.svg';
import AnswerIcon from '../../../assets/images/onboard/services/answer.svg';

const SelectedChannels = (props) => {
  const {
    t,
    kind,
  } = props;

  const serviceStyle = {
    firstImage: {
      marginBottom: '.2rem',
      marginTop: '.2rem',
    },
    serviceContainer: {
      width: kind === 'channel' ? 'initial' : '',
      margin: kind === 'channel' ? 'initial' : '',
    },
  };

  return (
    <div className={`${kind === 'channel' ? 'service-container-custom' : 'service-container'}`} style={serviceStyle.serviceContainer}>
      <div className="service-card">
        <img src={MailIcon} alt="mail service" style={serviceStyle.firstImage} />
        <span>Email</span>
      </div>
      <div className="service-card">
        <img src={AnswerIcon} alt="answer service" />
        <span>Live Chat</span>
      </div>
    </div>
  );
};

SelectedChannels.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(SelectedChannels);
