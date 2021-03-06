import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../layouts/Header';
import SideMenu from '../layouts/SideMenu';
import { options } from '../../configs/options';


class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      containerWidth: 0,
      containerHeight: 0,
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    document.body.style.overflow = 'auto';
  }

  updateWindowDimensions = () => {
    this.setState({ containerWidth: window.innerWidth, containerHeight: window.innerHeight });
  }

  render() {
    const {
      t,
      kind,
      defaultLang,
      changeLang,
      isLogged,
      i18n,
    } = this.props;
    const { containerHeight, containerWidth } = this.state;

    return (
      <div className={`${kind === 'dashboard' ? 'columns' : ''}`}>
        { kind === 'dashboard' && (<SideMenu t={t} containerWidth={containerWidth} i18n={i18n} />)}
        <Header
          options={options}
          defaultLang={defaultLang}
          changeLang={changeLang}
          kind={kind}
          isLogged={isLogged}
          t={t}
          containerWidth={containerWidth}
          containerHeight={containerHeight}
          i18n={i18n}
        />
      </div>
    );
  }
}

Dashboard.propTypes = {
  i18n: PropTypes.shape({}).isRequired,
  t: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired,
  defaultLang: PropTypes.shape({}).isRequired,
  changeLang: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default Dashboard;
