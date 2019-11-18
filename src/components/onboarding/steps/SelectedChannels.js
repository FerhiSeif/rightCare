import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import MailIcon from '../../../assets/images/onboard/services/add-message.svg';
import AnswerIcon from '../../../assets/images/onboard/services/answer.svg';

const SelectedChannels = (props) => {
  const {
    t,
    kind,
    title,
    icon,
    handleAddRessourceModal,
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
    <div className="card-custom">
      <header className="card-header">
        <p className="card-header-title">
          <span className="icon">
            <img src={icon} alt="Channel Icon" />
          </span>
          {title}
        </p>
        <a href="/onboard" className="card-header-icon" aria-label="more options">
          <span className="icon">
            0
          </span>
        </a>
      </header>
      <div className="card-content">
        <div className="content">
          <div className="service-container-custom" style={serviceStyle.serviceContainer}>
            <div className="service-card">
              <img src={MailIcon} alt="mail service" style={serviceStyle.firstImage} />
              <span>{t('onboard.steps.email')}</span>
            </div>
            <div className="service-card">
              <img src={AnswerIcon} alt="answer service" />
              <span>{t('onboard.steps.live_chat')}</span>
            </div>
            <div className="add-more" onClick={handleAddRessourceModal}><span>+</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

SelectedChannels.propTypes = {
  t: PropTypes.func.isRequired,
  handleAddRessourceModal: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired,
};

export default withTranslation()(SelectedChannels);
