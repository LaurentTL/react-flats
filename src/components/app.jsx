import React, { Component } from 'react';
import FlatList from './flat_list.jsx';
import SimpleMap from './map.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <FlatList />
        <SimpleMap />
      </div>
    );
  }
}

export default App;
