import React from 'react';
import { shallow } from 'enzyme';
import App from '../app/App';

describe('<App />', () => {

  const component = shallow(<App />);
  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
