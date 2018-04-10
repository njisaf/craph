import React from 'react';
import PropTypes from 'prop-types';
import {Subscribe} from 'unstated';

import MediaContainer from '../containers/media.container';

import OffScreen from '../components/OffScreen';
import Media from '../components/Media';
import Captions from '../components/Captions';
import Controls from '../components/Controls/Controls';
import StatusBar from '../components/StatusBar';

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
      <Subscribe to={[MediaContainer]}>
        {media => (
          <Media
            ref={ref => this.mediaRef = ref}
            mediaState={media.state}
            id={this.props.id}
            source={this.props.source}
            poster={this.props.poster} />
        )}
      </Subscribe>
      <Captions captions={this.props.captions} />
      <Controls/>
      <StatusBar />
    </div>)
  }
}
