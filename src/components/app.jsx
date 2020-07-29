import React, { Component } from 'react';
import FlatList from './flat_list.jsx';
import Carte from './map.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <FlatList />
        <Carte />
      </div>
    );
  }
}

export default App;
