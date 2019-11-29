import React from 'react';
import PropTypes from 'prop-types';
import Chart from './Chart';

const ChartDatas = ({ i18n }) => (
  <Chart
    backgroundColor="rgb(255, 99, 132, 0.5)"
    color="rgb(255, 99, 132)"
    data={[1, 2, 4, 5, 6, 7, 7, 8, 9, 0]}
    fill={false}
    label="Actual Data"
    steppedLine={false}
    stepSize={2}
    i18n={i18n}
  />
);

ChartDatas.propTypes = {
  i18n: PropTypes.shape({}).isRequired,
  data: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

export default ChartDatas;
