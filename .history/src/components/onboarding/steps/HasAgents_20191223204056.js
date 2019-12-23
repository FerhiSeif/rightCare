import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import FakeAgents from '../../../faker/agents';
import ProfileIcon from '../../../assets/images/dashboard/menu/profile.svg';


const HasAgents = (props) => {
  const {
    t,
    kind,
    title,
    currentStep,
    countAgentAdd,
  } = props;

  console.log(countAgentAdd);
  

  const agentStyle = {
    addMore: {
      background: countAgentAdd !== 0 ? '#ffffff' : 'rgba(200, 211, 214, 0.12)',
    },
  };

  const localService = JSON.parse(localStorage.getItem('cr_services'));

  const newValues = [];
  if (localService) {
    for (let i = 0; i < localService.length; i++) {
      newValues.push(...localService[i].agents);
    }
  }

  const selectedServices = newValues.filter((v, i) => newValues.indexOf(v) === i);

  const addedAgents = FakeAgents.filter((agent) => (selectedServices.indexOf(agent.id) >= 0));

  return (
    <div className="card-custom" style={agentStyle.addMore}>
      <header className="card-header">
        <p className="card-header-title">
          <span className="icon">
            <img src={ProfileIcon} alt="Channel Icon" />
          </span>
          {title}
        </p>
        <div className="card-header-icon" aria-label="more options">
          <span className="icon">
            {addedAgents.length}
          </span>
        </div>
      </header>
      <div className="card-content">
        <div className="content">
          <div className="content-container">
            { addedAgents.map((item, i) => (
                <div className={`${kind === 'channel' ? 'cobok-channel' : 'cobok'}`} key={i}>
                  <div data-tooltip={item.full_name} className="tooltip-title">
                    <img src={item.profile_image} alt={item.full_name} data-tooltip={item.full_name} />
                  </div>
                </div>
            ))}
            <br />
            { FakeAgents.length > 10 && (
              <div className="cobok-channel">
                <button className="button is-primary is-outlined btn-customed">{t('onboard.view_all')}</button>
              </div>
            )}
            {currentStep !== 2 && (<div className="add-more" style={agentStyle.addMore}>
              <span>+</span>
            </div>)}
          </div>
        </div>
      </div>
    </div>
  );
};

HasAgents.propTypes = {
  t: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  currentStep: PropTypes.number.isRequired,
  countAgentAdd: PropTypes.number.isRequired,
};

export default withTranslation()(HasAgents);
