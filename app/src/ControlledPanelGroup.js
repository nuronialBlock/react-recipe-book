import React, { Component } from 'react';
import {
  Panel,
  PanelGroup,
  PageHeader,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';

function CollapseablePanel(props) {
  const recipe = props.recipe;
  const ingredients = recipe.ingredients.split(",");
  const listIngredients = ingredients.map( ingredient => {
    return <ListGroupItem>{ingredient}</ListGroupItem>;
  });
  const recipeElements = (
    <div>
      <Panel
        header={recipe.name}
        eventKey={props.eventKey}
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

export default class ControlledPanelGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeKey: "1"
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(activekey) {
    this.setState({activekey});
  }

  render() {
    let key = 0;
    const panels = this.props.recipes.map(recipe => {
      key = key + 1;
      return (
        <CollapseablePanel
          recipe={recipe}
          eventKey={key.toString()}
        />
      );
    })
    return (
      <div>
        <PanelGroup
          activeKey={this.state.activeKey}
          onSelect={this.handleSelect}
          accordion
        >
          {panels}
        </PanelGroup>
      </div>
    )
  }

}
