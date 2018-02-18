import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer, module, render} from 'react-hot-loader';
import {Provider, observer} from 'mobx-react'
import {masterStore} from './core/stores/master.store';

@observer
class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Hello World</h1>
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
