import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer, module, render} from 'react-hot-loader';
import {Provider, observer} from 'mobx-react'
import {masterStore} from './core/stores/master.store';
import AblePlayer from './scripts/AblePlayer';
import LegacyVideoPlayer from './scripts/LegacyVideoPlayer';
import 'bootstrap'; // bootstrap is required for modals

import MockData from '../content/MockData.json';

@observer
class App extends React.Component {

  render() {
    return (
      <Provider store={masterStore}>
        <div>
          <h1>React Able Player</h1>
          <AblePlayer
            id="video1"
            />
          <LegacyVideoPlayer
            id={MockData.id}
            videoSource={MockData.videoSource}
            poster={MockData.poster}
            captions={MockData.caption}/>
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
