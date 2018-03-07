import React from "react";
import PropTypes from "prop-types";

export default class OffScreen extends React.Component {
  render() {
    return (
      <div className="reactAblePlayer__offscreen">
        <h2 className="sr-only">Media Player</h2>
      </div>
    )
  }
}
