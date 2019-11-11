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

  return (
    <div className="modal" ref={agentModal}>
      <div className="modal-background" />
      <div className="modal-card">
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
          { kind === 'agent' ? (<div>{content}</div>) : <Services kind={kind} handleChooseService={handleChooseService} checkedServices={checkedServices} /> }
        </section>
        <footer className="modal-card-foot">
          <button className="button is-primary">{buttonText}</button>
        </footer>
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={handleCloseRessourceModal} />
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
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
