import React from 'react';
import { shallow, mount } from 'enzyme';
import { Menu } from './demo3';

it('sends an xhr request', (done) => {
  const onClickOne = jest.fn();

  const fakeOpen = jest.fn();
  const fakeSend = jest.fn();
  class fakeXhr {
    open() {
      fakeOpen.apply(this, arguments);
    }
    send() {
      fakeSend.apply(this, arguments);
    }
  }
  window.XMLHttpRequest = fakeXhr;

  const component = mount(
    <Menu options={[
      { title: 'Option One', onClick: onClickOne }
    ]}
    />
  );
  component.find('.menu-item').at(0).simulate('click');

  setTimeout(() => {
    try {
      expect(fakeOpen).toBeCalled();
      const args = fakeOpen.mock.calls[0];
      expect(args[0]).toBe('POST');
      expect(args[1]).toBe('https://milanojs.com');
      done();
    } catch (e) {
      // catch required, see https://github.com/facebook/jest/issues/2136
      done.fail(e);
    }
  });
});
