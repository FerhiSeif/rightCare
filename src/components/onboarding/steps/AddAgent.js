import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Services from './Services';

const AddAgent = (props) => {
  const {
    kind,
    handleChooseService,
    checkedServices,
  } = props;

  return (
    <Services handleChooseService={handleChooseService} checkedServices={checkedServices} kind={kind} />
  );
};

AddAgent.propTypes = {
  handleChooseService: PropTypes.func.isRequired,
  checkedServices: PropTypes.shape({}).isRequired,
};

export default withTranslation()(AddAgent);
