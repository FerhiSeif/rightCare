import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Header from '../layouts/Header';
import AssignAgent from './steps/AssignAgent';
import AccountSummary from './steps/AccountSummary';
import { options } from '../../configs/options';
// import SelectAgent from '../../assets/images/onboard/get-started/select-agent.png';
// import SingleService from '../../assets/images/onboard/group.png';
import WelcomeImg from '../../assets/images/onboard/welcomeImg.png';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '3rem',
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
  buttonOutlined2: {
    backgroundColor: 'transparent',
    color: '#0089e1',
    borderColor: '#0089e1',
    borderRadius: '10px',
    padding: '1rem 3rem',
    marginRight: '1rem',
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
  return ['Add agents', 'Account config summary'];
}

function getStepContent(
  t,
  step,
  checkedServices,
  activeServices,
  handleBack,
  containerWidth,
) {
  switch (step) {
    case 0:
      return (
        <AssignAgent
          checkedServices={checkedServices}
          activeServices={activeServices}
          handleBack={handleBack}
          containerWidth={containerWidth}
        />
      );
    case 1:
      return (
        <AccountSummary
          checkedServices={checkedServices}
          activeServices={activeServices}
          containerWidth={containerWidth}
        />
      );
    default:
      return t('onboard.steps.unknown_step');
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

  /*
  const handleSkip = () => {
    if (activeStep === 0) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped((prevSkipped) => {
        const newSkipped = new Set(prevSkipped.values());
        newSkipped.add(activeStep);
        return newSkipped;
      });
    }
  };
  */

  const {
    t,
    kind,
    defaultLang,
    changeLang,
    isLogged,
    checkedServices,
    activeServices,
    handleSimulateChooseServices,
    selectServiceRef,
    containerWidth,
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

      <div className="steps-container">
        <div className="columns">
          <div className="column is-three-fifths steps-column">
            {activeStep === 0 && (
              <>
                <h2 className="common-medium-title">{t('onboard.add_agent')}</h2>
                <p>{t('onboard.add_agent_to_your_platform')}</p>
              </>
            )}
            {activeStep === 1 && (
              <>
                <h2 className="common-medium-title">{t('onboard.account_setup_summary')}</h2>
                <p>{t('onboard.onboarding_process')}</p>
              </>
            )}

            <div className={classes.root}>

              <div>
                <div className="content-selector">
                  <div className={classes.instructions}>
                    {
                      getStepContent(
                        t,
                        activeStep,
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
                      <>
                        <Button
                          variant="outlined"
                          color="primary"
                          onClick={handleBack}
                          className={classes.buttonOutlined2}
                        >
                          {t('onboard.back')}
                        </Button>
                        <Link to="/dashboard" style={{ color: '#ffffff' }}>
                          <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                          >
                            {t('onboard.finish')}
                          </Button>
                        </Link>
                      </>
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
                      <Link to="/dashboard" style={{ color: '#ffffff' }}>
                        <Button
                          variant="outlined"
                          color="primary"
                          className={classes.buttonOutlined}
                        >
                          {t('onboard.skip')}
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Affichage dynamique des images de droite */}
          { activeStep === 0 && (
            <div className="column">
              <img src={WelcomeImg} alt="select agent" className="select-image" />
            </div>
          )}
          { (activeStep === 1) && (
            <div className="column column-image-container">
              <img src={WelcomeImg} alt="select service" className="select-image" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}


Steps.propTypes = {
  t: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired,
  defaultLang: PropTypes.shape({}).isRequired,
  changeLang: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  checkedServices: PropTypes.shape({}).isRequired,
  selectServiceRef: PropTypes.shape({}).isRequired,
  activeServices: PropTypes.shape(PropTypes.array.isRequired).isRequired,
  handleSimulateChooseServices: PropTypes.func.isRequired,
};
