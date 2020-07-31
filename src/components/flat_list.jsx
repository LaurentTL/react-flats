import React, { Component } from 'react';
import flats from './flats.js'

class FlatList extends Component {
  rednerList() {
    return(
      this.props.flats.map(flat => {})
    );
  }

  render() {
    return (
      <div className="flat-list" />
    );
  }
}

export default FlatList;
