import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Carder from '../../common/Carder';
import MobileAddAgents from './MobileAddAgents';

const AssignAgent = (props) => {
  const {
    t,
    checkedServices,
    handleChooseService,
    containerWidth,
    i18n,
  } = props;

  const localService = JSON.parse(localStorage.getItem('cr_services'));

  return (
    <div className="card-container">
     { containerWidth > 768 && (
       localService.map((item, i) => (
         <Carder
           kind="agent"
           icon={item.icon}
           darkIcon={item.darkIcon}
           key={i}
           t={t}
           title={item.type}
           content={t('onboard.steps.no_agent_has_been_added')}
           buttonText={t('onboard.steps.add_agent')}
           isChannelEmpty={false}
           channelSelected={false}
           serviceCount={6}
           agentAssigned={false}
           handleChooseService={handleChooseService}
           checkedServices={checkedServices}
           assignedAgents={item.agents}
           i18n={i18n}
           nameFr={item.name_fr}
           currentStep={2}
         />
       ))
      )}
      {containerWidth <= 768 && <MobileAddAgents />}
    </div>
  );
};

AssignAgent.propTypes = {
  t: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  containerWidth: PropTypes.number.isRequired,
  handleChooseService: PropTypes.func.isRequired,
  checkedServices: PropTypes.shape({}).isRequired,
  activeServices: PropTypes.shape([]).isRequired,
};

export default withTranslation()(AssignAgent);
