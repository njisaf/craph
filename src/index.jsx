import React from "react";
import ReactDOM from "react-dom";
import { AppContainer, module, render } from "react-hot-loader";
import { Provider, observer } from "mobx-react";
import { masterStore } from "./core/stores/master.store";
import AblePlayer from "./scripts/AblePlayer";
import LegacyVideoPlayer from "./scripts/LegacyVideoPlayer";
import MockData from "../content/MockData.json";

@observer
class App extends React.Component {
  render() {
    return (
      <Provider store={masterStore}>
        <div className="container">
          <h1>React Able Player</h1>
          <div className="row">
            <div className="col-12 col-md-6">
              <h2>In Development</h2>
              <AblePlayer
                id={MockData.id + "-dev"}
                videoSource={MockData.videoSource}
                poster={MockData.poster}
                captions={MockData.caption}
              />
            </div>
            <div className="col-12 col-md-6">
              <h2>Legacy</h2>
              <LegacyVideoPlayer
                id={MockData.id + "-legacy"}
                videoSource={MockData.videoSource}
                poster={MockData.poster}
                captions={MockData.caption}
              />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById("app")
);
// Hot Module Replacement API
if (module && module.hot) {
  module.hot.accept("./app", () => {
    render(App);
  });
}
