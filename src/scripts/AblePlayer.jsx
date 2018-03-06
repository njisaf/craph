// const debug = require('debug')('AblePlayer');

import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from './VideoPlayer';

import {connect} from '../core/stores/connect';
import {playerStore} from '../core/store/player.store';

import '../../styles/main.scss';

const mapStoreToProps = ({playerStore}) => (
  {
    isPlaying: playerStore.state.isPlaying
  }
)

class AblePlayer extends React.Component {
  //TODO: Let's start stacking them up:
  // 1) Work out how to handle transcripts. Might need a completely new conception, or might just need to be left as jQuery.


  static propTypes = {
    id: PropTypes.string.isRequired,
    videoSource: PropTypes.string,
    captions: PropTypes.string,
    poster: PropTypes.string,
    isPlaying: PropTypes.bool
  }

  static defaultProps = {
    autoplay: false,
    width: 480,
    height: 360,
    poster: '',
    iconType: 'font',
    speedIcons: 'arrows',
    startTime: 0,
    defaultVolume: 7,
    showNowPlaying: false,
    lang: 'en',
    forceLang: false,
    captionsPosition: 'below',
    youtubeId: '',
    youtubeDescId: '',
    options: {
      autoplay: false,
      loop: false,
      startTime: 0,
      volume: 7
    },
    ignoreButtons: {
      chapters: false,
      transcript: false,
      descriptions: false,
      fullscreen: false
    }
  }

  constructor(props) {
    super(props);
    this.playerStore = playerStore;
  }

  // componentDidMount() {
  //   // AblePlayer: "Keep track of the last player created for use with global events." no clue what this means
  //   this.playerStore.lastCreated = this.ablePlayer;
  //   this.playerStore.setInitialState(this.props.options);
  //   console.log('this.playerStore.videoPlayer', this.playerStore.videoPlayer);
  // }

  renderStandardControlButton = (button, icon) => {
    const iconName = icon || button.toLowerCase();
    return (
      <button type="button" onClick={this[`handle${button}OnClick`]} tabIndex="0" aria-label={button} className={`able-button-handler-${button.toLowerCase()}`}>
        <span className={`icon-${iconName}`} aria-hidden="true"></span>
        <span className="able-clipped">{button}</span>
      </button>
    )
  }

  handlePlayOnClick = () => {
    console.log('handlePlayOnClick');
    this.props.isPlaying
      ? this.playerStore.pauseVideo()
      : this.playerStore.playVideo()
  }

  handleRestartOnClick = () => {
    console.log('handleRestartOnClick');
    this.playerStore.seekTo(0);
  }

  handleRewindOnClick = () => {
    console.log('handleRewindOnClick');
    this.playerStore.handleRewind();
  }

  handleForwardOnClick = () => {
    console.log('handleForwardOnClick');
    this.playerStore.handleFastForward();
  }



  //width and height are generated OFF of the video attributes and added as inline styles.

  render() {
    return (
      <div className="able-wrapper" ref={(ref) => this.ablePlayer = ref} aria-hidden="false" style={{maxWidth: '480px'}}>
        <div className="able">
          <h2 className="able-offscreen">Media Player</h2>
        </div>
        <div className="able-vidcap-container">
          <div className="able-media-container">
            <VideoPlayer
              ref={el => this.playerStore.assignVideoPlayerRef(el)}
              id={this.props.id}
              videoSource={this.props.videoSource}
              captions={this.props.captions}
              poster={this.props.poster} />
          </div>
          <div className="able-captions-wrapper able-captions-overlay" aria-hidden="true">
            <div className="able-captions"></div>
          </div>
          <div className="able-player able-video" role="region" aria-label="video player">
            <div className="able-now-playing" aria-live="assertive" aria-atomic="true"></div>
            <div className="able-controller able-white-controls">
              <div id={`${this.props.id}-tooltip`} className="able-tooltip"></div>
              <div className="able-left-controls">
                {this.renderStandardControlButton('Play')}
                {this.renderStandardControlButton('Restart')}
                {this.renderStandardControlButton('Rewind')}
                {this.renderStandardControlButton('Forward')}
              </div>
              <div className="able-right-controls">
                <div className="able-seekbar-wrapper">
                  <div className="able-seekbar">
                    <div role="tooltip" className="able-tooltip" style={{display: 'none'}}></div>
                    <div className="able-seekbar-loaded"></div>
                    <div className="able-seekbar-played"></div>
                    <div orientation="horizontal" className="able-seekbar-head" tabIndex="0" role="slider" aria-label="video timeline" aria-valuemin="0" aria-valuemax={this.props.videoLength} aria-valuetext="0 seconds" aria-valuenow="0"></div>
                  </div>
                  <span className="able-offscreen" aria-live="polite"></span>
                </div>
                <button type="button" tabIndex="0" aria-label="Volume" className="aria-button-handler-volume" aria-controls={`${this.props.id}-volume-slider`} aria-describedby={`${this.props.id}-volume-help`}>
                  <span className="icon-volume-medium" aria-hidden="true"></span>
                  <span className="able-clipped">Volume</span>
                </button>
                <div id={`${this.props.id}-volume-slider`} className="able-volume-slider" aria-hidden="true">
                  <div className="able-tooltip" role="tooltip"></div>
                  <div className="able-volume-track">
                    <div className="able-volume-track able-volume-track-on"></div>
                    <div className="able-volume-head" role="slider" aria-orientation="vertical" aria-label="Volume up down" aria-valuemin="0" aria-valuemax="10" aria-valuenow="7" tabIndex="-1" aria-valuetext="70%"></div>
                  </div>
                  <div className="able-offscreen" aria-live="assertive" aria-atomic="true">70%</div>
                  <div id={`${this.props.id}-volume-help`} className="able-volume-help">70%, Click to access volume slider</div>
                </div>
              </div>
              <div className="clear:both;" />
              <div className="able-left-controls">
                <button type="button" tabIndex="0" aria-label="Slower" className="able-button-handler-slower">
                  <span className="icon-slower" aria-hidden="true"></span>
                  <span className="able-clipped">Slower</span>
                </button>
                <button type="button" tabIndex="0" aria-label="Faster" className="able-button-handler-faster">
                  <span className="icon-faster" aria-hidden="true"></span>
                  <span className="able-clipped">Faster</span>
                </button>
                <button type="button" tabIndex="0" aria-label="Hide captions" className="able-button-handler-captions">
                  <span className="icon-captions" aria-hidden="true"></span>
                  <span className="able-clipped">Hide captions</span>
                </button>
                {
                  this.props.ignoreButtons.transcript ||
                  (
                    <button type="button" tabIndex="0" aria-label="Show transcript" className="able-button-handler-transcript buttonOff" title="Show transcript">
                      <span className="icon-transcript" aria-hidden="true"></span>
                      <span className="able-clipped">Show transcript</span>
                    </button>
                  )
                }
              </div>
              <div className="able-right-controls">
                <button type="button" tabIndex="0" aria-label="Preferences" className="able-button-handler-preferences" aria-controls={`${this.props.id}-prefs-menu`}>
                  <span className="icon-preferences" aria-hidden="true"></span>
                  <span className="able-clipped">Preferences</span>
                </button>
                {
                  this.props.ignoreButtons.fullscreen ||
                  (
                    <button type="button" tabIndex="0" aria-label="Enter full screen" className="able-button-handler-fullscreen">
                      <span className="icon-fullscreen icon-fullscreen-expand" aria-hidden="true"></span>
                      <span className="able-clipped">Enter full screen</span>
                    </button>
                  )
                }
              </div>
              <div className="clear:both;" />
              <div id={`${this.props.id}-prefs-menu`} className="able-popup able-popup-no-radio">
                <ul>
                  <li>
                    <input type="radio" value="captions" name={`${this.props.id}-prefs-choice`} id={`${this.props.id}-prefs-0`}/>
                    <label htmlFor={`${this.props.id}-prefs-0`}>Captions</label>
                  </li>
                  <li>
                    Hello There
                  </li>
                </ul>
              </div>
              <div id={`${this.props.id}-captions-menu`} className="able-popup">
                <ul>
                  <li>
                    Hello There
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="able-status-bar">
            <span className="able-timer">
              <span className="able-elapsedTime">0:00</span>
              <span className="able-duration"> / 0:53</span>
            </span>
            <span className="able-speed" aria-live="assertive">
              Speed: 1x
            </span>
            <span className="able-status" aria-live="polite">
              Stopped
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStoreToProps)(AblePlayer);
