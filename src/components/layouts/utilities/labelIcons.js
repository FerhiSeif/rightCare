import React from 'react';
import LangIconEn from '../../../assets/images/locale/uk.png';
import LangIconFr from '../../../assets/images/locale/fr.png';

const langStyles = {
  langIcons: {
    height: '1.6rem',
    marginRight: '.5rem',
  },
  langContainer: {
    display: 'flex',
  },
};

export const frLabelIcon = (
  <div style={langStyles.langContainer}>
    <img alt="lang icon" src={LangIconFr} style={langStyles.langIcons} />
    <span>Français</span>
  </div>
);

export const emptyFrLabelIcon = (
  <div style={langStyles.langContainer}>
    <img alt="lang icon" src={LangIconFr} style={langStyles.langIcons} />
  </div>
);

export const enLabelIcon = (
  <div style={langStyles.langContainer}>
    <img alt="lang icon" src={LangIconEn} style={langStyles.langIcons} />
    <span>English</span>
  </div>
);

export const emptyEnLabelIcon = (
  <div style={langStyles.langContainer}>
    <img alt="lang icon" src={LangIconEn} style={langStyles.langIcons} />
  </div>
);
