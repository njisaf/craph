import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer, module, render} from 'react-hot-loader';
import App from './App';

import {Provider} from './store/store';

import 'bootstrap'; // bootstrap is required for modals

ReactDOM.render(
    <Provider>
      <AppContainer>
        <App />
      </AppContainer>
    </Provider>, document.getElementById('app'));

// Hot Module Replacement API
if (module && module.hot) {
  module.hot.accept('./app', () => {
    render(App);
  });
}
