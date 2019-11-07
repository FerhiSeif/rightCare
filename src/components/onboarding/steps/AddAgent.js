import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Services from './Services';

const AddAgent = (props) => {
  const {
    t,
  } = props;

  return (
    <>
      <Services />
    </>
  );
};

AddAgent.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(AddAgent);
