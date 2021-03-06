import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
// import MoreIcon from '../../../assets/images/dashboard/more.svg';
import FakeAgents from '../../../faker/agents';
import User from '../../../assets/images/tickets/user.svg';
import Envelope from '../../../assets/images/tickets/envelope.svg';
import SearchIcon from '../../../assets/images/profile/search.svg';
import ProfileIcon from '../../../assets/images/profile/idpic.jpg';
import Phone from '../../../assets/images/tickets/phone-call.svg';
import ArrowDown from '../../../assets/images/tickets/full-down-arrow.svg';

const ticketsLog = [
  {
    agent: ProfileIcon,
    activity: 'change ticket proprity',
    date: '1 min ago',
  },
  {
    agent: ProfileIcon,
    activity: 'Change Ticket Status',
    date: '1 min ago',
  },
  {
    agent: ProfileIcon,
    activity: 'Tag Jean-Julian & Venance to ticket',
    date: '1 min ago',
  },
  {
    agent: ProfileIcon,
    activity: 'Assign himself to ticket',
    date: '1 min ago',
  },
  {
    agent: ProfileIcon,
    activity: 'Create Ticket #34421231',
    date: '1 min ago',
  },
];
class MessageTicket extends Component {
  constructor(props) {
    super(props);

    const { t } = props;

    this.state = {
      displayMessage: false,
      assegneeModalOpen: false,
      initAgents: FakeAgents,
      multiValue: 'High',
      multiValuestat: 'Pending',
      priority: [
        { value: 'High', label: t('tickets.details_ticket.priority_select.high'), index: 'High' },
        { value: 'Medium', label: t('tickets.details_ticket.priority_select.medium'), index: 'Medium' },
        { value: 'Low', label: t('tickets.details_ticket.priority_select.low'), index: 'Low' },
      ],
      status: [
        { value: 'Pending', label: t('tickets.details_ticket.status_select.pending'), index: 'Pending' },
        { value: 'Resolved', label: t('tickets.details_ticket.status_select.resolved'), index: 'Resolved' },
        { value: 'New', label: t('tickets.details_ticket.status_select.new'), index: 'New' },
      ],
    };
  }

  listAgents = () => (
    <ul className=" menu-list menu-list-ticket">
      {this.state.initAgents
        && this.state.initAgents.map((item, i) => (
          <li key={i}>
            <img src={item.profile_image} alt="portrait" />
            <span className="user-name">{item.full_name}</span>
            {
              // fetchDatas(item.id) ? (<span className="remove-user" onClick={()=>console.log('hii')/*(e) => handleRemoveAgent(e, item.id)*/}>-</span>)
              // :
              <span
                className="add-user"
                onClick={
                  () => console.log('hii') /* (e) => handleAddAgent(e, item.id) */
                }
              >
                +
              </span>
            }
          </li>
        ))}
    </ul>
  );

  // change ticket priotity
  handleOnChangePrio = (value) => {
    this.setState({ multiValue: value });
  };

  handleOnChangeStat = (value) => {
    this.setState({ multiValuestat: value });
  };

  render() {
    const {
      i18n, t, kind, handleCreateTicket,
    } = this.props;

    const {
      displayMessage, status, priority, assegneeModalOpen,
    } = this.state;

    const statusView = status.map((elm, i) => ({
      ...elm,
      label: (
        <>
          <button
            className="ticket-select-status"
            style={{
              background: `${
                elm.index === 'Pending'
                  ? '#FF9B21'
                  : elm.index === 'New'
                    ? '#0089E1'
                    : '#00BD39'
              }`,
            }}
          />
          {elm.label}
        </>
      ),
    }));

    const priorutyView = priority.map((elm, i) => ({
      ...elm,
      label: (
        <p
          className="ticket-select-priority"
          style={{
            background: `${
              elm.index === 'High'
                ? '#eb592321'
                : elm.index === 'Low'
                  ? '#6572884a'
                  : '#ff9b214d'
            }`,
            color: `${
              elm.index === 'High'
                ? '#EB5923'
                : elm.index === 'Low'
                  ? '#657288'
                  : '#FF9B21'
            }`,
          }}
        >
          {elm.label}
        </p>
      ),
    }));

    const customStyles = {
      option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? '#ddd' : '#fff',
        color: state.isSelected ? '#000' : '#000',
        cursor: 'pointer !important',
      }),
    };

    return (
      <>
        <div className="header-indicator">
          <h3 className="header-indic-title1">
            { t('tickets.details_ticket.header.ticket_table') }
          </h3>
          {' > '}
          <p className="header-indic-title2">
            { t('tickets.details_ticket.header.tickets_message') }
          </p>
        </div>
        <div className="ticketnalytics-header">
          <h2 className="dashboard-title">{ t('tickets.details_ticket.ticket_number') } #34421231</h2>
          <button className="create_ticketbtn" onClick={() => handleCreateTicket()}>
            + 
            {' '}
            { t('tickets.ticket_btn_create').toUpperCase() }
          </button>
        </div>
        <div className="columns analytics-columns MessageTicket-conaitner">
          <div className="section1 tecket-detail">
            <div className="profilePicture-contain">
              <img src={ProfileIcon} className="profilepicture" />
            </div>
            <div className="profil-contain">
              <h3 className="profil-name">
                Cara Doe
              </h3>
              <p className="creationDate">
                12 Sept 2019 7:00 PM
              </p>
              <h1 className="ticketTitle">
                Downtime on RightKiosk
              </h1>
              <div className="dashet-line" />
              <h3 className="customer-text text-blue">
                { t('tickets.details_ticket.customer_details') }
              </h3>
              <div className="massageticket-input-cont">
                <div className="display-user-info">
                  <img
                    src={User}
                    className="massageticket-log"
                    alt="icon user"
                  />
                  <span className="custumers-detail">Martins JoeCole</span>
                </div>
                <div className="display-user-info">
                  <img
                    src={Envelope}
                    className="massageticket-log"
                    alt="icon mail"
                  />
                  {' '}
                  <span className="custumers-detail">
                    {' '}
                    Martins.JoeCole@yahoo.com
                  </span>
                </div>
                <div className="display-user-info">
                  <img
                    src={Phone}
                    className="massageticket-log"
                    alt="icon phone"
                  />
                  {' '}
                  <span className="custumers-detail">+221-121-11-123</span>
                </div>
              </div>
              <div
                style={{
                  marginTop: '30px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    borderTop: '1px dashed #c8d3d6',
                    width: '100%',
                    height: '1px',
                  }}
                />
                <span className="messagedisplay-btn">
                  <img
                    src={ArrowDown}
                    style={{
                      height: '10px',
                      width: '19px',
                    }}
                    onClick={() => this.setState({ displayMessage: !displayMessage })}
                  />
                </span>
                <div
                  style={{
                    borderTop: '1px dashed #c8d3d6',
                    width: '100%',
                    height: '1px',
                  }}
                />
              </div>
              <div
                className="massageticket-container"
                style={{ display: displayMessage ? 'block' : 'none' }}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
          <div className="section2">
            <div className="ticketAgent-container">
              <span className="ticketkeys">
                { t('tickets.details_ticket.date') }
              </span>
              {' '}
              <p className="ticketinfos displayInput">12 Sept 2019 7:00 PM</p>
            </div>
            <div className="ticketAgent-container">
              <span className="ticketkeys">
                { t('tickets.details_ticket.created') }
              </span>
              {' '}
              <p className="ticketinfos displayInput">
                {' '}
                <img
                  src={ProfileIcon}
                  className="profilepicture-Created"
                />
                {' '}
                Adisa Kola
              </p>
            </div>
            <div className="ticketAgent-container">
              <span className="ticketkeys ">
                { t('tickets.details_ticket.assignee') }
              </span>
              {' '}
              <p className="ticketinfos display-user-assegne">
                <img src={ProfileIcon} className="profilepicture-assignee" />
                <span className="custumers-detail"> Adisa Kola</span>
              </p>
              {' '}
              <div className="assign-agent-Container">
                <p
                  className="resseign-messageTick"
                  onClick={() => this.setState({
                    assegneeModalOpen: !this.state.assegneeModalOpen,
                  })}
                >
                  { t('tickets.details_ticket.reassign') }
                </p>

                  
                {/* composant Assign Agent to Ticket: Boutton Reassign  */}
                <div
                  className="assign-text-modal"
                  style={{
                    display: `${assegneeModalOpen ? 'flex' : 'none'}`,
                    left: '-179px',
                  }}
                >
                  <h2 className="title assign-modal-title">
                    { t('tickets.details_ticket.assign_agent_ticket') }
                  </h2>
                  <ul className="menu-list menu-list-ticket">
                    {' '}
                    <li className="assign-self">
                      <img src={ProfileIcon} alt="portrait" />
                      <span className="user-name">
                        { t('tickets.details_ticket.assign_ticket_myself') }
                      </span>
                      {
                        // fetchDatas(item.id) ? (<span className="remove-user" onClick={()=>console.log('hii')/*(e) => handleRemoveAgent(e, item.id)*/}>-</span>)
                        // :
                        <span
                          className="add-user"
                          onClick={
                            () => console.log(
                              'hii',
                            ) /* (e) => handleAddAgent(e, item.id) */
                          }
                        >
                          +
                        </span>
                      }
                    </li>
                  </ul>
                  <div className="search-box assign-search">
                    <input
                      className="input"
                      type="text"
                      placeholder={t('tickets.details_ticket.search_agent_input')}
                    />
                    <img src={SearchIcon} alt="search" />
                  </div>
                  <section
                    className="modal-card-body"
                    style={{ width: '100%' }}
                  >
                    { this.listAgents() }

                    {/* { kind === 'agent' ? (<div>{agentCount === 0 &&<span>This agent can not be found in the list.</span>}{content}</div>) : <Services kind={kind} handleChooseService={handleChooseService} checkedServices={checkedServices} /> } */}
                  </section>
                  <footer className="assign-modal-footer">
                    <button
                      className="button is-primary"
                      aria-label="close"
                      style={{ width: '100%' }}
                    >
                      {t('tickets.details_ticket.Assign')}
                    </button>
                  </footer>
                </div>
                {/* ** ** ** */}


              </div>
            </div>
            <div className="ticketAgent-container">
              <span className="ticketkeys">
                { t('tickets.details_ticket.priority') }
              </span>
              {' '}
              <Select
                styles={customStyles}
                theme={(theme) => ({
                  ...theme,
                  colors: {
                    ...theme.colors,
                    primary: '#eee',
                    primary25: '#eee',
                  },
                })}
                options={priorutyView}
                onChange={this.handleOnChangePrio}
                value={this.state.multiValue}
                isSearchable={false}
                className="ticket-Select"
                placeholder=""
              />
              {/* <p className="ticketinfos">Adisa Kola</p> */}
            </div>
            <div className="ticketAgent-container">
              <span className="ticketkeys">
                { t('tickets.details_ticket.status') }
              </span>
              {' '}
              <Select
                styles={customStyles}
                options={statusView}
                onChange={this.handleOnChangeStat}
                value={this.state.multiValuestat}
                isSearchable={false}
                placeholder=""
              />
            </div>
            <div className="ticket-log-container">
              <div className="ticket-log-title">
                { t('tickets.details_ticket.ticket_log_activities') }
              </div>
              {ticketsLog.map((ticket, i) => (
                <div key={i} className={`ticket-log ${i === ticketsLog.length - 1 ? 'last' : ''}`}>

                  {/* <img src={} alt="profile picture"/> */}

                  <img src={ticket.agent} className="profilepicture-log" />

                  <div className="ticket-activities">
                    <p className="activity">{ticket.activity}</p>
                    <p className="activity-date ">{ticket.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="clode_ticketbtn" onClick={() => handleCreateTicket()}>
              { t('tickets.details_ticket.close_ticket') }
            </button>
          </div>
        </div>
      </>
    );
  }
}

MessageTicket.propTypes = {
  i18n: PropTypes.shape({}).isRequired,
  t: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired,
  handleCreateTicket: PropTypes.func.isRequired,
};

export default MessageTicket;
