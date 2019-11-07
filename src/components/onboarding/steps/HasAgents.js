import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import FakeAgents from '../../../faker/agents';

const HasAgents = (props) => {
  const {
    t,
    kind,
    isChannelEmpty,
    handleAddRessourceModal,
  } = props;

  const agentStyle = {
    addMore: {
      background: !isChannelEmpty ? '#ffffff' : 'rgba(200, 211, 214, 0.12)',
    }
  }

  return (
    <div className="content">
      <div className="content-container">
        { FakeAgents.map((item, i) => (
          <div className={`${ kind === 'channel' ? 'cobok-channel' : 'cobok'}`} key={i}>
            <div data-tooltip={item.full_name} className="tooltip-title">
              <img src={item.profile_image} alt={item.full_name} data-tooltip={item.full_name} />
            </div>
          </div>
        ))}
        <br />
        { FakeAgents.length > 10 && (
          <div className="cobok-channel">
            <button className="button is-primary is-outlined">View all</button>
          </div>
        )}
        <div className="add-more" onClick={handleAddRessourceModal} style={agentStyle.addMore}>
          <span>+</span>
        </div>
      </div>
    </div>
  );
};

HasAgents.propTypes = {
  t: PropTypes.func.isRequired,
  handleAddRessourceModal: PropTypes.func.isRequired,
};

export default withTranslation()(HasAgents);
