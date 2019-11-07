import React from 'react';
import PropTypes from 'prop-types';

const Agents = (props) => {
  const {
    t,
  } = props;

  return (
    <div className="column">
      <div className="card analytics-card-parent analytics-card-parent-agent">
        <div className="card-content analytics-card">
          <p className="subtitle">
            {t('dashboard.number_of_agents')}
          </p>
          <p className="title">
            0
          </p>
          <button className="button is-secondary is-blue-secondary is-outlined">
            <span>+</span>
            {t('dashboard.add_agent')}
          </button>
        </div>
      </div>
    </div>
  );
};

Agents.propTypes = {
  t: PropTypes.func.isRequired,
};

export default Agents;
