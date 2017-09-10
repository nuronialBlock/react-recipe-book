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

import EditRecipe from './EditRecipe';

export default class CollapseablePanel extends Component {
  constructor(props) {
    super(props);
    this.handleUpdateRecipe = this.handleUpdateRecipe.bind(this);
  }

  handleUpdateRecipe(e) {
    this.props.onUpdateRecipe(e);
  }

  render() {
    let key = 0;
    const recipes = this.props.recipes.map(recipe => {
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
          <EditRecipe
            name={recipe.name}
            ingredients={ingredients}
            onUpdateRecipe={this.handleUpdateRecipe}
          />
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
}
