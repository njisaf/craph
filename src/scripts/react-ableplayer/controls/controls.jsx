import React from 'react';
import PropTypes from 'prop-types';

import ControlsMain from './controls-main';
import ControlsSub from './controls-sub';

export default class Controls extends React.Component {
  static PropTypes = {

  }

  render() {
    return (
      <div className="reactAblePlayer__controls">
        <ControlsMain />
        <ControlsSub />
      </div>
    )
  }
}
