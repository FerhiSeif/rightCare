import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import ProfileIcon from '../../assets/images/profile/idpic.jpg';
import FakeAgents from '../../faker/agents';
import SelectedChannels from '../onboarding/steps/SelectedChannels';

const Carder = (props) => {
  const [state, setState] = useState({ initialItems: FakeAgents });
  const {
    t,
    icon,
    kind,
    title,
    content,
    buttonText,
    serviceCount,
    agentAssigned,
    channelSelected,
  } = props;
  const alreadyAdded = true; // this needs to be dynamic for eah agent
  const agentCount = FakeAgents.length;
  const addAgent = (
    <ul className="menu-list">
      <li>
        <img src={ProfileIcon} alt="portrait" />
        <span className="user-name">Customers</span>
        <span className={alreadyAdded ? 'remove-user' : 'add-user'}>
          {alreadyAdded ? '-' : '+'}
        </span>
      </li>
      { state.initialItems.map((item, i) => (
        <li key={i}>
          <img src={item.profile_image} alt="portrait" />
          <span className="user-name">{item.full_name}</span>
          <span className="add-user">+</span>
        </li>
      ))}
    </ul>
  );

  const handleSearchAgent = (event) => {
    const newFilter = event.target.value;
    if (newFilter !== '') {
      setState(() => ({
        initialItems: state.initialItems.filter(
          (option) => option.full_name.toLowerCase().includes(newFilter.toLowerCase()),
        ),
      }));
    } else {
      setState(() => ({
        initialItems: FakeAgents,
      }));
    }
  };

  const agentModal = React.createRef();
  const channelModal = React.createRef();

  const referedModal = kind === 'agent' ? agentModal : channelModal;

  const handleAddRessourceModal = () => {
    kind === 'agent' ? agentModal.current.classList.add('is-active') : channelModal.current.classList.add('is-active');
  }

  const handleCloseRessourceModal = () => {
    kind === 'agent' ? agentModal.current.classList.remove('is-active') : channelModal.current.classList.remove('is-active');
  }

  const cardStyle = {
    agentStyle: {
      padding: channelSelected || kind === 'channel' ? 'padding: 1.3125rem' : '2.5rem 1.5rem',
    },
  };

  return (
    <div className={[1, 2, 4, 5].indexOf(serviceCount) !== -1 ? 'card-custom' : 'card'}>
      <header className="card-header">
        <p className={`${kind === 'channel' ? 'card-header-title' : 'card-header-title agents'}`}>
          <span className="icon">
            <img src={icon} alt="toto" />
          </span>
          {title}
        </p>
        <a href="!#" className="card-header-icon" aria-label="more options">
          <span className="icon">
            {agentCount}
          </span>
        </a>
      </header>
      <div className={`${agentAssigned ? 'sleep-padding' : 'card-content'}`} style={cardStyle.agentStyle}>
        { agentAssigned ? (
          <div className="content">
            <div className="content-container">
              { FakeAgents.map((item, i) => (
                <div className="cobok" key={i}>
                  <div data-tooltip={item.full_name} className="tooltip-title">
                    <img src={item.profile_image} alt={item.full_name} data-tooltip={item.full_name} />
                  </div>
                </div>
              ))}
              <div className="add-more" onClick={handleAddRessourceModal}>
                <span>+</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="content">
            { channelSelected ? (<SelectedChannels kind={kind} t={t} />) :
              (
                <div>
                  <p>{content}</p>
                  <button className="button is-success is-outlined" onClick={handleAddRessourceModal}>{buttonText}</button>
                </div>
              )}
          </div>
        )}
      </div>
      <Modal
        t={t}
        agentModal={referedModal}
        handleSearchAgent={handleSearchAgent}
        handleCloseRessourceModal={handleCloseRessourceModal}
        title={kind === 'agent' ? 'Add available agents' : 'Add channel'}
        content={addAgent}
        kind={kind}
        buttonText="Continue"
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
  buttonText: PropTypes.string.isRequired,
  serviceCount: PropTypes.number.isRequired,
  agentAssigned: PropTypes.bool.isRequired,
  channelSelected: PropTypes.bool.isRequired,
};

export default Carder;
