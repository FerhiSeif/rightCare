import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'infinite-react-carousel';
import { withTranslation } from 'react-i18next';
import Carder from '../../common/Carder';
import FakeChannels from '../../../faker/channels';
import SelectedChannels from './SelectedChannels';
import HasAgents from './HasAgents';

const MobileAddAgents = (props) => {
  const {
    t,
    checkedServices,
    handleChooseService,
    activeServices,
    handleBack,
    kinda,
    icon,
    i18n,
    currentStep,
  } = props;

  const agentStyles = {
    empty: {
      marginBottom: '1rem',
      fontSize: '1.5rem',
    },
    here: {
      cursor: 'pointer',
      textDecoration: 'underline',
      color: '#00bd39',
    },
  };

  const localService = JSON.parse(localStorage.getItem('cr_services'));

  return (
    <div className="card-container-mobile">
      <Slider adaptiveHeight dots arrows={false}>
        { localService && localService.length > 0 &&
          localService.map((item, i) => (
            <div className="card-carousel">
              <Carder
                kind="agent"
                icon={item.icon}
                darkIcon={item.darkIcon}
                key={i}
                t={t}
                title={item.type}
                content={t('onboard.steps.no_agent_has_been_added')}
                buttonText={t('onboard.steps.add_agent_btn')}
                isChannelEmpty={false}
                channelSelected={false}
                serviceCount={6}
                agentAssigned={false}
                handleChooseService={handleChooseService}
                checkedServices={checkedServices}
                assignedAgents={item.agents}
                i18n={i18n}
                nameFr={item.name_fr}
                currentStep={currentStep}
              />
            </div>
          ))}
          { activeServices && activeServices.length > 0 &&
            FakeChannels.filter((channel) => activeServices.indexOf(channel.type) >= 0)
              .map((item, i) => (
                <div className="card-carousel">
                  <Carder
                    kind="agent"
                    icon={item.icon}
                    darkIcon={item.darkIcon}
                    key={i}
                    t={t}
                    title={item.type}
                    content={t('onboard.steps.no_agent_has_been_added')}
                    buttonText={t('onboard.steps.add_agent_btn')}
                    isChannelEmpty={false}
                    channelSelected={false}
                    serviceCount={6}
                    agentAssigned={false}
                    handleChooseService={handleChooseService}
                    checkedServices={checkedServices}
                    assignedAgents={item.agents}
                    i18n={i18n}
                    nameFr={item.name_fr}
                    currentStep={currentStep}
                  />
                </div>
              ))}
          { (!localService || localService.length === 0) && (
            <div style={agentStyles.empty}>
              {t('onboard.steps.you_have_no_selected_channels_click')}
              <span
                style={agentStyles.here}
                className="select-channel-first"
                onClick={handleBack}> {t('onboard.steps.here')}
              </span> {t('onboard.steps.to_choose_channel(s)')}.
            </div>
          )}
          { kinda ==='summary' && (<SelectedChannels
              kind="channel"
              t={t}
              title={t('onboard.steps.channel_selected')}
              icon={icon}
              checkedServices={checkedServices}
              handleChooseService={handleChooseService}
            />)}
          { kinda ==='summary' && (<HasAgents
            kind="channel"
            t={t}
            title={t('onboard.steps.added_agents')}
          />)}
      </Slider>
    </div>
  );
};

MobileAddAgents.propTypes = {
  t: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleChooseService: PropTypes.func.isRequired,
  checkedServices: PropTypes.shape({}).isRequired,
  activeServices: PropTypes.shape([]).isRequired,
};

export default withTranslation()(MobileAddAgents);
