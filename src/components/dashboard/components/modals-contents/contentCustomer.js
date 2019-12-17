import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Formik, Form, Field } from 'formik';

const ContentCustomer = (props) => {
  const {
    t,
    buttonText,
    handleContinue,
    handleAddFields,
    i18n,
  } = props;

  const [state, setState] = useState({ fieldType: 'text', fieldValue: '' });

  const currLang = i18n.language;

  const optionsEN = [
    { value: 'text', label: 'Text' },
    { value: 'number', label: 'Number' },
    { value: 'date', label: 'Date' },
    { value: 'email', label: 'Email' },
  ];

  const optionsFR = [
    { value: 'text', label: 'Text' },
    { value: 'nombre', label: 'Nombre' },
    { value: 'date', label: 'Date' },
    { value: 'email', label: 'Email' },
  ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#657288' : '#657288',
      text: 'center',
    }),
  };

  const validateField = (value) => {
    const { fieldType, fieldValue } = state;
    
    let error;
    if (!value) {
      error = 'This field is required';
    } else {
      switch (fieldType) {
        case 'email':
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = 'Invalid email address';
          }
          break;
        case 'text':
          if (!/^\s*[a-zA-Z,\s]+\s*$/i.test(value)) {
            error = 'Invalid text field';
          }
          break;
        case 'number':
          if (!/^[0-9]{1,10}$/i.test(value)) {
            error = 'Invalid number field';
          }
          break;
        case 'nombre':
          if (!/^[0-9]{1,10}$/i.test(value)) {
            error = 'Invalid number field';
          }
          break;
        case 'date':
          if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/i.test(value)) {
            error = 'Invalid date field';
          }
          break;
        default:
          error = 'Field not found please select';
      }
    }

    return error;
  };

  const handleSelectChange = (event) => {
    const fieldType = event.value;
    setState({ fieldType, fieldValue: '' });
  };

  const handleFieldChange = (event) => {
    const { value } = event.currentTarget;
    setState({ fieldType: state.fieldType, fieldValue: value });
  };

  return (
    <div className="">
      <section className="modal-card-body">
        <Formik
          initialValues={{
            email: '',
            text: '',
            number: '',
            date: '',
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="input-section">
                <Field
                  className="input"
                  name={state.fieldType}
                  validate={() => validateField(state.fieldType)}
                  onChange={(e) => handleFieldChange(e)}
                  value={state.fieldValue}
                />
                <span className="alert-danger">{errors.email && touched.email && errors.email}</span>
                <span className="alert-danger">{errors.text && touched.text && errors.text}</span>
                <span className="alert-danger">{errors.number && touched.number && errors.number}</span>
                <span className="alert-danger">{errors.date && touched.date && errors.date}</span>
              </div>
            </Form>
          )}
        </Formik>

        <div className="select div-select">
          <Select
            styles={customStyles}
            options={currLang === 'en' ? optionsEN : optionsFR}
            className="App-Select-priority"
            onChange={handleSelectChange}
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
            <div className="section-child" onClick={() => handleAddFields('customer', state)}>
              <span className="button-plus"> + </span>
              <span className="button-text">
                {t('settings.customer_informations_content.button_add')}
              </span>
            </div>
          </div>
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
  handleAddFields: PropTypes.func.isRequired,
};

export default ContentCustomer;
