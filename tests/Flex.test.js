import React from 'react';
import test from 'ava';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Flex } from '../core-components/Flex';

configure({ adapter: new Adapter() });

test('<Flex /> should render', t => {
  t.plan(2);
  const text = 'Hello world';
  const wrapper = shallow(<Flex>{text}</Flex>);
  t.is(wrapper.children().text(), text);
  t.is(wrapper.name(), 'StyledComponent');
});
