import React from 'react';
import { shallow } from 'enzyme';
import Chart from './Chart';
import ChartDatas from './ChartDatas';

describe('<Chart />', () => {
  const props = {
    data: [12, 59, 5, 56, 58, 12, 59, 85, 45],
    backgroundColor: 'rgb(0, 2, 255, .5)',
  };

  it('renders the Charts component', () => {
    const component = shallow(<ChartDatas {...props} />);
    expect(component.find(Chart).length).toBe(2);
    expect(component).toMatchSnapshot();
  });
});
