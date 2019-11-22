import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import FakeChannels from '../../../faker/channels';

const Services = (props) => {
  const {
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
      width: kind === 'channel' ? '21rem' : '33rem',
      margin: kind === 'channel' ? 'auto' : 'initial',
    },
    input: {
      display: 'none',
    },
  };

  return (
    <div className="service-container" style={serviceStyle.serviceContainer}>
      { FakeChannels.map((item, i) => (
        <label
          className={`${checkedServices[item.type] ? 'service-card is-selected-case' : 'service-card'}`}
          control={item.type}
          key={i}
        >
          <img src={item.greenIcon} alt={i} />
          <span>{item.name}</span>
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
  kind: PropTypes.string.isRequired,
  handleChooseService: PropTypes.func.isRequired,
  checkedServices: PropTypes.shape({}).isRequired,
};

export default withTranslation()(Services);
