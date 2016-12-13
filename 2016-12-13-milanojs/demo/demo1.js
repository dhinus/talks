import React from 'react';
class Menu extends React.Component {

  onOptionClick(option) {
    return () => {
      if (!option.disabled) {
        option.onClick(option);
      }
    };
  }

  menuItem(option) {
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
