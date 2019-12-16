/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const ContentPriority = (props) => {
  const {
    t,
    i18n,
    buttonText,
    handleContinue,
  } = props;

  const currLang = i18n.language;

  const optionsEN = [
    { value: 'Very Urgent', label: 'Very Urgent' },
    { value: 'Urgent', label: 'Urgent' },
    { value: 'Not Urgent', label: 'Not Urgent' },
  ];
  const optionsFR = [
    { value: 'Très urgent', label: 'Très urgent' },
    { value: 'Urgent', label: 'Urgent' },
    { value: 'Pas Urgent', label: 'Pas Urgent' },
  ];

  return (
    <div className="">
      <section className="modal-card-body">
        <div className="input-section">
          <input className="input" type="text" placeholder={t('settings.tickets_priority_content.ticket_priority_input')} />
        </div>

        <div className="select div-select">

          <Select
            options={currLang === 'en' ? optionsEN : optionsFR}
            className="App-Select-priority"
            isSearchable={false}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary: '#eee',
                primary25: '#eee',
              },
            })}
          />

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
  buttonText: PropTypes.string.isRequired,
  handleContinue: PropTypes.func.isRequired,
};

export default ContentPriority;
