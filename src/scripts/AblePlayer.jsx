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
      <div ref={(ref) => this.ablePlayer = ref}>
        <p>HERE IS THE ABLEPLAYER</p>
      </div>
    )
  }

}
