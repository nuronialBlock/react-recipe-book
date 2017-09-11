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
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdateRecipe = this.handleUpdateRecipe.bind(this);
  }

  handleNewRecipe(value) {
    this.setState({
      recipes: [...this.state.recipes, value]
    });
  }

  handleDelete(value) {
    const recipes = this.state.recipes.filter( recipe =>
      recipe.name !== value.name);
    this.setState({ recipes });
  }

  handleUpdateRecipe(value){
    const recipes = this.state.recipes.map( recipe => {
      if(recipe.name === value.name) {
        return value;
      }
      return recipe;
    });

    this.setState({
      recipes: [...recipes]
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
                onUpdateRecipe={this.handleUpdateRecipe}
                onDelete={this.handleDelete}
              />
            </Well>
            <AddRecipe
              dddRecipe={true}
              onNewRecipe={this.handleNewRecipe}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}
