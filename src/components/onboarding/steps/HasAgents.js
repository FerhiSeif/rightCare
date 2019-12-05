import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import FakeAgents from '../../../faker/agents';
import ProfileIcon from '../../../assets/images/dashboard/menu/profile.svg';


const HasAgents = (props) => {
  const {
    t,
    kind,
    title,
  } = props;

  const isChannelEmpty = false;

  const agentStyle = {
    addMore: {
      background: !isChannelEmpty ? '#ffffff' : 'rgba(200, 211, 214, 0.12)',
    },
  };

  return (
    <div className="card-custom">
      <header className="card-header">
        <p className="card-header-title">
          <span className="icon">
            <img src={ProfileIcon} alt="Channel Icon" />
          </span>
          {title}
        </p>
        <div className="card-header-icon" aria-label="more options">
          <span className="icon">
            {FakeAgents.length}
          </span>
        </div>
      </header>
      <div className="card-content">
        <div className="content">
          <div className="content-container">
            { FakeAgents.map((item, i) => (
              <div className={`${kind === 'channel' ? 'cobok-channel' : 'cobok'}`} key={i}>
                <div data-tooltip={item.full_name} className="tooltip-title">
                  <img src={item.profile_image} alt={item.full_name} data-tooltip={item.full_name} />
                </div>
              </div>
            ))}
            <br />
            { FakeAgents.length > 7 && (
              <div className="cobok-channel">
                <button className="button is-primary is-outlined btn-customed">{t('onboard.view_all')}</button>
              </div>
            )}
            <div className="add-more" style={agentStyle.addMore}>
              <span>+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HasAgents.propTypes = {
  t: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default withTranslation()(HasAgents);
