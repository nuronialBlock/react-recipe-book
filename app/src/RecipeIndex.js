import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  Well,
  Panel,
  PanelGroup,
  PageHeader,
  ListGroup,
  ListGroupItem,
  Button
} from 'react-bootstrap';

import AddRecipe from './AddRecipe';
import ControlledPanelGroup from './ControlledPanelGroup';

export default class RecipeIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
    };
    this.handleNewRecipe = this.handleNewRecipe.bind(this);
  }

  handleNewRecipe(value) {
    this.setState({
      recipes: [...this.state.recipes, value]
    });
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col lg={10}>
            <Well>
              <ControlledPanelGroup recipes={this.state.recipes} />
            </Well>
            <AddRecipe
              onNewRecipe={this.handleNewRecipe}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}
