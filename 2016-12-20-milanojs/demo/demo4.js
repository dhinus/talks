import React from 'react';
class Menu extends React.Component {

  getLocals() {
    const { options, color } = this.props;
    return {
      options: options.map((opt) => ({
        title: opt.title,
        onClick: opt.onClick,
        color: opt.color || color || '#fff'
      }))
    };
  }

  onOptionClick(option) {
    return () => {
      if (!option.disabled) {
        option.onClick(option);
      }
    };
  }

  menuItem(option) {
    return (
      <div className='menu-item' onClick={this.onOptionClick(option)}
        style={{ color: option.color }}
      >
        {option.title}
      </div>
    );
  }

  template({ options }) {
    return (
      <div className='menu'>
        {options.map((option, i) => (
          <div className='menu-row' key={i}>
            {this.menuItem(option)}
          </div>
        ))}
      </div>
    );
  }

  render() {
    return this.template(this.getLocals());
  }
}

export { Menu };
