import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../layouts/Header';
import { options } from '../../configs/options';
import WelcomeImg from '../../assets/images/onboard/welcome.png';

const Welcome = (props) => {
  const {
    t,
    kind,
    defaultLang,
    changeLang,
    isLogged,
  } = props;

  return (
    <>
      <Header
        options={options}
        defaultLang={defaultLang}
        changeLang={changeLang}
        kind={kind}
        isLogged={isLogged}
        t={t}
      />

      <div className="home-container">
        <div className="columns">
          <div className="column is-three-fifths">
            <h1>360° {t('home.customer_engagement_on_one_plateform')}</h1>
            <p>{t('home.resolve_your_customer')}</p>
            <Link to={`/${kind}`}>
              <button className="button is-primary">{t('home.get_started')}</button>
            </Link>
          </div>
          <div className="column">
            <img src={WelcomeImg} alt="onboard img" />
          </div>
        </div>
      </div>
    </>
  );
};

Welcome.propTypes = {
  t: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired,
  defaultLang: PropTypes.shape({}).isRequired,
  changeLang: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default Welcome;
