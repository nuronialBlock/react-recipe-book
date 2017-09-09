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

function CollapseablePanelGroup(props) {
  const recipe = props.recipe;
  const ingredients = recipe.ingredients.split(",");
  const listIngredients = ingredients.map( ingredient => {
    return <ListGroupItem>{ingredient}</ListGroupItem>;
  });
  const recipeElements = (
    <div>
      <Panel
        header={recipe.name}
        collapsible
      >
        <PageHeader bsClass="text-center">
          <h4><b>Ingredients</b></h4>
          <hr/>
        </PageHeader>
          {listIngredients}
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
  }

  handleNewRecipe(value) {
    let res = <CollapseablePanelGroup recipe={value} />
    this.setState({
      recipes: [...this.state.recipes, res]
    });
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col lg={10}>
            <Well>
              <PanelGroup>
                {this.state.recipes}
              </PanelGroup>
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
