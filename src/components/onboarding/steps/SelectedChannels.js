import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import FakeChannels from '../../../faker/channels';
import Services from './Services';

const SelectedChannels = (props) => {
  const {
    t,
    kind,
    title,
    icon,
    checkedServices,
    handleChooseService,
    i18n,
    currentStep,
  } = props;

  const currLang = i18n.language;

  const serviceStyle = {
    firstImage: {
      marginBottom: '.2rem',
      marginTop: '.2rem',
    },
    serviceContainer: {
      width: kind === 'channel' ? 'initial' : '',
      margin: kind === 'channel' ? 'initial' : '',
    },
    label: {
      backgroundColor: 'transparent',
    },
    title: {
      paddingBottom: kind === 'channel' ? 0 : '1.125rem',
    },
    empty: {
      marginBottom: '1rem',
      fontSize: '1.2rem',
      color: 'orange',
    },
  };

  const selectChannel = React.createRef();
  const addAgentsRef = React.createRef();

  const handleAddChannelModal = () => {
    document.body.classList.add('modal-opened');
    selectChannel.current.classList.add('is-active');
  };

  const handleCloseChannelModal = () => {
    document.body.classList.add('modal-opened');
    selectChannel.current.classList.remove('is-active');
  };

  const handleContinue = () => { addAgentsRef.current.click(); };

  const localServices = JSON.parse(localStorage.getItem('cr_actservices'));

  return (
    <div className="card-custom">
      <header className="card-header">
        <p className="card-header-title">
          <span className="icon">
            <img src={icon} alt="Channel Icon" />
          </span>
          {title}
        </p>
        <div className="card-header-icon" aria-label="more options">
          <span className="icon">
          {localServices && localServices.length > 0 ? (
            <>
              {FakeChannels .filter((channel) => localServices.indexOf(channel.type) >= 0).length}
            </>
          ) : (
            <>0</>
          )}
          </span>
        </div>
      </header>
      <div className="card-content">
        <div className="content">
          <div className="service-container-custom" style={serviceStyle.serviceContainer}>
            { localServices && localServices.length > 0 && (
              <>
                { (FakeChannels.filter((channel) => localServices.indexOf(channel.type) >= 0)
                    && FakeChannels.filter((channel) => localServices.indexOf(channel.type) >= 0).length > 0)
                    && FakeChannels.filter((channel) => localServices.indexOf(channel.type) >= 0).map((item, i) => ((
                  <label
                    className="service-card is-selected-case"
                    control={item.type}
                    key={i}
                    style={serviceStyle.label}
                  >
                    <img src={item.darkIcon} alt={i} />
                    <span>{currLang === 'en' ? item.name : item.name_fr}</span>
                  </label>
                )))}
                { !(FakeChannels .filter((channel) => localServices.indexOf(channel.type) >= 0)
                    && FakeChannels .filter((channel) => localServices.indexOf(channel.type) >= 0).length > 0) && (
                  <div style={serviceStyle.empty}>
                    {t('onboard.steps.there_is_no_channel_available_yet')}
                  </div>
                )}
              </>
            )}
            {currentStep !== 3 && (<div className="add-more" onClick={handleAddChannelModal} data-tooltip={t('onboard.steps.add_channel')}><span>+</span></div>)}
          </div>
        </div>
      </div>

      <div className="modal" ref={selectChannel}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <div className="title-container" style={serviceStyle.title}>
              <h2 className="title">{title}</h2>
            </div>
          </header>
          <section className="modal-card-body">
            <Services kind={kind} handleChooseService={handleChooseService} checkedServices={checkedServices} />
          </section>
          <footer className="modal-card-foot">
            <button className="button is-primary" aria-label="close" onClick={handleContinue}>Continue</button>
          </footer>
        </div>
        <button className="modal-close is-large" aria-label="close" ref={addAgentsRef} onClick={handleCloseChannelModal} />
      </div>
    </div>
  );
};

SelectedChannels.propTypes = {
  t: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  checkedServices: PropTypes.shape({}).isRequired,
  handleChooseService: PropTypes.func.isRequired,
};

export default withTranslation()(SelectedChannels);
