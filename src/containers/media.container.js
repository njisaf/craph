import {Container} from 'unstated';

export default class MediaContainer extends Container {

  state = {
    playing: false,
    time: 0
  }

  playMedia = () => {
    this.setState({
      playing: true
    })
  }

  pauseMedia = () => {
    this.setState({
      playing: false
    })
  }
}
