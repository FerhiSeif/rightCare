/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import EmailChannelImg from '../../../../../assets/images/settings/add-message.svg';
import LiveChatImg from '../../../../../assets/images/settings/answer.svg';
import CallCentreImg from '../../../../../assets/images/settings/call-back.svg';
import WebFormImg from '../../../../../assets/images/settings/id-card-1.svg';
import FacebookImg from '../../../../../assets/images/settings/facebook.92f23286.svg';
import TwitterImg from '../../../../../assets/images/settings/twitter.2210c4de.svg';

const SetTimer = (props) => {
  const {
    t,
    index,
    text,
  } = props;

  const dayOption = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
  ];

  const hourOption = [
    { value: '0', label: '0' },
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
  ];

  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      // width: state.selectProps.width,
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
    }),
    option: (provided, state) => ({
      ...provided,
      borderBottom: 'solid 1px #eee',
      color: state.isSelected ? '#657288' : '#657288',
    }),
    // control: () => ({
    //     // width: 200,
    //   }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
      return { ...provided, opacity, transition };
    },
  };

  return (
    <div className="timer-section">
      <div className="timer-child-start">
        {index === 'email_channel' && (
            <img src={EmailChannelImg} className="img-icon" />
        )}
        {index === 'live_chat' && (
            <img src={LiveChatImg} className="img-icon" />
        )}
        {index === 'call_centre' && (
            <img src={CallCentreImg} className="img-icon" />
        )}
        {index === 'webform' && (
            <img src={WebFormImg} className="img-icon" />
        )}
        {index === 'facebook' && (
            <img src={FacebookImg} className="img-icon" />
        )}
        {index === 'twitter' && (
            <img src={TwitterImg} className="img-icon" />
        )}
        <span className="text">
          {text}
        </span>
      </div>
      <Select
        styles={customStyles}
        options={dayOption}
        className="App-Select-timer"
        isSearchable={false}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: '#eee',
            primary25: '#eee',
          },
        })}
      />
      <Select
        styles={customStyles}
        options={hourOption}
        className="App-Select-timer"
        isSearchable={false}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: '#eee',
            primary25: '#eee',
          },
        })}
      />
      <div className="timer-child-end">
        <span className="text"> MM </span>
      </div>
    </div>
  );
};

SetTimer.propTypes = {
  t: PropTypes.func.isRequired,
  index: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};


export default SetTimer;
