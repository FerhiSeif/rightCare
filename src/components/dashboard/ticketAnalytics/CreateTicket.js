import React from "react";
import PropTypes from "prop-types";
import FakeAgents from "../../../faker/agents";

const CreateTicket = props => {
  const { t,CalendarIcon } = props;

  return (
    <div className="column">
    <div className="card analytics-card-parent analytics-card-parent-agent">
      <div className="card-content analytics-card">
        <p className="subtitle">
          {t('tickets.tickets_creation')}
        </p>
        <p className="title">
          {23}
        </p>
        <button className="button is-secondary" >
        <img className="calendar-icon" src={CalendarIcon} alt="caneldar" />
          {t('tickets.today')}
        </button>
      </div>
    </div>
  </div>
  );
};

CreateTicket.propTypes = {
  t: PropTypes.func.isRequired
};

export default CreateTicket;
