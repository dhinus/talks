import React from 'react';
import { shallow, mount } from 'enzyme';
import { Menu } from './demo2';

// using mount
it('triggers onClick only on items that are not disabled', () => {
  const onClickOne = jest.fn();
  const onClickTwo = jest.fn();

  // Replace 'shallow' with 'mount' and the test will pass
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
