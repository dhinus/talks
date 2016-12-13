import React from 'react';
import range from 'lodash/range';

class Icon extends React.Component {

  getLocals() {
    const { icon, color, style = {} } = this.props;
    return {
      icon,
      style: { color: color || style.color }
    };
  }

  template({ icon, className, style, onClick, paths }) {
    return icon ? (
      <i style={style} onClick={onClick}>
        {paths > 1 && range(paths).map(k => <span className={`path${k + 1}`} key={k} /> )}
      </i>
    )
    : null;
  }

  render() {
    return this.template(this.getLocals());
  }

}

export { Icon };
