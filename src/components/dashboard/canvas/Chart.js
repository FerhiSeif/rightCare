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
        labels: 'Channelso',
        datasets: [{
          backgroundColor: '#0089e1',
          data: [12, 59, 5, 56, 58, 12, 59, 85, 45],
          fill,
          label: 'Channels',
          borderColor: color,
          lineTension: 0,
          steppedLine,
        },
        {
          backgroundColor: '#c8d3d6',
          data: [85, 85, 85, 85, 85, 85, 85, 85, 85],
          fill,
          label: 'Agents',
          borderColor: color,
          lineTension: 0,
          steppedLine,
        }],
      },
      options: {
        elements: {
          point: {
            radius: 0,
          },
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [{
            gridLines: {
              display: false,
            },
            ticks: {
              beginAtZero: true,
              stepSize: stepSize || 1,
            },
          }],
        },
        responsive: true,
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
