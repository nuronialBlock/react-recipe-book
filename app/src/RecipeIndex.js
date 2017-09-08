import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  Well,
  Panel,
  Button
} from 'react-bootstrap';

import AddRecipe from './AddRecipe';

function CollapseablePanelGroup(props) {
  const recipe = props.recipe;
  const recipeElements = (
    <div>
      <Panel
        header={recipe.name}
      >
          {recipe.ingredients}
      </Panel>
    </div>
  );
  return recipeElements;
}

export default class RecipeIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      open: false
    };
    this.handleNewRecipe = this.handleNewRecipe.bind(this);
    // this.handleCollapse = this.handleCollapse.bind(this);
  }

  handleNewRecipe(value) {
    let res = <CollapseablePanelGroup recipe={value} />
    this.setState({
      recipes: [...this.state.recipes, res]
    });
    console.log(this.state.recipes);
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
