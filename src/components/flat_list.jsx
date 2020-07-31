import React, { Component } from 'react';
import Flat from './flat';
import flats from './flats';

class FlatList extends Component {
  renderList = (props) => {
    return (
      this.props.flats.map(flat => )
    );
  }

  render() {
    return (
      <div className="flat-list">
        {renderList()}
      </div>
    );
  }
}

export default FlatList;
