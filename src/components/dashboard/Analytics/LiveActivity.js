import React from 'react';
import PropTypes from 'prop-types';

const LiveActivity = (props) => {
  const {
    t,
    img,
    title,
    time,
    status,
    index,
  } = props;

  return (
    <div className={`column-content column-content-o content-child-${index}`}>
      <div className="activity-a">
        <img src={img} alt="Picture" className="activity-img" />
      </div>
      <div className="activity-b">
        <p className="activity-text">
          { title }
        </p>
        <p className="activity-time">
          { time }
        </p>
      </div>
      <div className="activity-c">
        <span className="activity-badge">
          { status }
        </span>
      </div>
    </div>
  );
};

LiveActivity.propTypes = {
  t: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default LiveActivity;
