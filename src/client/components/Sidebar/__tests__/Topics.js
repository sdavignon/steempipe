import React from 'react';
import { shallow } from 'enzyme';
import Topics from '../Topics';

describe('<Topics />', () => {
  it('renders without exploding', () => {
    const props = {
      favorite: true,
      topics: ['steempipe', 'introduceyourself'],
      maxItems: 20,
      loading: false,
    };
    const wrapper = shallow(<Topics {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
