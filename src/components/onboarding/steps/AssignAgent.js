import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Carder from '../../common/Carder';
import FakeChannels from '../../../faker/channels';

const AssignAgent = (props) => {
  const {
    t,
    checkedServices,
    handleChooseService,
    activeServices,
    handleBack,
  } = props;

  const agentStyles = {
    empty: {
      marginBottom: '1rem',
      fontSize: '1.5rem',
    },
    here: {
      cursor: 'pointer',
      textDecoration: 'underline',
      color: '#00bd39',
    },
  };


  const selectedServices = FakeChannels
    .filter((channel) => activeServices.indexOf(channel.type) >= 0);

  if (selectedServices.length > 0 && localStorage) {
    localStorage.setItem('cr_services', JSON.stringify(selectedServices));
  }

  const localService = JSON.parse(localStorage.getItem('cr_services'));

  return (
    <div className="card-container">
      {
        selectedServices.length > 0 && (localService && localService.length) > 0 ? (
          <>
            { localService.map((item, i) => (
              <Carder
                kind="agent"
                icon={item.icon}
                darkIcon={item.darkIcon}
                key={i}
                t={t}
                title={item.type}
                content="No agent have been added"
                buttonText="Add agent"
                isChannelEmpty={false}
                channelSelected={false}
                serviceCount={6}
                agentAssigned={false}
                handleChooseService={handleChooseService}
                checkedServices={checkedServices}
                assignedAgents={item.agents}
              />
            ))}
          </>
        ) : (
          <>
            { FakeChannels.filter((channel) => activeServices.indexOf(channel.type) >= 0)
              .map((item, i) => (
                <Carder
                  kind="agent"
                  icon={item.icon}
                  darkIcon={item.darkIcon}
                  key={i}
                  t={t}
                  title={item.type}
                  content="No agent have been added"
                  buttonText="Add agent"
                  isChannelEmpty={false}
                  channelSelected={false}
                  serviceCount={6}
                  agentAssigned={false}
                  handleChooseService={handleChooseService}
                  checkedServices={checkedServices}
                  assignedAgents={item.agents}
                />
              ))}
          </>
        )
      }
      { activeServices.length === 0 && (
        <div style={agentStyles.empty}>
          You have no selected channels, click <span style={agentStyles.here} className="select-channel-first" onClick={handleBack}>here</span> to choose channel(s).
        </div>
      )}
    </div>
  );
};

AssignAgent.propTypes = {
  t: PropTypes.func.isRequired,
  handleChooseService: PropTypes.func.isRequired,
  checkedServices: PropTypes.shape({}).isRequired,
  activeServices: PropTypes.shape([]).isRequired,
};

export default withTranslation()(AssignAgent);
