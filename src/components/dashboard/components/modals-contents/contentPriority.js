import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const ContentPriority = (props) => {
  const {
    t,
    kind,
    buttonText,
    handleContinue,
  } = props;

  const Countries = [
    { label: 'Albania', value: 355 },
    { label: 'Argentina', value: 54 },
    { label: 'Austria', value: 43 },
    { label: 'Cocos Islands', value: 61 },
    { label: 'Kuwait', value: 965 },
    { label: 'Sweden', value: 46 },
    { label: 'Venezuela', value: 58 },
  ];

  return (
    <div className="">
      <section className="modal-card-body">
        <div className="input-section">
          <input className="input" type="text" placeholder="Enter Ticket Priority name" />
          {/* {t('settings.tickets_priority_content.ticket_riority_name')} */}
        </div>

        <div className="select div-select">
          <select>
            <option className="option-text">
              {t('settings.tickets_priority_content.ticket_priority_name')}
            </option>
            <option> Very Urgent </option>
            <option> Urgent </option>
            <option> Not urgent </option>
          </select>
        </div>
      </section>
      <footer className="modal-card-foot">
        <button className="button is-primary button-round" aria-label="close" onClick={handleContinue}>
          {buttonText}
        </button>
      </footer>
    </div>
  );
};

ContentPriority.propTypes = {
  t: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  handleContinue: PropTypes.func.isRequired,
};

export default ContentPriority;
