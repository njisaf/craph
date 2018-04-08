import React from 'react';
// import PropTypes from 'prop-types';

import {ButtonsConsumer} from '../../context/buttons.context';

import ControlButton from './ControlButton';

export default class Controls extends React.Component {

  render() {
    return (
      <div className="ablePlayer__controls">
        <div className="able-controller able-white-controls">
            <ButtonsConsumer>
              {buttons => (
                <div className="able-left-controls">
                  <ControlButton
                    buttonName="Play"
                    className="able-button-handler-play"
                    iconClass="icon-play"
                    onClick={buttons.toggleButton} />
                  <ControlButton
                    buttonName="Restart"
                    className="able-button-handler-restart"
                    iconClass="icon-restart"
                    onClick={buttons.toggleButton} />
                  <ControlButton
                    buttonName="Rewind"
                    className="able-button-handler-rewind"
                    iconClass="icon-rewind"
                    onClick={buttons.toggleButton} />
                  <ControlButton
                    buttonName="Forward"
                    className="able-button-handler-rewind"
                    iconClass="icon-forward"
                    onClick={buttons.toggleButton} />
                  <ControlButton
                    buttonName="Slower"
                    className="able-button-handler-slower"
                    iconClass="icon-slower"
                    onClick={buttons.toggleButton} />
                  <ControlButton
                    buttonName="Faster"
                    className="able-button-handler-faster"
                    iconClass="icon-faster"
                    onClick={buttons.toggleButton} />
                  <ControlButton
                    buttonName="Hide Captions"
                    className="able-button-handler-captions"
                    iconClass="icon-captions"
                    onClick={buttons.toggleButton} />
                </div>
              )}
            </ButtonsConsumer>
        </div>
      </div>
    )
  }
}
