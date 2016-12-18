import React from 'react';
import { Icon } from './demo4';
import { shallow, mount, render } from 'enzyme';

// Without hitting the DOM
it('overrides color from style if provided as prop', () => {
  const icon = new Icon({
    icon: 'foo',
    style: { color: 'blue' },
    color: 'red'
  });
  expect(icon.getLocals().style.color).toBe('red');
});

// Hitting the DOM
it('overrides color from style if provided as prop', () => {
  const icon = render(
    <Icon icon='foo'
      style={{ color: 'blue' }}
      color='red'
    />
  );
  expect(icon.find('i').css('color')).toBe('red');
});
