import React from 'react';

class Buttons extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false
    }
  }

  toggleButton = (button) => {
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
}

export const ButtonContext = React.CreateContext(Buttons);
