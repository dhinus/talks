import React from 'react';
import axios from 'axios';

class MenuItem extends React.Component {
  onOptionClick(option) {
    return () => {
      if (!option.disabled) {
        option.onClick(option);
        axios.post('https://milanojs.com', { value: option.title });
      }
    };
  }

  render() {
    return (
      <div className='menu-item' onClick={this.onOptionClick(this.props.options)}>
        {this.props.options.title}
      </div>
    );
  }

}

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
            <MenuItem options={option}/>
          </div>
        ))}
      </div>
    );
  }

}

export { Menu };
