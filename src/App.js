import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './components/Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

class App extends Component {
  render() {
    console.log(generatePalette(seedColors[4]));

    return (
      <Switch>
        <Route exact path='/' render={() => <h1>PALETTE LIST GOES HERE</h1>} />
        <Route
          exact
          path='/palette/:id'
          render={() => <h1>Individual Palette</h1>}
        />
      </Switch>

      // <div className='App'>
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
