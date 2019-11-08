import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Carder from '../../common/Carder';
import FakeChannels from '../../../faker/channels';
import DarkEmailIcon from '../../../assets/images/onboard/channels/dark/add-message.svg';

const AssignAgent = ({ t }) => (
  <div className="card-container">
    <Carder
      kind="agent"
      icon="not-found-icon"
      darkIcon={DarkEmailIcon}
      t={t}
      title="Email"
      content="No agent have been added"
      buttonText="Add agent"
      serviceCount={6}
      agentAssigned
      hasAgents
      isChannelEmpty={false}
      channelSelected={false}
    />
    { FakeChannels.map((item, i) => (
      <Carder
        kind="agent"
        icon={item.icon}
        darkIcon={item.darkIcon}
        key={i}
        t={t}
        title={item.type}
        content="No agent have been added"
        buttonText="Add agent"
        hasAgents={false}
        isChannelEmpty={false}
        channelSelected={false}
        serviceCount={6}
        agentAssigned={false}
      />
    ))}
  </div>
);

AssignAgent.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(AssignAgent);
