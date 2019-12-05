import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Header from '../layouts/Header';
import AddAgent from './steps/AddAgent';
import AssignAgent from './steps/AssignAgent';
import AccountSummary from './steps/AccountSummary';
import { options } from '../../configs/options';
import SelectAgent from '../../assets/images/onboard/get-started/select-agent.png';
import SingleService from '../../assets/images/onboard/group.png';

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 25,
  },
  active: {
    '& $line': {
      backgroundColor: '#00bd39',
    },
  },
  completed: {
    '& $line': {
      backgroundColor: '#00bd39',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#c8d3d6',
    borderRadius: 1,
  },
})(StepConnector);

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

function getSteps() {
  return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

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
        <AddAgent
          handleChooseService={handleChooseService}
          checkedServices={checkedServices}
        />
      );
    case 1:
      return (
        <AssignAgent
          handleChooseService={handleChooseService}
          checkedServices={checkedServices}
          activeServices={activeServices}
          handleBack={handleBack}
          containerWidth={containerWidth}
        />
      );
    case 2:
      return (
        <AccountSummary
          handleChooseService={handleChooseService}
          checkedServices={checkedServices}
          activeServices={activeServices}
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
  const steps = getSteps();
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

  const handleSkip = () => {
    if (activeStep === 0) {
      setActiveStep((prevActiveStep) => prevActiveStep + 2);
      setSkipped((prevSkipped) => {
        const newSkipped = new Set(prevSkipped.values());
        newSkipped.add(activeStep);
        return newSkipped;
      });
    }
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
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
            {activeStep === 0 && (
              <h2 className="common-medium-title">{t('onboard.get_started')}</h2>
            )}
            {activeStep === 1 && (
              <h2 className="common-medium-title">{t('onboard.assign_agent_to_channel')}</h2>
            )}
            {activeStep === 2 && (
              <h2 className="common-medium-title">{t('onboard.account_setup_summary')}</h2>
            )}
            {activeStep === 0 && (
              <p>{t('onboard.add_channels_to_your_platform')}</p>
            )}
            {activeStep === 1 && (
              <p>{t('onboard.assign_agent_to_work')}</p>
            )}
            {activeStep === 2 && (
              <p>{t('onboard.onboarding_process')}</p>
            )}
            <div className={classes.root}>
              <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />} className={classes.steppers}>
                {steps.map((label, index) => (
                  <Step key={label}>
                    <StepLabel StepIconComponent={ColorlibStepIcon} onClick={handleStep(index)} />
                  </Step>
                ))}
              </Stepper>
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
                    { activeStep === steps.length - 1 ? (
                      <Link to="/dashboard" style={{ color: '#ffffff' }}>
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.button}
                        >
                          {t('onboard.finish')}
                        </Button>
                      </Link>
                    ) : (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        {t('onboard.continue')}
                      </Button>
                    )}
                    {activeStep !== steps.length - 1 && (
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={activeStep === 1 ? handleNext : handleSkip}
                        className={classes.buttonOutlined}
                      >
                        {t('onboard.skip')}
                      </Button>
                    )}
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
