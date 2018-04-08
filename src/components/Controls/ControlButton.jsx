import React from 'react';
import PropTypes from 'prop-types';

export default class ControlButton extends React.Component {

  static propTypes = {
    buttonName: PropTypes.string.isRequired,
    className: PropTypes.string,
    iconClass: PropTypes.string,
    onClick: PropTypes.func
  }

  handleOnClick = (e) => {
    e.preventDefault();
    if (this.props.onClick) {
      this.props.onClick(this.props.buttonName);
    }
  }

  render() {
    return (
      <button type="button" onClick={this.handleOnClick} tabIndex="0" aria-label={this.props.buttonName} className={this.props.className}>
        <span className={this.props.iconClass} aria-hidden="true"></span>
        <span className="sr-only">{this.props.buttonName}</span>
      </button>
    )
  }
}
