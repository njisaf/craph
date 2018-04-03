import React from 'react';

import AblePlayer from './scripts/AblePlayer';
import LegacyVideoPlayer from './scripts/LegacyVideoPlayer';

import {connect} from './store/store';

import MockData from '../content/MockData.json';


class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React Able Player</h1>
        {this.props.isPlaying}
      </div>
    )
  }
}

// <AblePlayer
//   id={MockData.id}
//   videoSource={MockData.videoSource}
//   poster={MockData.poster}
//   captions={MockData.caption}
//   actions={actions}
//   />
// <LegacyVideoPlayer
//   id={MockData.id}
//   videoSource={MockData.videoSource}
//   poster={MockData.poster}
//   captions={MockData.caption}
//   />

export default connect(state => ({ isPlaying: state.isPlaying }))(App);
