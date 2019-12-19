import React from "react";
import PropTypes from "prop-types";
import FakeAgents from "../../../faker/agents";

const ResolveTicket = props => {
  const { t, MoreIcon, CalendarIcon, last } = props;

  return (
    <div className="column">
      <div className="card analytics-card-parent analytics-card-parent-complete-request">
        <div className="card-content analytics-card">
          <p className="subtitle">{t("tickets.resolve_ticket")}</p>
          <p className="title">{23}</p>
          <button className="button is-secondary is-outlined">
            {"10/12/2019 - 10/12/2019 "}
            <img className="calendar-icon" src={CalendarIcon} alt="caneldar" />
            
          </button>
        </div>
      </div>
    </div>
  );
};

ResolveTicket.propTypes = {
  t: PropTypes.func.isRequired
};

export default ResolveTicket;
