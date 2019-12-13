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

  const options = [
    { value: 'Very Urgent', label: 'Very Urgent' },
    { value: 'Urgent', label: 'Urgent' },
    { value: 'Not Urgent', label: 'Not Urgent' },
  ];

  return (
    <div className="">
      <section className="modal-card-body">
        <div className="input-section">
          <input className="input" type="text" placeholder="Enter Ticket Priority name" />
          {/* {t('settings.tickets_priority_content.ticket_riority_name')} */}
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
                primary25: '#eee',
                primary: '#eee',
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
  kind: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  handleContinue: PropTypes.func.isRequired,
};

export default ContentPriority;
