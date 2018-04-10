import React from 'react';
import PropTypes from 'prop-types'

export const ButtonsContext = React.createContext('defaultValue');

export class ButtonsProvider extends React.Component {

  static propTypes = {
    children: PropTypes.node.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      actions: {
        toggleButton: this.toggleButton
      }
    }
  }

  toggleButton = (button) => {
    console.log('DING');
    switch (button) {
      case 'Play':
        console.log('Play button toggled');
        this.setState({
          isPlaying: !this.state.isPlaying
        });
        break;
      default:
        console.log('Unrecognized button toggled');
    }
  }

  render() {
    return (
      <ButtonsContext.Provider value={this.state}>
        {this.props.children}
      </ButtonsContext.Provider>
    )
  }
}

export class ButtonsConsumer extends React.Component {

  static propTypes = {
    children: PropTypes.func.isRequired
  }

  render() {
    return (
      <ButtonsContext.Consumer>
        {this.props.children}
      </ButtonsContext.Consumer>
    )
  }
}
