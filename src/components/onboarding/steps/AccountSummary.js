import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Carder from '../../common/Carder';
import SelectedChannels from './SelectedChannels';
import AgentIcon from '../../../assets/images/dashboard/menu/profile.svg';
import ChannelIcon from '../../../assets/images/dashboard/menu/channel.svg';
import FakeChannels from '../../../faker/channels';

const AccountSummary = (props) => {
  const {
    t,
    handleChooseService,
    checkedServices,
    activeServices,
    handleAddRessourceModal,
  } = props;

  const localService = JSON.parse(localStorage.getItem('cr_services'));
  const localChecked = JSON.parse(localStorage.getItem('cr_actservices'));
  console.log('localChecked', localChecked);

  const selectedServices = FakeChannels
    .filter((channel) => activeServices.indexOf(channel.type) >= 0);

  return (
    <div className="card-container">
      {
        selectedServices.length > 0 && (localService && localService.length) > 0 ? (
          <>
            { localService.map((item, i) => (
              <Carder
                kind="channel"
                icon={item.darkIcon}
                darkIcon={item.darkIcon}
                key={i}
                t={t}
                title={item.type}
                content="No agent have been added"
                buttonText="Add agent"
                isChannelEmpty={false}
                channelSelected={false}
                serviceCount={5}
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
                  kind="channel"
                  icon={item.darkIcon}
                  darkIcon={item.darkIcon}
                  key={i}
                  t={t}
                  title={`${item.type} channel`}
                  content="No agent have been assinged to this channel"
                  buttonText="Assign agent"
                  hasAgents={false}
                  isChannelEmpty={false}
                  channelSelected={false}
                  serviceCount={4}
                  agentAssigned={false}
                  assignedAgents={item.agents}
                  checkedServices={checkedServices}
                />
              ))}
          </>
        )
      }

      <SelectedChannels
        kind="channel"
        t={t}
        handleAddRessourceModal={handleAddRessourceModal}
        handleChooseService={handleChooseService}
        title="Channels selected"
        icon={ChannelIcon}
      />

      <Carder
        kind="channel"
        t={t}
        title="Email channel"
        content="No agent have been assinged to this channel"
        buttonText="Assign agent"
        serviceCount={4}
        icon={AgentIcon}
        isChannelEmpty
        hasAgents
        handleChooseService={handleChooseService}
        checkedServices={checkedServices}
        assignedAgents={[]}
      />

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
