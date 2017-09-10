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
  Accordion,
  ButtonToolbar,
  Button
} from 'react-bootstrap';

import AddRecipe from './AddRecipe';

function CollapseablePanel(props) {
  let key = 0;
  const recipes = props.recipes.map(recipe => {
    const ingredients = recipe.ingredients.split(",");
    const listIngredients = ingredients.map( ingredient => {
      return <ListGroupItem>{ingredient}</ListGroupItem>;
    });
    key = key + 1;
    return (
      <Panel
        header={recipe.name}
        eventKey={key.toString()}
      >
        <PageHeader bsClass="text-center">
          <h4><b>Ingredients</b></h4>
          <hr/>
        </PageHeader>
        {listIngredients}
        <hr/>
        <ButtonToolbar>
          <Button bsStyle="danger">Delete</Button>
          <Button onClick={}>Edit</Button>
        </ButtonToolbar>
      </Panel>
    );
  });
  return (
    <div>
      <PanelGroup
        defaultActiveKey="1"
        accordion
      >
        {recipes}
      </PanelGroup>
    </div>
  );
}

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
              <CollapseablePanel recipes={this.state.recipes} />
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
