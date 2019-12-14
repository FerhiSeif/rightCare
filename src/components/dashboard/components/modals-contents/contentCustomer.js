/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const ContentCustomer = (props) => {
  const {
    t,
    buttonText,
    handleContinue,
    i18n,
  } = props;

  const currLang = i18n.language;

  const optionsEN = [
    { value: 'Text', label: 'Text' },
    { value: 'Number', label: 'Number' },
    { value: 'Date', label: 'Date' },
  ];

  const optionsFR = [
    { value: 'Text', label: 'Text' },
    { value: 'Nombre', label: 'Nombre' },
    { value: 'Date', label: 'Date' },
  ];

  const handleAddField = () => { console.log('handleAddField !!!'); };

  return (
    <div className="">
      <section className="modal-card-body">
        <div className="input-section">
          <input className="input" type="text" placeholder={t('settings.customer_informations_content.custome_input')} />
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

          <div className="section-button">
            <div>
              <div className="section-child" onClick={handleAddField} >
                <span className="button-plus"> + </span>
                <span className="button-text">
                  {t('settings.customer_informations_content.button_add')}
                </span>
              </div>
            </div>
          </div>

          {/* <div style={{ paddingBottom: '6rem', paddingTop: '2rem', float: 'right' }}>
            <button className="button button-add-field" aria-label="close" onClick={handleAddField}>
              <span className="button-plus">+</span>
              <span className="button-text">
                
              </span>
            </button>
          </div> */}

        </div>
      </section>
      <footer className="modal-card-foot">
        <button className="button is-primary button-round" aria-label="close" onClick={handleContinue}>{buttonText}</button>
      </footer>
    </div>
  );
};

ContentCustomer.propTypes = {
  t: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  handleContinue: PropTypes.func.isRequired,
};

export default ContentCustomer;
