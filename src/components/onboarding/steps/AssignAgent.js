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

  const localService = JSON.parse(localStorage.getItem('cr_services'));

  return (
    <div className="card-container">
      {
        localService && localService.length > 0 ? (
          <>
            { localService.map((item, i) => (
              <Carder
                kind="agent"
                icon={item.icon}
                darkIcon={item.darkIcon}
                key={i}
                t={t}
                title={item.type}
                content={t('onboard.steps.no_agent_has_been_added')}
                buttonText={t('onboard.steps.add_agent')}
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
                  content={t('onboard.steps.no_agent_has_been_added')}
                  buttonText={t('onboard.steps.add_agent')}
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
      { localService.length === 0 && (
        <div style={agentStyles.empty}>
          {t('onboard.steps.you_have_no_selected_channels_click')}
          <span
            style={agentStyles.here}
            className="select-channel-first"
            onClick={handleBack}> {t('onboard.steps.here')}
          </span> {t('onboard.steps.to_choose_channel(s)')}.
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
