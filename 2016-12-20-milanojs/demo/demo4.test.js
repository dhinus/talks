import React from 'react';
import { Menu } from './demo4';
import { shallow, mount } from 'enzyme';

// Without hitting the DOM
it('overrides color from style if provided as prop', () => {
  const menu = new Menu({
    color: 'blue',
    options: [
      { title: 'Option One', onClick: jest.fn(), color: 'red' }
    ]
  });
  expect(menu.getLocals().options[0].color).toBe('red');
});

// Hitting the DOM
it('overrides color from style if provided as prop', () => {
  const menu = mount(
    <Menu
      color='blue'
      options={[ { title: 'Option One', onClick: jest.fn(), color: 'red' } ]}
    />
  );
  expect(menu.render().find('.menu-item').css('color')).toBe('red');
});
