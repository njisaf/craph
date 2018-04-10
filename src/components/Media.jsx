import React from 'react';
import PropTypes from 'prop-types';

export default class Media extends React.Component {

  static propTypes = {
    id: PropTypes.string,
    mediaState: PropTypes.object.isRequired,
    source: PropTypes.string,
    captions: PropTypes.string,
    poster: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.video = null;
    this.state = this.props.mediaState
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return nextProps.mediaState;
  }

  componentDidUpdate() {
    if (this.state.playing) {
      console.log('PLAY MEDIA');
      this.video.play(true);
    } else {
      console.log('PAUSE MEDIA');
      this.video.pause(true);
    }
  }

  render() {
    return (
      <video ref={el => this.video = el} id={this.props.id} tabIndex="-1" poster={this.props.poster} style={{width: '100%', height: 'auto'}}>
        <source type="video/webm" src={this.props.source}/>
        <track kind="captions" src={this.props.captions}/>
      </video>
    )
  }

}
