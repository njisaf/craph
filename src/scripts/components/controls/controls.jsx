import React from 'react';

import ControlsMain from './controls-main';
import ControlsSub from './controls-sub';

export default class Controls extends React.Component {

  render() {
    return (
      <div className="reactAblePlayer__controls">
        <ControlsMain />
        <ControlsSub />
      </div>
    )
  }
}
