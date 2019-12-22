import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Carder from '../../common/Carder';
import MobileAddAgents from './MobileAddAgents';

const AssignAgent = (props) => {
  const {
    t,
    checkedServices,
    containerWidth,
    i18n,
  } = props;

  const localService = JSON.parse(localStorage.getItem('cr_services'));

  return (
    <div className="card-container">
      { containerWidth > 768 && (
        localService.map((item, i) => (
          <Carder
            key={i}
            kind="agent"
            t={t}
            icon={item.icon}
            darkIcon={item.darkIcon}

            name={item.name}
            nameFr={item.name_fr}
            type={item.type}

            assignedAgents={item.agents}
            content={t('onboard.steps.no_agent_has_been_added')}
            buttonText={t('onboard.steps.add_agent_btn')}
            isChannelEmpty={false}
            channelSelected={false}
            serviceCount={6}
            agentAssigned={false}
            checkedServices={checkedServices}
            currentStep={2}
            i18n={i18n}
          />
        ))
      )}
      {containerWidth <= 768 && <MobileAddAgents />}
    </div>
  );
};

AssignAgent.propTypes = {
  t: PropTypes.func.isRequired,
  containerWidth: PropTypes.number.isRequired,
  checkedServices: PropTypes.shape({}).isRequired,
};

export default withTranslation()(AssignAgent);
