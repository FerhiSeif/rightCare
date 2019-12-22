import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import FakeChannels from '../../../faker/channels';

const Services = (props) => {
  const {
    i18n,
    kind,
    checkedServices,
    handleChooseService,
  } = props;

  const serviceStyle = {
    firstImage: {
      marginBottom: '.2rem',
      marginTop: '.2rem',
    },
    serviceContainer: {
      width: kind === 'channel' ? '26rem' : '33rem',
      margin: kind === 'channel' ? 'auto' : 'initial',
    },
    input: {
      display: 'none',
    },
  };

  const currLang = i18n.language;

  return (
    <div className="service-container" style={serviceStyle.serviceContainer}>
      { FakeChannels.map((item, i) => (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label
          className={`${checkedServices[item.type] ? 'service-card is-selected-case' : 'service-card'}`}
          control={item.type}
          key={i}
        >

          <input
            type="checkbox"
            name={item.type}
            checked={checkedServices[item.type]}
            onChange={handleChooseService}
            style={serviceStyle.input}
          />
        </label>
      ))}
    </div>
  );
};

Services.propTypes = {
  i18n: PropTypes.shape({}).isRequired,
  kind: PropTypes.string.isRequired,
  handleChooseService: PropTypes.func.isRequired,
  checkedServices: PropTypes.shape({}).isRequired,
};

export default withTranslation()(Services);
