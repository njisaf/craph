import React from 'react';
import PropTypes from 'prop-types';

import OffScreen from './components/off-screen';
import Media from './components/Media';
import Captions from './components/captions';
import Controls from './components/controls/controls';
import StatusBar from './components/status-bar';

import '../../styles/main.scss';

export default class AblePlayer extends React.Component {

  static propTypes = {
    id: PropTypes.string,
    source: PropTypes.string,
    captions: PropTypes.string,
    poster: PropTypes.string
  }

  render() {
    return (<div id={this.props.id} className="reactAblePlayer">
      <OffScreen />
      <Media
        ref={ref => this.media = ref}
        id={this.props.id}
        source={this.props.source}
        poster={this.props.poster} />
      <Captions captions={this.props.captions} />
      <Controls/>
      <StatusBar />
    </div>)
  }
}
