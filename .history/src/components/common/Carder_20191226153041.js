import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import FakeAgents from '../../faker/agents';

import Header from './shared/Header';
import Content from './shared/Content';

const Carder = (props) => {
  const {
    t,
    kind,
    name,
    nameFr,
    type,
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
    currentStep,
  } = props;

  // chargement de la liste des agents
  const [state, setState] = useState({
    addAgentsChannel: assignedAgents && FakeAgents.filter((agent) => assignedAgents.includes(agent.id)),
    initAgents: FakeAgents,
  });

  const handleSelectAll = (status) => {
    if (status) {
      /*
        action de cocher tous les agents disponible
      */
      // eslint-disable-next-line no-restricted-syntax
      for (const item of state.initAgents) {
        const localService = JSON.parse(localStorage.getItem('cr_services'));
        const correspondingChannel = localService.find(
          (option) => option.type.toLowerCase().includes((type).toLowerCase()),
        );
        if (!correspondingChannel.agents.includes(item.id)) {
          correspondingChannel.agents.push(item.id);
        }
        localStorage.setItem('cr_services', JSON.stringify(localService));
        const updatedAgents = FakeAgents.filter((agent) => correspondingChannel.agents.includes(agent.id));
        setState((prevState) => ({
          ...prevState,
          addAgentsChannel: updatedAgents,
        }));
      }
    }

    if (!status) {
      /*
        action de décocher tous les agents disponible
      */
      // eslint-disable-next-line no-restricted-syntax
      for (const item of state.initAgents) {
        const localService = JSON.parse(localStorage.getItem('cr_services'));
        const { agents } = localService.find((option) => option.type.toLowerCase().includes((type).toLowerCase()));
        if (agents.includes(item.id)) {
          const index = agents.indexOf(item.id);
          if (index > -1) { agents.splice(index, 1); }
          localStorage.setItem('cr_services', JSON.stringify(localService));
          const updatedAgents = FakeAgents.filter((agent) => agents.includes(agent.id));
          setState((prevState) => ({
            ...prevState,
            addAgentsChannel: updatedAgents,
          }));
        }
      }
    }
  };

  const handleAddAgent = (e, id) => {
    const localService = JSON.parse(localStorage.getItem('cr_services'));
    const correspondingChannel = localService.find(
      (option) => option.type.toLowerCase().includes((type).toLowerCase()),
    );
    if (!correspondingChannel.agents.includes(id)) {
      correspondingChannel.agents.push(id);
    }
    localStorage.setItem('cr_services', JSON.stringify(localService));
    const updatedAgents = FakeAgents.filter((agent) => correspondingChannel.agents.includes(agent.id));
    setState((prevState) => ({
      ...prevState,
      addAgentsChannel: updatedAgents,
    }));
  };

  const handleRemoveAgent = (e, id) => {
    const localService = JSON.parse(localStorage.getItem('cr_services'));
    const { agents } = localService.find((option) => option.type.toLowerCase().includes((type).toLowerCase()));
    if (agents.includes(id)) {
      const index = agents.indexOf(id);
      if (index > -1) { agents.splice(index, 1); }
      localStorage.setItem('cr_services', JSON.stringify(localService));
      const updatedAgents = FakeAgents.filter((agent) => agents.includes(agent.id));
      setState((prevState) => ({
        ...prevState,
        addAgentsChannel: updatedAgents,
      }));
    }
  };

  const fetchDatas = (id) => JSON
    .parse(localStorage.getItem('cr_services'))
    .find((option) => option.type.toLowerCase()
      .includes((type)
        .toLowerCase()))
    .agents.includes(id);

  const listAgents = (
    <ul className="menu-list">
      { state.initAgents && state.initAgents.map((item, i) => (
        <li key={i}>
          <img src={item.profile_image} alt="portrait" />
          <span className="user-name">{item.full_name}</span>
          {
            fetchDatas(item.id) ? (
              <span className="remove-user" onClick={(e) => handleRemoveAgent(e, item.id)}> - </span>
            )
            : (
              <span className="add-user" onClick={(e) => handleAddAgent(e, item.id)}> + </span>
            )
          }
        </li>
      ))}
    </ul>
  );

  const [selectAll, setSelecteAll] = useState(false);
  const handleSelectAllAgents = (select) => {
    const status = !select;
    setSelecteAll(status);
    handleSelectAll(status);
  };
  //
  const checkboxSelectAll = (
    <input type="checkbox" checked={selectAll} onClick={() => handleSelectAllAgents(selectAll)} />
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
      background: state.addAgentsChannel && state.addAgentsChannel.length !== 0 ? '#fff' : '#fff',
    },
  };

  return (
    <div className={[1, 2, 4, 5].indexOf(serviceCount) !== -1 ? 'card-custom' : 'card'} style={cardStyle.emptyChannel}>

      <Header
        t={t}
        kind={kind}
        addAgentsChannel={state.addAgentsChannel}

        name={name}
        nameFr={nameFr}

        i18n={i18n}
      />
      <Content
        agentAssigned={agentAssigned}
        addAgentsChannel={state.addAgentsChannel}
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
        content={listAgents}
        checkboxSelectAll={checkboxSelectAll}
        kind={kind}
        buttonText={t('onboard.steps.continue')}
        agentModal={referedModal}
        agentCount={state.initAgents.length}
        handleChooseService={handleChooseService}
        checkedServices={checkedServices}
        handleCloseRessourceModal={handleCloseRessourceModal}
        handleSearchAgent={handleSearchAgent}
        title={kind === 'agent' ? t('onboard.steps.add_agents') : t('onboard.steps.add_channel')}
        handleSelectAll={handleSelectAll}
      />
    </div>
  );
};

Carder.propTypes = {
  t: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nameFr: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  handleChooseService: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  serviceCount: PropTypes.number.isRequired,
  agentAssigned: PropTypes.bool,
  isChannelEmpty: PropTypes.bool.isRequired,
  channelSelected: PropTypes.bool,
  checkedServices: PropTypes.shape({}).isRequired,
  assignedAgents: PropTypes.shape({}).isRequired,
  currentStep: PropTypes.number.isRequired,
};

export default Carder;
