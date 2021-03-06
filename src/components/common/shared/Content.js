/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import HasAgents from '../../onboarding/steps/HasAgents';

const Header = (props) => {
  const {
    kind,
    addAgentsChannel,
    cardStyle,
    hasAgents,
    content,
    handleAddRessourceModal,
    agentAssigned,
    buttonText,
    isChannelEmpty,
    currentStep,
    containerWidth,
  } = props;

  return (
    <>
      <div className={`${agentAssigned ? 'sleep-padding' : 'card-content'}`} style={cardStyle}>
        { addAgentsChannel && addAgentsChannel.length > 0 ? (
          <div className="content">
            <div className="content-container">
              {
                addAgentsChannel.map((item, i) => (
                  <div className="cobok" key={i}>
                    <div data-tooltip={item.full_name} className="tooltip-title">
                      <img src={item.profile_image} alt={item.full_name} data-tooltip={item.full_name} />
                    </div>
                  </div>
                ))
              }
              {(currentStep !== 1 || containerWidth > 768) && (
                <div className="add-more" onClick={handleAddRessourceModal}>
                  <span>+</span>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="content">
            {hasAgents ? (<HasAgents handleAddRessourceModal={handleAddRessourceModal} kind={kind} isChannelEmpty={isChannelEmpty} />) :
              (
                <>
                  <p>{content}</p>
                  {currentStep !== 1 && (
                    <button className="button is-success is-outlined" onClick={handleAddRessourceModal}>
                      {buttonText}
                    </button>
                  )}
                </>
              )}
          </div>
        )}
      </div>
    </>
  );
};

Header.propTypes = {
  kind: PropTypes.string.isRequired,
  hasAgents: PropTypes.bool.isRequired,
  isChannelEmpty: PropTypes.bool.isRequired,
  buttonText: PropTypes.string.isRequired,
  cardStyle: PropTypes.shape({}).isRequired,
  agentAssigned: PropTypes.shape({}).isRequired,
  content: PropTypes.string.isRequired,
  handleAddRessourceModal: PropTypes.func.isRequired,
  addAgentsChannel: PropTypes.shape({}).isRequired,
  currentStep: PropTypes.number.isRequired,
};

export default Header;
