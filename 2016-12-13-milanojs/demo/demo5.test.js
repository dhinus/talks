// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { Menu } from './demo1';

it('triggers onClick only on items that are not disabled', () => {
  const onClickOne = jest.fn();
  const onClickTwo = jest.fn();
  const component = shallow(
    <Menu options={[
      { title: 'Option One', onClick: onClickOne },
      { title: 'Option Two', onClick: onClickTwo, disabled: true }
    ]}
    />
  );
  component.find('.menu-item').at(0).simulate('click');
  component.find('.menu-item').at(1).simulate('click');
  expect(onClickOne).toBeCalled();
  expect(onClickTwo).not.toBeCalled();
});
