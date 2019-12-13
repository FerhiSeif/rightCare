/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const ContentStatus = (props) => {
  const {
    t,
    kind,
    buttonText,
    handleContinue,
  } = props;

  const options = [
    { value: 'Resolved Ticket', label: 'Resolved Ticket' },
    { value: 'On-going Ticket', label: 'On-going Ticket' },
    { value: 'New with assign agent', label: 'New with assign agent' },
  ];

  return (
    <div className="">
      <section className="modal-card-body">
        <div className="input-section">
          <input className="input" type="text" placeholder={t('settings.tickets_status_content.status_input')} />
        </div>

        <div className="select div-select">

          <Select
            options={options}
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
        <button className="button is-primary button-round" aria-label="close" onClick={handleContinue}>{buttonText}</button>
      </footer>
    </div>
  );
};

ContentStatus.propTypes = {
  t: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  handleContinue: PropTypes.func.isRequired,
};

export default ContentStatus;
