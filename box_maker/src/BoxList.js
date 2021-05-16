import React, { Component } from 'react';
import Box from './Box';

class BoxList extends Component {
  render() {
    return (
      <div className="BoxList-Container">
        <h2>List of Boxes:</h2>
        <div className="BoxList">
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
        </div>
      </div>
    )
  }
}

export default BoxList;