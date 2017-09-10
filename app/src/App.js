import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

import RecipeIndex from './RecipeIndex';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              Recipe Book
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <RecipeIndex />
      </div>
    );
  }
}

export default App;
