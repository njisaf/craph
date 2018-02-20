import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

import '../styles/main.scss';

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
    volume: PropTypes.number,
    seekInterval: PropTypes.number,
    showNowPlaying: PropTypes.bool,
    lang: PropTypes.string,
    forceLang: PropTypes.bool,
    captionsPosition: PropTypes.string,
    allowFullscreen, PropTypes.bool,
    youtubeId: PropTypes.string,
    youtubeDescId: PropTypes.string,
  }

  static defaultProps = {
    autoplay: false,
    width: 480,
    height: 360,
    poster: '',
    iconType: 'font',
    speedIcons: 'arrows',
    startTime: 0,
    volume: 7,
    showNowPlaying: false,
    lang: 'en',
    forceLang: false,
    captionsPosition: 'below',
    allowFullscreen: true,
    youtubeId: '',
    youtubeDescId: '',

  }

}
