import React from 'react';
import PropTypes from 'prop-types';
import HasAgents from '../../onboarding/steps/HasAgents';

const Header = (props) => {
  const {
    kind,
    initialAgents,
    cardStyle,
    hasAgents,
    content,
    handleAddRessourceModal,
    agentAssigned,
    buttonText,
    isChannelEmpty,
    currentStep,
  } = props;

  return (
    <>
      <div className={`${agentAssigned ? 'sleep-padding' : 'card-content'}`} style={cardStyle}>
        { initialAgents && initialAgents.length > 0 ? (
          <div className="content">
            <div className="content-container">
              {
                initialAgents.map((item, i) => (
                  <div className="cobok" key={i}>
                    <div data-tooltip={item.full_name} className="tooltip-title">
                      <img src={item.profile_image} alt={item.full_name} data-tooltip={item.full_name} />
                    </div>
                  </div>
                ))
              }
              {currentStep !== 3 && (
                <div className="add-more" onClick={handleAddRessourceModal}>
                  <span>+</span>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="content">
            {hasAgents ? (<HasAgents handleAddRessourceModal={handleAddRessourceModal} kind={kind} isChannelEmpty={isChannelEmpty} />) :
              (<>
              <p>{content}</p>
              {currentStep !== 3 && (
                <button className="button is-success is-outlined" onClick={handleAddRessourceModal}>{buttonText}</button>
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
  initialAgents: PropTypes.shape({}).isRequired,
};

export default Header;
