// @flow

type MenuOption = {|
  title: string,
  onClick: Function,
  disabled: ?boolean
|}

type Props = {
  options: Array<MenuOption>
}

import React from 'react';
class Menu extends React.Component {
  props: Props;

  onOptionClick(option: MenuOption) {
    return () => {
      if (!option.disabled) {
        option.onClick(option);
      }
    };
  }

  menuItem(option: MenuOption) {
    return (
      <div className='menu-item' onClick={this.onOptionClick(option)}>
        {option.title}
      </div>
    );
  }

  render() {
    return (
      <div className='menu'>
        {this.props.options.map((option, i) => (
          <div className='menu-row' key={i}>
            {this.menuItem(option)}
          </div>
        ))}
      </div>
    );
  }

}

export { Menu };
