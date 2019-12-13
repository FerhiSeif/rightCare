import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import FakeAgents from '../../faker/agents';

import Header from './shared/Header';
import Content from './shared/Content';

const Carder = (props) => {
  const {
    t,
    icon,
    darkIcon,
    kind,
    title,
    content,
    buttonText,
    serviceCount,
    handleChooseService,
    checkedServices,
    agentAssigned,
    isChannelEmpty,
    channelSelected,
    assignedAgents,
    i18n,
    nameFr,
    currentStep,
  } = props;

  const [state, setState] = useState({
    initialAgents: assignedAgents && FakeAgents.filter((agent) => assignedAgents.includes(agent.id)),
    initAgents: FakeAgents,
  });

  const handleAddAgent = (e, id) => {
    const localService = JSON.parse(localStorage.getItem('cr_services'));
    const correspondingChannel = localService.find(
      (option) => option.type.toLowerCase().includes((title).toLowerCase()),
    );
    if (!correspondingChannel.agents.includes(id)) {
      correspondingChannel.agents.push(id);
    }
    localStorage.setItem('cr_services', JSON.stringify(localService));
    const updatedAgents = FakeAgents.filter((agent) => correspondingChannel.agents.includes(agent.id));
    setState((prevState) => ({
      ...prevState,
      initialAgents: updatedAgents,
    }));
  };

  const handleRemoveAgent = (e, id) => {
    const localService = JSON.parse(localStorage.getItem('cr_services'));
    const { agents } = localService.find((option) => option.type.toLowerCase().includes((title).toLowerCase()));
    if (agents.includes(id)) {
      const index = agents.indexOf(id);
      if (index > -1) { agents.splice(index, 1); }
      localStorage.setItem('cr_services', JSON.stringify(localService));
      const updatedAgents = FakeAgents.filter((agent) => agents.includes(agent.id));
      setState((prevState) => ({
        ...prevState,
        initialAgents: updatedAgents,
      }));
    }
  }

  const fetchDatas = (id) => JSON
    .parse(localStorage.getItem('cr_services'))
    .find((option) => option.type.toLowerCase()
      .includes((title)
        .toLowerCase()))
    .agents.includes(id);

  const listAgents = (
    <ul className="menu-list">
      { state.initAgents && state.initAgents.map((item, i) => (
        <li key={i}>
          <img src={item.profile_image} alt="portrait" />
          <span className="user-name">{item.full_name}</span>
          {
            fetchDatas(item.id) ? (<span className="remove-user" onClick={(e) => handleRemoveAgent(e, item.id)}>-</span>)
            :
            (<span className="add-user" onClick={(e) => handleAddAgent(e, item.id)}>+</span>)
          }
        </li>
      ))}
    </ul>
  );

  const handleSearchAgent = (event) => {
    const newFilter = event.target.value;
    if (newFilter !== '') {
      setState((prevState) => ({
        ...prevState,
        initAgents: FakeAgents.filter(
          (option) => option.full_name.toLowerCase().includes(newFilter.toLowerCase()),
        ),
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        initAgents: FakeAgents,
      }));
    }
  };

  const agentModal = React.createRef();
  const channelModal = React.createRef();

  const referedModal = kind === 'agent' ? agentModal : channelModal;

  const handleAddRessourceModal = () => {
    document.body.classList.add('modal-opened');
    kind === 'agent' ? agentModal.current.classList.add('is-active') : channelModal.current.classList.add('is-active');
  }

  const handleCloseRessourceModal = () => {
    document.body.classList.remove('modal-opened');
    kind === 'agent' ? agentModal.current.classList.remove('is-active') : channelModal.current.classList.remove('is-active');
  }

  const cardStyle = {
    agentStyle: {
      padding: channelSelected || kind === 'channel' ? 'padding: 1.3125rem' : '2.5rem 1rem',
    },
    emptyChannel: {
      background: state.initialAgents && state.initialAgents.length !== 0 ? '#ffffff' : 'rgba(200, 211, 214, 0.12)',
    },
  };

  return (
    <div className={[1, 2, 4, 5].indexOf(serviceCount) !== -1 ? 'card-custom' : 'card'} style={cardStyle.emptyChannel}>

      <Header
        kind={kind}
        initialAgents={state.initialAgents}
        icon={icon}
        darkIcon={darkIcon}
        title={title}
        i18n={i18n}
        nameFr={nameFr}
      />
      <Content
        agentAssigned={agentAssigned}
        initialAgents={state.initialAgents}
        handleAddRessourceModal={handleAddRessourceModal}
        channelSelected={channelSelected}
        kind={kind}
        t={t}
        isChannelEmpty={isChannelEmpty}
        content={content}
        buttonText={buttonText}
        cardStyle={cardStyle.agentStyle}
        currentStep={currentStep}
      />
      <Modal
        t={t}
        agentModal={referedModal}
        handleSearchAgent={handleSearchAgent}
        handleCloseRessourceModal={handleCloseRessourceModal}
        title={kind === 'agent' ? t('onboard.steps.add_available_agents') : t('onboard.steps.add_channel')}
        content={listAgents}
        kind={kind}
        buttonText={t('onboard.steps.continue')}
        handleChooseService={handleChooseService}
        checkedServices={checkedServices}
        agentCount={state.initAgents.length}
      />
    </div>
  );
};

Carder.propTypes = {
  t: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  kind: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  handleChooseService: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  serviceCount: PropTypes.number.isRequired,
  agentAssigned: PropTypes.bool,
  isChannelEmpty: PropTypes.bool.isRequired,
  channelSelected: PropTypes.bool,
  checkedServices: PropTypes.shape({}).isRequired,
  assignedAgents: PropTypes.shape({}).isRequired,
  darkIcon: PropTypes.string.isRequired,
};

export default Carder;
