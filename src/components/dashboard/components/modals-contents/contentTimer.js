import React from 'react';
import PropTypes from 'prop-types';
import SetTimer from './sections/setTimer';

const ContentTimer = (props) => {
  const {
    t,
    buttonText,
    handleContinue,
    handleAddFields,
  } = props;

  const sectionStyle = {
    top: {
      paddingTop: '1.125rem',
    },
  };

  const countElmt = [
    { index: 'email_channel' },
    { index: 'live_chat' },
    { index: 'call_centre' },
    { index: 'webform' },
    { index: 'facebook' },
    { index: 'twitter' },
  ];

  return (
    <div className="">
      <section className="modal-card-body" style={sectionStyle.top}>

        <div className="timer-content">

          {countElmt.map((item, i) => (
            <SetTimer
              key={i}
              t={t}
              index={item.index}
              text={t(`settings.tickets_timer_content.section_Timer.${item.index}`)}
            />
          ))}

        </div>

      </section>
      <footer className="modal-card-foot">
        <button className="button is-primary button-round" aria-label="close" onClick={handleContinue}>{buttonText}</button>
      </footer>
    </div>
  );
};

ContentTimer.propTypes = {
  t: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  handleContinue: PropTypes.func.isRequired,
  handleAddFields: PropTypes.func.isRequired,
};

export default ContentTimer;
