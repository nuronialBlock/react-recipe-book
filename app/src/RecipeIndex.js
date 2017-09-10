import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  Well
} from 'react-bootstrap';

import CollapseablePanel from './CollapseablePanel';
import AddRecipe from './AddRecipe';

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
              <CollapseablePanel
                recipes={this.state.recipes}
                onUpdateRecipe={this.handleNewRecipe}
              />
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
