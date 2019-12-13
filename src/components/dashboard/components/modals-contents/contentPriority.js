import React from 'react';
import PropTypes from 'prop-types';

const ContentPriority = (props) => {
  const {
    t,
    kind,
    buttonText,
    handleContinue,
  } = props;

  return (
    <div className="">
        <section className="modal-card-body">
            <div className="input-section">
              <input className="input" type="text" placeholder="Enter Ticket Priority name" />
              {/* {t('settings.tickets_priority_content.ticket_riority_name')} */}
            </div>

              <div className="select">
                <select>
                  <option>
                    {t('settings.tickets_priority_content.ticket_priority_name')}
                  </option>
                  <option>With options</option>
                </select>
            </div>
        </section>
        <footer className="modal-card-foot">
            <button className="button is-primary" aria-label="close" onClick={handleContinue}>{buttonText}</button>
        </footer>
    </div>
  );
};

ContentPriority.propTypes = {
  t: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  handleContinue: PropTypes.func.isRequired,
};

export default ContentPriority;
