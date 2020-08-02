import React, { Component } from 'react';

import FlatList from './flat_list';
import SimpleMap from './map';
import flats from '../../data/flats';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <FlatList
          // flats={this.state.flats}
        />
        <SimpleMap />
      </div>
    );
  }
}

export default App;
