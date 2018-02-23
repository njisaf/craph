import React from 'react';
import PropTypes from 'prop-types';
import {observer, inject} from 'mobx-react';

import '../styles/main.scss';

@inject('store')
@observer
export default class AblePlayer extends React.Component {
  //TODO: Let's start stacking them up:
  // 1) Work out how to handle transcripts. Might need a completely new conception, or might just need to be left as jQuery.


  static propTypes = {
    store: PropTypes.object.isRequired,
    autoplay: PropTypes.bool,
    preload: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    poster: PropTypes.string,
    iconType: PropTypes.string,
    speedIcons: PropTypes.string,
    startTime: PropTypes.number,
    defaultVolume: PropTypes.number,
    seekInterval: PropTypes.number,
    showNowPlaying: PropTypes.bool,
    lang: PropTypes.string,
    forceLang: PropTypes.bool,
    captionsPosition: PropTypes.string,
    allowFullscreen: PropTypes.bool,
    youtubeId: PropTypes.string,
    youtubeDescId: PropTypes.string
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
    allowFullscreen: true,
    youtubeId: '',
    youtubeDescId: ''
  }

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  componentDidMount() {
    console.log('this.store', this.store);
    // Keep track of the last player created for use with global events.
    this.store.lastCreated = this.ablePlayer;
    this.setInitialState();
  }

  setInitialState = () => {
    this.store.autoplay = this.props.autoplay;
    this.store.loop = this.props.loop;
    this.store.time = this.props.startTime;
    this.store.volume = this.props.defaultVolume;
  }

  render() {
    return (
      <div className="able-wrapper" ref={(ref) => this.ablePlayer = ref}>
        <div className="able">
          <h2 className="able-offscreen">Media Player</h2>
        </div>
        <div className="able-vidcap-container">
          <div className="able-media-container">
            <video>
              <source />
              <track />
            </video>
          </div>
          <div className="able-captions-wrapper able-captions-overlay" aria-hidden="true">
            <div className="able-captions"></div>
          </div>
          <div className="able-player able-video" role="region" aria-label="video player">
            <div className="able-now-playing" aria-live="assertive" aria-atomic="true"></div>
            <div className="able-controller able-white-controls">
              <div id={`${this.props.id}-tooltip`} className="able-tooltip"></div>
              <div className="able-left-controls">
                <button type="button" tabIndex="0" aria-label="Play" className="able-button-handler-play">
                  <span className="icon-play" aria-hidden="true"></span>
                  <span className="able-clipped">Play</span>
                </button>
                <button type="button" tabIndex="0" aria-label="Restart" className="able-button-handler-restart">
                  <span className="icon-restart" aria-hidden="true"></span>
                  <span className="able-clipped">Restart</span>
                </button>
                <button type="button" tabIndex="0" aria-label="Rewind" className="able-button-handler-rewind">
                  <span className="icon-rewind" aria-hidden="true"></span>
                  <span className="able-clipped">Rewind</span>
                </button>
                <button type="button" tabIndex="0" aria-label="Forward" className="able-button-handler-forward">
                  <span className="icon-forward" aria-hidden="true"></span>
                  <span className="able-clipped">Forward</span>
                </button>
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
              <div>clearfix?</div>
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
                <button type="button" tabIndex="0" aria-label="Show transcript" className="able-button-handler-transcript buttonOff" title="Show transcript">
                  <span className="icon-transcript" aria-hidden="true"></span>
                  <span className="able-clipped">Show transcript</span>
                </button>
              </div>
              <div className="able-right-controls"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}
