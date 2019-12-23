import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Carder from '../../common/Carder';
import HasAgents from './HasAgents';
import ChannelIcon from '../../../assets/images/dashboard/menu/channel.svg';
import FakeChannels from '../../../faker/channels';
import MobileAddAgents from './MobileAddAgents';

const AccountSummary = (props) => {
  const {
    t,
    checkedServices,
    activeServices,
    containerWidth,
    i18n,
  } = props;

  const localService = JSON.parse(localStorage.getItem('cr_services'));

  const selectedServices = FakeChannels
    .filter((channel) => activeServices.indexOf(channel.type) >= 0);

  console.log(checkedServices);
  console.log(activeServices);
  console.log(localService);
  console.log(selectedServices);
  console.log(containerWidth);

  return (
    <div className="card-container">
      { containerWidth > 768 && (activeServices && activeServices.length > 0) && (
        <>
          {
            selectedServices.length > 0 || (localService && localService[0].agents.length) > 0 ? (
              <>
                { localService.map((item, i) => (
                  <Carder
                    kind="agent"
                    icon={item.darkIcon}
                    darkIcon={item.darkIcon}
                    key={i}
                    t={t}
                    title={item.type}
                    content={t('onboard.steps.no_agent_has_been_added')}
                    buttonText={t('onboard.steps.add_agent_btn')}
                    isChannelEmpty={false}
                    channelSelected={false}
                    serviceCount={5}
                    agentAssigned={false}
                    checkedServices={checkedServices}
                    assignedAgents={item.agents}
                    i18n={i18n}
                    nameFr={item.name_fr}
                    currentStep={2}
                  />
                ))}
              </>
            ) : (
              <>
                
              </>
            )
          }
        </>
      )}

      {containerWidth > 768 && (
        <HasAgents
          kind="channel"
          t={t}
          title={t('onboard.steps.agents_added')}
          currentStep={2}
        />
      )}

      {containerWidth <= 768
        && (
          <MobileAddAgents
            icon={ChannelIcon}
            checkedServices={checkedServices}
            kinda="summary"
            currentStep={2}
          />
        )}
    </div>
  );
};

AccountSummary.propTypes = {
  t: PropTypes.func.isRequired,
  checkedServices: PropTypes.shape({}).isRequired,
  activeServices: PropTypes.shape([]).isRequired,
  containerWidth: PropTypes.number.isRequired,
};

export default withTranslation()(AccountSummary);
