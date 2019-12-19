import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Carder from '../../common/Carder';
import SelectedChannels from './SelectedChannels';
import HasAgents from './HasAgents';
import ChannelIcon from '../../../assets/images/dashboard/menu/channel.svg';
import FakeChannels from '../../../faker/channels';
import MobileAddAgents from './MobileAddAgents';

const AccountSummary = (props) => {
  const {
    t,
    handleChooseService,
    checkedServices,
    activeServices,
    containerWidth,
    i18n,
  } = props;

  const localService = JSON.parse(localStorage.getItem('cr_services'));

  const selectedServices = FakeChannels
    .filter((channel) => activeServices.indexOf(channel.type) >= 0);

  return (
    <div className="card-container">
      { containerWidth > 768 && (activeServices && activeServices.length > 0) && (
        <>
          {
            selectedServices.length > 0 || (localService && localService.length) > 0 ? (
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
                    handleChooseService={handleChooseService}
                    checkedServices={checkedServices}
                    assignedAgents={item.agents}
                    i18n={i18n}
                    nameFr={item.name_fr}
                    currentStep={3}
                  />
                ))}
              </>
            ) : (
              <>
                { FakeChannels.filter((channel) => activeServices.indexOf(channel.type) >= 0)
                  .map((item, i) => (
                    <Carder
                      kind="channel"
                      icon={item.darkIcon}
                      darkIcon={item.darkIcon}
                      key={i}
                      t={t}
                      title={`${item.type} channel`}
                      content={t('onboard.steps.no_agent_has_been_assigned_to_this_channel')}
                      buttonText={t('onboard.steps.assign_agent')}
                      hasAgents={false}
                      isChannelEmpty={false}
                      channelSelected={false}
                      serviceCount={4}
                      agentAssigned={false}
                      assignedAgents={item.agents}
                      checkedServices={checkedServices}
                      i18n={i18n}
                      nameFr={item.name_fr}
                      currentStep={3}
                    />
                  ))}
              </>
            )
          }
        </>
      )}

      {containerWidth > 768 && (
        <>
          <SelectedChannels
            kind="channel"
            t={t}
            title={t('onboard.steps.channel_selected')}
            icon={ChannelIcon}
            checkedServices={checkedServices}
            handleChooseService={handleChooseService}
            i18n={i18n}
            currentStep={3}
          />

          <HasAgents
            kind="channel"
            t={t}
            title={t('onboard.steps.added_agents')}
            currentStep={3}
          />

        </>
      )}

      {containerWidth <= 768
        && (
          <MobileAddAgents
            icon={ChannelIcon}
            checkedServices={checkedServices}
            handleChooseService={handleChooseService}
            kinda="summary"
            currentStep={3}
          />
        )}
    </div>
  );
};

AccountSummary.propTypes = {
  t: PropTypes.func.isRequired,
  handleChooseService: PropTypes.func.isRequired,
  checkedServices: PropTypes.shape({}).isRequired,
  activeServices: PropTypes.shape([]).isRequired,
};

export default withTranslation()(AccountSummary);
