import React from 'react';
import PropTypes from 'prop-types';

export default class Media extends React.Component {

  static propTypes = {
    id: PropTypes.string,
    videoSource: PropTypes.string,
    captions: PropTypes.string,
    poster: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.video = [];
  }

  render() {
    return (
      <video ref={el => this.video = el} id={this.props.id} tabIndex="-1" poster={this.props.poster} style={{width: '100%', height: 'auto'}}>
        <source type="video/mp4" src={this.props.videoSource}/>
        <track kind="captions" src={this.props.captions}/>
      </video>
    )
  }

}
