import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  Well,
  Panel,
  Button
} from 'react-bootstrap';

export default class RecipeIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      open: false
    };
    this.handleNewRecipe = this.handleNewRecipe.bind(this);
    this.handleCollapse = this.handleCollapse.bind(this);
  }

  handleNewRecipe(value) {
    let recipe = value;
    this.setState({
      recipes: [...this.state.recipes, recipe]
    })
  }

  handleCollapse() {

  }

  render() {
    return (
      <Grid>
        <Row>
          <Col lg={10}>
            <Well>
              {this.state.recipes}
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
