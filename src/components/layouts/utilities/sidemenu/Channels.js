import React from 'react';
import PropTypes from 'prop-types';
import SingleChannel from './SingleChannel';
import FakeChannels from '../../../../faker/channels';

const Channels = (props) => {
  const {
    t,
    i18n,
    isEmpty,
  } = props;

  return (
    <div>
      <p className="menu-label">
        {t('side_menu.channels')}
        <span className="more-channel">+</span>
      </p>

      { isEmpty
        ? (
          <div className="no-channel">
            <h5>{t('side_menu.no_channel_added')}</h5>
            <button type="submit" className="button is-success is-outlined">{t('side_menu.add_channel')}</button>
          </div>
        ) : (
          <div className="available-channels">
            { FakeChannels.map((item, i) => (
              <SingleChannel
                t={t}
                type={item.type}
                agentCount={item.agentCount}
                key={i}
                icon={item.icon}
                i18n={i18n}
                nameFr={item.name_fr}
              />
            ))}
          </div>
        )}
    </div>
  );
};

Channels.propTypes = {
  t: PropTypes.func.isRequired,
  i18n: PropTypes.shape({}).isRequired,
  isEmpty: PropTypes.bool.isRequired,
};

export default Channels;
