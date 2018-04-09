//modules
import React from 'react';
import PropTypes from 'prop-types';

<<<<<<< HEAD
//components
import Media from '../components/Media';
import Captions from '../components/Captions';
import Controls from '../components/Controls/Controls';
import StatusBar from '../components/StatusBar';
=======
import OffScreen from './components/off-screen';
import Media from './components/Media';
import Captions from './components/captions';
import Controls from './components/controls/controls';
import StatusBar from './components/status-bar';
>>>>>>> 055f0729f319506916f6997c982ac48f28b5a04f

//context
import {ButtonsProvider} from '../context/buttons.context';

//styles
import '../../styles/main.scss';

export default class AblePlayer extends React.Component {

  static propTypes = {
    id: PropTypes.string,
    source: PropTypes.string,
    captions: PropTypes.string,
    poster: PropTypes.string
  }

  render() {
<<<<<<< HEAD
    return (
      <div className="ablePlayer__offscreen">
        <Media
          ref={ref => this.media = ref}
          id={this.props.id}
          source={this.props.source}
          poster={this.props.poster} />
        <Captions
          captions={this.props.captions} />
        <ButtonsProvider>
          <Controls />
        </ButtonsProvider>
        <StatusBar />
      </div>
    )
=======
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
>>>>>>> 055f0729f319506916f6997c982ac48f28b5a04f
  }
}
