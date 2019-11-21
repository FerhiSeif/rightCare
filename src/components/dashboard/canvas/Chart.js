import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChartJs from 'chart.js';

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    const {
      color,
      fill,
      steppedLine,
      stepSize,
    } = this.props;

    // const labels = Array.from(Array(data.length), (x, i) => i + 1);

    this.chartRef.current.height = '180';

    this.myChart = new ChartJs(this.chartRef.current, {
      type: 'bar',
      data: {
        labels: ['<  1', '1 - 2', '3 - 4', '5 - 9', '10 - 14', '15 - 19', '20 - 24', '25 - 29', '> - 29'],
        datasets: [{
          label: 'Agents',
          backgroundColor: '#caf270',
          data: [85, 85, 85, 85, 85, 85, 85, 85, 85],
        }, {
          label: 'Pending requests',
          backgroundColor: '#45c490',
          data: [12, 59, 5, 56, 58, 12, 59, 80, 23],
        }, {
          label: 'Completed requests',
          backgroundColor: '#00bd39',
          data: [12, 59, 5, 56, 58, 12, 59, 65, 51],
        }, {
          label: 'New requests',
          backgroundColor: '#0089e1',
          data: [12, 59, 5, 56, 58, 12, 59, 12, 74],
        }],
      },
      options: {
        tooltips: {
          displayColors: true,
          callbacks: {
            mode: 'x',
          },
        },
        scales: {
          xAxes: [{
            stacked: true,
            gridLines: {
              display: false,
            },
          }],
          yAxes: [{
            stacked: true,
            ticks: {
              beginAtZero: true,
            },
            type: 'linear',
          }],
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: { position: 'bottom' },
      },
    });
  }

  componentDidUpdate() {
    const { data } = this.props;
    const labels = Array.from(Array(data.length), (x, i) => i + 1);
    this.myChart.labels = labels;
    this.myChart.data.datasets[0].data = data;
    this.myChart.update();
  }

  render() {
    return (
      <canvas ref={this.chartRef} />
    );
  }
}

Chart.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  fill: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  steppedLine: PropTypes.bool.isRequired,
  stepSize: PropTypes.number.isRequired,
};
