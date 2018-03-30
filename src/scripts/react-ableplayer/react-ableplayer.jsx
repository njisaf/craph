import React from 'react';
import PropTypes from 'prop-types';

//player subcomponents
import OffScreen from './off-screen';
import Media from './media';
import Captions from './captions';
import Controls from './controls/controls';
import StatusBar from './status-bar';

export default class ReactAblePlayer extends React.Component {
  static PropTypes = {
    id: PropTypes.string.isRequired,
    videoSource: PropTypes.string,
    captions: PropTypes.string,
    poster: PropTypes.string
  }

  render(){
    return(
    <div id={this.props.id} className="reactAblePlayer">
      <OffScreen />
      <Media />
      <Captions />
      <Controls />
      <StatusBar />
    </div>
  )
  }
}
