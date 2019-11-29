import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '../../assets/images/onboard/search.svg';
import Services from '../onboarding/steps/Services';

const Modal = (props) => {
  const {
    title,
    content,
    kind,
    buttonText,
    agentModal,
    agentCount,
    handleChooseService,
    checkedServices,
    handleCloseRessourceModal,
    handleSearchAgent,
  } = props;

  const modalStyle = {
    title: {
      paddingBottom: kind === 'channel' ? 0 : '1.125rem',
    },
  };

  const addAgentsRef = React.createRef();

  const handleContinue = () => { addAgentsRef.current.click(); };

  return (
    <div className="modal" ref={agentModal}>
      <div className="modal-background" />
      <div className="modal-card">
        <button className="modal-close modal-close-incard" aria-label="close" onClick={handleContinue} />
        <button className="modal-close is-large" aria-label="close" ref={addAgentsRef} onClick={handleCloseRessourceModal} />
        <header className="modal-card-head">
          <div className="title-container" style={modalStyle.title}>
            <h2 className="title">{title}</h2>
          </div>
          { kind === 'agent' && (
            <div className="search-box">
              <input className="input" type="text" placeholder="Search agent" onChange={handleSearchAgent} />
              <img src={SearchIcon} alt="search" />
            </div>
          )}
        </header>
        <section className="modal-card-body">
          { kind === 'agent' ? (<div>{agentCount === 0 &&<span>This agent can not be found in the list.</span>}{content}</div>) : <Services kind={kind} handleChooseService={handleChooseService} checkedServices={checkedServices} /> }
        </section>
        <footer className="modal-card-foot">
          <button className="button is-primary" aria-label="close" onClick={handleContinue}>{buttonText}</button>
        </footer>
      </div>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  agentCount: PropTypes.number.isRequired,
  content: PropTypes.shape({}).isRequired,
  kind: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  agentModal: PropTypes.shape({}).isRequired,
  handleCloseRessourceModal: PropTypes.func.isRequired,
  handleSearchAgent: PropTypes.func.isRequired,
  handleChooseService: PropTypes.func.isRequired,
  checkedServices: PropTypes.shape({}).isRequired,
};

export default Modal;
