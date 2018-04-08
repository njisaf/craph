import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer, module, render} from 'react-hot-loader';

import AblePlayer from './scripts/AblePlayer';
// import LegacyVideoPlayer from './scripts/LegacyVideoPlayer';
import 'bootstrap'; // bootstrap is required for modals

import MockData from '../content/MockData.json';

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>React Able Player</h1>
        <AblePlayer
          id={MockData.id}
          videoSource={MockData.videoSource}
          poster={MockData.poster}
          captions={MockData.caption}
          />
      </div>
    )
  }

}

ReactDOM.render(<AppContainer><App/></AppContainer>, document.getElementById('app'));
// Hot Module Replacement API
if (module && module.hot) {
  module.hot.accept('./app', () => {
    render(App)
  });
}
