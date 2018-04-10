import React from 'react';
// import PropTypes from 'prop-types';
import {Subscribe} from 'unstated';

import MediaContainer from '../../containers/media.container';

import ControlButton from './ControlButton';


export default class Controls extends React.Component {

  render() {
    return (
      <div className="ablePlayer__controls">
        <div className="able-controller able-white-controls">
            <Subscribe to={[MediaContainer]}>
              {media => (
                <div className="able-left-controls">
                  <ControlButton
                    buttonName={media.state.playing ? 'Pause' : 'Play'}
                    className={`able-button-handler-${media.state.playing ? 'pause' : 'play'}`}
                    iconClass={`icon-${media.state.playing ? 'pause' : 'play'}`}
                    onClick={() => {
                      console.log('media.playing', media.state.playing);
                      media.state.playing
                        ? media.pauseMedia()
                        : media.playMedia()
                    }} />
                </div>
              )}
            </Subscribe>
        </div>
      </div>
    )
  }
}

// <ControlButton
//   buttonName="Restart"
//   className="able-button-handler-restart"
//   iconClass="icon-restart"
//   onClick={() => {}} />
// <ControlButton
//   buttonName="Rewind"
//   className="able-button-handler-rewind"
//   iconClass="icon-rewind"
//   onClick={() => {}} />
// <ControlButton
//   buttonName="Forward"
//   className="able-button-handler-rewind"
//   iconClass="icon-forward"
//   onClick={() => {}} />
// <ControlButton
//   buttonName="Slower"
//   className="able-button-handler-slower"
//   iconClass="icon-slower"
//   onClick={() => {}} />
// <ControlButton
//   buttonName="Faster"
//   className="able-button-handler-faster"
//   iconClass="icon-faster"
//   onClick={() => {}} />
// <ControlButton
//   buttonName="Hide Captions"
//   className="able-button-handler-captions"
//   iconClass="icon-captions"
//   onClick={() => {}} />
