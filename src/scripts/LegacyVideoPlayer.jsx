import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

@observer
export default class LegacyVideoPlayer extends React.Component {

  static propTypes = {
    id: PropTypes.string,
    videoSource: PropTypes.string,
    captions: PropTypes.string,
    poster: PropTypes.string
  }

  render() {
    return (
      <video id={this.props.id} data-able-player preload="auto" width="480" height="360" poster={this.props.poster}>
        <source type="video/mp4" src={this.props.videoSource} data-desc-src={this.props.videoSource}/>
        <track kind="captions" src={this.props.captions}/>
      </video>
    )
  }
}
