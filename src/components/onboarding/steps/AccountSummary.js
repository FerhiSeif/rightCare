import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Carder from '../../common/Carder';
import AgentIcon from '../../../assets/images/dashboard/menu/profile.svg';
import ChannelIcon from '../../../assets/images/dashboard/menu/channel.svg';
import EmailIcon from '../../../assets/images/onboard/channels/add-message.svg';
import ChatIcon from '../../../assets/images/onboard/channels/answer.svg';

const AccountSummary = (props) => {
  const {
    t,
  } = props;
  const hasAgentsO = true;
  const hasAgentsA = false;
  const hasAgentsB = false;
  const hasAgentsC = false;

  return (
    <div className="card-container">
      <Carder
        kind="channel"
        t={t}
        title="Channel selected"
        content="No agent have been assinged to this channel"
        buttonText="Assign agent"
        serviceCount={4}
        icon={ChannelIcon}
        channelSelected
        isChannelEmpty={false}
        hasAgents={hasAgentsA}
      />
      <Carder
        kind="channel"
        t={t}
        title="Agents added"
        content="No agent have been assinged to this channel"
        buttonText="Assign agent"
        serviceCount={4}
        icon={AgentIcon}
        isChannelEmpty
        hasAgents={hasAgentsO}
      />
      <Carder
        kind="channel"
        t={t}
        title="Email channel"
        content="No agent have been assinged to this channel"
        buttonText="Assign agent"
        serviceCount={4}
        icon={EmailIcon}
        isChannelEmpty
        hasAgents={hasAgentsC}
      />
      <Carder
        kind="channel"
        t={t}
        title="Live channel"
        content="No agent have been assinged to this channel"
        buttonText="Assign agent"
        serviceCount={4}
        icon={ChatIcon}
        isChannelEmpty
        hasAgents={hasAgentsB}
      />
    </div>
  );
};

AccountSummary.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(AccountSummary);
