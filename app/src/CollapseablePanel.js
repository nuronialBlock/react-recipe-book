import React, { Component } from 'react';
import {
  Panel,
  PanelGroup,
  PageHeader,
  ListGroupItem
} from 'react-bootstrap';

import UpdateRecipe from './UpdateRecipe';

export default class CollapseablePanel extends Component {
  constructor(props) {
    super(props);
    this.handleUpdateRecipe = this.handleUpdateRecipe.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleUpdateRecipe(e) {
    this.props.onUpdateRecipe(e);
  }

  handleDelete(e){
    this.props.onDelete(e);
  }

  render() {
    let key = -1;
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
          <UpdateRecipe
            name={recipe.name}
            ingredients={recipe.ingredients}
            idx={key}
            onUpdateRecipe={this.handleUpdateRecipe}
            onDeleteRecipe={this.handleDelete}
          />
        </Panel>
      );
    });
    return (
      <div>
        <PanelGroup
          defaultActiveKey="0"
          accordion
        >
          {recipes}
        </PanelGroup>
      </div>
    );
  }
}
