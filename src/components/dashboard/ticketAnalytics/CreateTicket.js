import React from "react";
import PropTypes from "prop-types";
import FakeAgents from "../../../faker/agents";

const CreateTicket = props => {
  const { t,CalendarIcon } = props;

  return (
    <div className="column dashbordticket-column">
    <div className="card analytics-card-parent analytics-card-parent-agent">
      <div className="card-content analytics-card">
        <p className="subtitle">
          {t('tickets.new_ticket')}
        </p>
        <p className="title title-manageticket">
          <span className="statistic-ticket">23</span><button className="arrawbtn" style={{background:"#0089e13b"}}><div className="uptriangle" style={{ borderBottom:"8px solid #0089E1"
}}></div></button>
        </p>
        <button className="button is-secondary createTicketCalender" >
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
