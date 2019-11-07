import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import MailIcon from '../../../assets/images/onboard/services/add-message.svg';
import AnswerIcon from '../../../assets/images/onboard/services/answer.svg';
import PhoneIcon from '../../../assets/images/onboard/services/call-back.svg';
import WebIcon from '../../../assets/images/onboard/services/id-card.svg';
import FaceIcon from '../../../assets/images/onboard/services/facebook.svg';
import TwitIcon from '../../../assets/images/onboard/services/twitter.svg';

const Services = (props) => {
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
      width: kind === 'channel' ? '21rem' : '28rem',
      margin: kind === 'channel' ? 'auto' : 'initial',
    },
  };

  return (
    <div className="service-container" style={serviceStyle.serviceContainer}>
      <div className="service-card">
        <img src={MailIcon} alt="mail service" style={serviceStyle.firstImage} />
        <span>Email</span>
      </div>
      <div className="service-card">
        <img src={AnswerIcon} alt="answer service" />
        <span>Live Chat</span>
      </div>
      <div className="service-card">
        <img src={PhoneIcon} alt="phone service" />
        <span>Live Chat</span>
      </div>
      <div className="service-card">
        <img src={WebIcon} alt="web service" />
        <span>Web form</span>
      </div>
      <div className="service-card">
        <img src={FaceIcon} alt="facebook service" />
        <span>Facebook</span>
      </div>
      <div className="service-card">
        <img src={TwitIcon} alt="twitter service" />
        <span>Twitter</span>
      </div>
    </div>
  );
};

Services.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(Services);
