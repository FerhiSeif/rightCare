import React from "react";
import PropTypes from "prop-types";
import FakeAgents from "../../../faker/agents";

const TotalTicket = props => {
  const { t, MoreIcon, CalendarIcon, last } = props;

  return (
    <div className="column dashbordticket-column">
      <div className="card analytics-card-parent analytics-card-parent-new-request">
        <div className="card-content analytics-card">
          <p className="subtitle">{t("tickets.total_ticket")}</p>
          <p className="title title-manageticket">
          <span className="statistic-ticket">23</span><button className="arrawbtn" style={{background:"#eb592352"}}><div className="uptriangle" style={{ borderBottom:"8px solid #EB5923"
}}></div></button>
        </p>
          <button className="button is-secondary is-outlined">
            {"10/12/2019 - 10/12/2019 "}
            <img className="calendar-icon" src={CalendarIcon} alt="caneldar" />
          </button>
        </div>
      </div>
    </div>
  );
};

TotalTicket.propTypes = {
  t: PropTypes.func.isRequired
};

export default TotalTicket;
