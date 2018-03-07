import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer, module, render} from 'react-hot-loader';

import {register, getAll, Provider} from './core/stores/container';
import {masterStore} from './core/stores/master.store';
import {playerStore} from './core/stores/player.store';

import AblePlayer from './scripts/AblePlayer';
import LegacyVideoPlayer from './scripts/LegacyVideoPlayer';
import 'bootstrap'; // bootstrap is required for modals

register({
  masterStore,
  playerStore
});

console.log('getAll', getAll);

import MockData from '../content/MockData.json';

class App extends React.Component {

  render() {
    return (
      <Provider value={getAll}>
        <div>
          <h1>React Able Player</h1>
          <AblePlayer
            id={MockData.id}
            videoSource={MockData.videoSource}
            poster={MockData.poster}
            captions={MockData.caption}
            />
          <LegacyVideoPlayer
            id={MockData.id}
            videoSource={MockData.videoSource}
            poster={MockData.poster}
            captions={MockData.caption}
            />
        </div>
      </Provider>
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
