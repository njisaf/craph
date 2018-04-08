//modules
import React from 'react';
import PropTypes from 'prop-types';

//components
import Media from '../components/Media';
import Captions from '../components/Captions';
import Controls from '../components/Controls/Controls';
import StatusBar from '../components/StatusBar';

//context
import {ButtonContext} from '../context/button.context';

//styles
import '../styles/main.scss';

export default class AblePlayer extends React.Component {

  static propTypes = {
    id: PropTypes.string,
    source: PropTypes.string,
    captions: PropTypes.string,
    poster: PropTypes.string
  }

  render() {
    return (
      <div className="ablePlayer__offscreen">
        <Media
          ref={ref => this.media = ref}
          id={this.props.id}
          source={this.props.source}
          poster={this.props.poster}
        />
        <Captions
          captions={this.props.captions}
        />
        <ButtonContext.Provider>
          <Controls />
        </ButtonContext.Provider>
        <StatusBar />
      </div>
    )
  }
}
