import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Formik, Form, Field } from "formik";

const ContentCustomer = (props) => {
  const {
    t,
    buttonText,
    handleContinue,
    i18n,
  } = props;

  const [state, setState] = useState({ fieldType: 'text' });

  const currLang = i18n.language;

  const optionsEN = [
    { value: 'text', label: 'Text' },
    { value: 'number', label: 'Number' },
    { value: 'date', label: 'Date' },
    { value: 'email', label: 'Email' },
  ];

  const optionsFR = [
    { value: 'text', label: 'Text' },
    { value: 'number', label: 'Nombre' },
    { value: 'date', label: 'Date' },
    { value: 'email', label: 'Email' },
  ];

  const validateField = (value) => {
    const { fieldType } = state;
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
        default:
          error = 'Field not found please select';
      }
    }

    return error;
  };

  const handleAddField = () => { console.log('handleAddField !!!'); };

  const handleSelectChange = (event) => {
    const fieldType = event.value;
    setState({ fieldType });
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
                  name="email"
                  validate={validateField}
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
