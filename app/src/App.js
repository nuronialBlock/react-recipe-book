import React, { Component } from 'react';
import { Navbar, Grid, Row, Col } from 'react-bootstrap';

import AddRecipe from './AddRecipe';

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
        <Grid>
          <Row>
            <Col lg={10}>
              <AddRecipe />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
