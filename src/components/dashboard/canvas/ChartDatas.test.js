import React from 'react';
import { shallow } from 'enzyme';
import ChartDatas from './ChartDatas';

describe('<ChartDatas />', () => {
  const props = {
    data: [12, 59, 5, 56, 58, 12, 59, 85, 45],
    backgroundColor: 'rgb(0, 2, 255, .5)',
  }
  it('renders the ChartDatas component', () => {
    const component = shallow(<ChartDatas {...props} />);
    expect(component.exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });
});
