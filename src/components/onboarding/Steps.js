import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Header from '../layouts/Header';
import AssignAgent from './steps/AssignAgent';
import { options } from '../../configs/options';
import SelectAgent from '../../assets/images/onboard/get-started/select-agent.png';
import SingleService from '../../assets/images/onboard/group.png';

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#fff',
    zIndex: 1,
    color: '#c8d3d6',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid #c8d3d6',
  },
  active: {
    backgroundColor: '#00bd39',
    border: 0,
    color: '#ffffff',
  },
  completed: {
    backgroundColor: '#00bd39',
    border: 0,
    color: '#ffffff',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed, icon } = props;

  const icons = {
    1: <span>1</span>,
    2: <span>2</span>,
    3: <span>3</span>,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(icon)]}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 0,
    marginLeft: '-4rem',
  },
  steppers: {
    width: '28rem',
    cursor: 'pointer',
  },
  stepLabel: {
    cursor: 'pointer',
  },
  button: {
    marginRight: theme.spacing(1.5),
    backgroundColor: '#0089e1',
    borderRadius: '10px',
    padding: '1rem 3rem',
    textTransform: 'capitalize',
    fontSize: '1rem',
    color: '#ffffff',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: '#0089e1',
    },
  },
  buttonOutlined: {
    backgroundColor: 'transparent',
    color: '#0089e1',
    borderColor: '#0089e1',
    borderRadius: '10px',
    padding: '1rem 3rem',
    textTransform: 'capitalize',
    fontSize: '1rem',
    '&:hover': {
      backgroundColor: '#0089e1',
      color: '#ffffff',
      borderColor: '#0089e1',
    },
  },
  instructions: {
    marginTop: '1rem',
    marginBottom: '2rem',
  },
}));

function getStepContent(
  step,
  handleChooseService,
  checkedServices,
  activeServices,
  handleBack,
  containerWidth,
) {
  switch (step) {
    case 0:
      return (
        <AssignAgent
          handleChooseService={handleChooseService}
          checkedServices={checkedServices}
          activeServices={activeServices}
          handleBack={handleBack}
          containerWidth={containerWidth}
        />
      );
    default:
      return 'Unknown step';
  }
}

export default function Steps(props) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const classes = useStyles();

  const isStepSkipped = (step) => skipped.has(step);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = () => {
    props.selectServiceRef.current.click();
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const {
    t,
    kind,
    defaultLang,
    changeLang,
    isLogged,
    handleChooseService,
    checkedServices,
    activeServices,
    handleSimulateChooseServices,
    selectServiceRef,
    containerWidth,
  } = props;

  const localService = JSON.parse(localStorage.getItem('cr_services'));

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

      <div className="steps-container">
        <div className="columns">
          <div className={`${(activeStep === 0 || (activeStep === 1 && (localService && localService.length === 1))) ? 'column is-three-fifths steps-column' : 'column is-full steps-column'}`}>
            <h2 className="common-medium-title">{t('onboard.add_agent')}</h2>
            <p>{t('onboard.add_agent_to_your_platform')}</p>
            <div className={classes.root}>
              <div>
                <div className="content-selector">
                  <div className={classes.instructions}>
                    {
                      getStepContent(
                        activeStep,
                        handleChooseService,
                        checkedServices,
                        activeServices,
                        handleBack,
                        containerWidth,
                      )
                    }
                  </div>
                  <div className="next-back-container">
                    <Button onClick={handleSimulateChooseServices} ref={selectServiceRef} style={{ display: 'none' }}>Simulate</Button>
                    <Link to="/dashboard" style={{ color: '#ffffff' }}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        {t('onboard.continue')}
                      </Button>
                    </Link>
                    <Link to="/dashboard" style={{ color: '#ffffff' }}>
                      <Button
                        variant="outlined"
                        color="primary"
                        className={classes.buttonOutlined}
                      >
                        {t('onboard.skip')}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          { activeStep === 0 && (
            <div className="column">
              <img src={SelectAgent} alt="select agent" className="select-image" />
            </div>
          )}
          { (activeStep === 1 && (localService && localService.length === 1)) && (
            <div className="column column-image-container">
              <img src={SingleService} alt="select service" className="select-image" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool.isRequired,
  completed: PropTypes.bool.isRequired,
  icon: PropTypes.node.isRequired,
};

Steps.propTypes = {
  t: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired,
  defaultLang: PropTypes.shape({}).isRequired,
  changeLang: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  handleChooseService: PropTypes.func.isRequired,
  checkedServices: PropTypes.shape({}).isRequired,
  selectServiceRef: PropTypes.shape({}).isRequired,
  activeServices: PropTypes.shape(PropTypes.array.isRequired).isRequired,
  handleSimulateChooseServices: PropTypes.func.isRequired,
};
