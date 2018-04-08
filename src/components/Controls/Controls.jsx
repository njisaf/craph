import React from 'react';
// import PropTypes from 'prop-types';

import ControlButton from './ControlButton';

export default class Controls extends React.Component {

  handleButtonOnClick = (buttonName) => {
    //might be able to get by with just one function, honestly;
    //dispatch these mothers to the store and action based on state.
    //change out the icon based on that, maybe one level up?
    //pass buttons and icons and shit in as an array?
    //I'm still thinking in MobX unfortunately, let's handle these buttons and see how that works;
    console.log('Literally just clickin\' on: ', buttonName);
  }

  render() {
    return (
      <div className="ablePlayer__controls">
        <div className="able-controller able-white-controls">
          <div className="able-left-controls">
            <ControlButton
              buttonName="Play"
              className="able-button-handler-play"
              iconClass="icon-play"
              onClick={this.handleButtonOnClick}
            />
            <ControlButton
              buttonName="Restart"
              className="able-button-handler-restart"
              iconClass="icon-restart"
              onClick={this.handleButtonOnClick}
            />
            <ControlButton
              buttonName="Rewind"
              className="able-button-handler-rewind"
              iconClass="icon-rewind"
              onClick={this.handleButtonOnClick}
            />
            <ControlButton
              buttonName="Forward"
              className="able-button-handler-rewind"
              iconClass="icon-forward"
              onClick={this.handleButtonOnClick}
            />
            <ControlButton
              buttonName="Slower"
              className="able-button-handler-slower"
              iconClass="icon-slower"
              onClick={this.handleButtonOnClick}
            />
            <ControlButton
              buttonName="Faster"
              className="able-button-handler-faster"
              iconClass="icon-faster"
              onClick={this.handleButtonOnClick}
            />
            <ControlButton
              buttonName="Hide Captions"
              className="able-button-handler-captions"
              iconClass="icon-captions"
              onClick={this.handleButtonOnClick}
            />
          </div>
        </div>
      </div>
    )
  }
}
