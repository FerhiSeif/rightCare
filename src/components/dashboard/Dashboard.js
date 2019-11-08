import React from 'react';
import PropTypes from 'prop-types';
import Header from '../layouts/Header';
import SideMenu from '../layouts/SideMenu';
import { options } from '../../configs/options';

const Dashboard = (props) => {
  const {
    t,
    kind,
    defaultLang,
    changeLang,
    isLogged,
  } = props;

  return (
    <div className={`${kind === 'dashboard' ? 'columns' : ''}`}>
      { kind === 'dashboard' && (<SideMenu t={t} />)}
      <Header
        options={options}
        defaultLang={defaultLang}
        changeLang={changeLang}
        kind={kind}
        isLogged={isLogged}
        t={t}
      />
    </div>
  );
};

Dashboard.propTypes = {
  t: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired,
  defaultLang: PropTypes.shape({}).isRequired,
  changeLang: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default Dashboard;
