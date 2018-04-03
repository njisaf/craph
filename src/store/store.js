import {initStore} from 'react-waterfall';
import reduxDevTools from 'react-waterfall-redux-devtools-middleware'

import {playVideo} from './actions';

const store = {
  initialState: {
    isPlaying: false
  },
  actions: {
    playVideo
  }
}

export const {
  Provider,
  actions,
  getState,
  connect
} = initStore(store, reduxDevTools());
