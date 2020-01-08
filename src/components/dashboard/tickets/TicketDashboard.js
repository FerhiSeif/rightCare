import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CreateTicket from '../ticketAnalytics/CreateTicket';
import ResolveTicket from '../ticketAnalytics/ResolveTicket';
import PendingTicket from '../ticketAnalytics/PendingTicket';
import TotalTicket from '../ticketAnalytics/TotalTicket';
import MoreIcon from '../../../assets/images/dashboard/more.svg';
import CalendarIcon from '../../../assets/images/dashboard/calendar.svg';
import SearchIcon from '../../../assets/images/profile/search.svg';
import TicketsList from '../ticketAnalytics/TicketsList'; // SortBtn
import SortBtn from '../../../assets/images/tickets/sortBtn.svg';

class TicketDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      status: 1,
      allPriority: false,
      high: false,
      medium: false,
      low: false,
      allStatus: false,
      resolve: false,
      pending: false,
      new: false,
      allCategory: false,
      technical: false,
      support: false,
      enquires: false,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.value]: event.target.checked });
  };

  clearfilter = () => {
    this.setState({
      allPriority: false,
      high: false,
      medium: false,
      low: false,
      allStatus: false,
      resolve: false,
      pending: false,
      new: false,
      allCategory: false,
      technical: false,
      support: false,
      enquires: false,
    });
  };

  closeFilter = () => {
    this.setState({
      isOpen: false,
    });
    this.clearfilter();
  };

  render() {
    const {
      i18n, t, kind, handleCreateTicket, handleMessageTicket,
    } = this.props;

    const { isOpen } = this.state;
    return (
      <>
        <div className="ticketnalytics-header">
          <h2 className="dashboard-title titledashboard">
            {kind === 'tickets'
              ? t('tickets.tickets_overview')
              : kind === 'dashboard'
                ? t('dashboard.dashboard_overview')
                : t('settings.settings_overview')}
          </h2>
          <button className="create_ticketbtn" onClick={() => handleCreateTicket()}>
            +
            {' '}
            {t('tickets.ticket_btn_create').toUpperCase()}
          </button>
        </div>
        <div className="columns analytics-columns">

          <CreateTicket
            t={t}
            CalendarIcon={CalendarIcon}
            MoreIcon={MoreIcon}
          />

          <ResolveTicket
            t={t}
            CalendarIcon={CalendarIcon}
            MoreIcon={MoreIcon}
          />

          <PendingTicket
            t={t}
            CalendarIcon={CalendarIcon}
            MoreIcon={MoreIcon}
          />

          <TotalTicket
            t={t}
            CalendarIcon={CalendarIcon}
            MoreIcon={MoreIcon}
          />

        </div>
        <div className="columns chart-columns ">
          <div className="column column-chart ticketContainer container-dashboard-ticket ">
            <div className="searchBar">
              <button className="buttonserch">
                <img className="view-more" src={SearchIcon} alt="SearchIcon" />
              </button>

              <input
                className="input input-search"
                type="text"
                placeholder={t('tickets.search_placeholder')}
              />

              <button
                className="button buttonFilter"
                onClick={() => {
                  this.setState({
                    isOpen: !isOpen,
                  });
                  this.clearfilter();
                }}
              >
                <img className="view-more" src={SortBtn} alt="Sort Button" />
                {t('tickets.search_filter')}
                <img className="view-more" src={MoreIcon} alt="caneldar" />
              </button>
            </div>
            <div
              className="modalSerach"
              style={{ display: `${isOpen ? 'flex' : 'none'}` }}
            >
              <div className="priorityContainer">
                {' '}
                <span className="text-filter">
                  {' '}
                  {t('tickets.search_filter_content.priority')}
                  {' '}
                </span>
                <FormGroup row>
                  <FormControlLabel
                    control={(
                      <Checkbox
                        checked={this.state.allPriority}
                        onChange={this.handleChange}
                        value="allPriority"
                        color="primary"
                      />
)}
                    label={t('tickets.search_filter_content.priority_filter.all')}
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        checked={this.state.high}
                        onChange={this.handleChange}
                        value="high"
                        color="primary"
                      />
)}
                    label={t('tickets.search_filter_content.priority_filter.high')}
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        checked={this.state.medium}
                        onChange={this.handleChange}
                        value="medium"
                        color="primary"
                      />
)}
                    label={t('tickets.search_filter_content.priority_filter.medium')}
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        checked={this.state.low}
                        onChange={this.handleChange}
                        value="low"
                        color="primary"
                      />
)}
                    label={t('tickets.search_filter_content.priority_filter.low')}
                  />
                </FormGroup>
              </div>
              <div className="statusContainer">
                {' '}
                <span className="text-filter">
                  {' '}
                  {t('tickets.search_filter_content.status')}
                  {' '}
                </span>
                <FormGroup row>
                  <FormControlLabel
                    control={(
                      <Checkbox
                        checked={this.state.allStatus}
                        onChange={this.handleChange}
                        value="allStatus"
                        color="primary"
                      />
)}
                    label={t('tickets.search_filter_content.status_filter.all')}
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        checked={this.state.new}
                        onChange={this.handleChange}
                        value="new"
                        color="primary"
                      />
)}
                    label={t('tickets.search_filter_content.status_filter.new')}
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        checked={this.state.pending}
                        onChange={this.handleChange}
                        value="pending"
                        color="primary"
                      />
)}
                    label={t('tickets.search_filter_content.status_filter.pending')}
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        checked={this.state.resolve}
                        onChange={this.handleChange}
                        value="resolve"
                        color="primary"
                      />
)}
                    label={t('tickets.search_filter_content.status_filter.resolve')}
                  />
                </FormGroup>
              </div>
              <div className="CategorieContainer">
                {' '}
                <span className="text-filter">
                  {' '}
                  {t('tickets.search_filter_content.category')}
                  {' '}
                </span>
                <FormGroup row>
                  <FormControlLabel
                    control={(
                      <Checkbox
                        checked={this.state.allCategory}
                        onChange={this.handleChange}
                        value="allCategory"
                        color="primary"
                      />
)}
                    label={t('tickets.search_filter_content.category_filter.all')}
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        checked={this.state.technical}
                        onChange={this.handleChange}
                        value="technical"
                        color="primary"
                      />
)}
                    label={t('tickets.search_filter_content.category_filter.technical')}
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        checked={this.state.support}
                        onChange={this.handleChange}
                        value="support"
                        color="primary"
                      />
)}
                    label={t('tickets.search_filter_content.category_filter.support')}
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        checked={this.state.enquires}
                        onChange={this.handleChange}
                        value="enquires"
                        color="primary"
                      />
)}
                    label={t('tickets.search_filter_content.category_filter.enquires')}
                  />
                </FormGroup>
              </div>
              <div className="modalSerachSetting">
                <p className="clear-Filter" onClick={this.clearfilter}>
                  {t('tickets.search_filter_content.clear_all_filters')}
                </p>
                <p>
                  <span
                    style={{
                      color: '#94A4BE',
                      marginRight: '32px',
                      cursor: 'pointer',
                    }}
                    onClick={this.closeFilter}
                  >
                    {t('tickets.search_filter_content.cancel')}
                  </span>
                  <span style={{ color: '##0089E1', cursor: 'pointer' }}>
                    {t('tickets.search_filter_content.apply')}
                  </span>
                </p>
              </div>
            </div>

            <TicketsList
              t={t}
              handleMessageTicket={() => handleMessageTicket()}
            />

          </div>
        </div>
      </>
    );
  }
}

TicketDashboard.propTypes = {
  i18n: PropTypes.shape({}).isRequired,
  t: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired,
  handleCreateTicket: PropTypes.func.isRequired,
  handleMessageTicket: PropTypes.func.isRequired,
};

export default TicketDashboard;
