import React, { Component } from 'react';
import {
  ButtonToolbar,
  Button
} from 'react-bootstrap';

import RecipeModal from './RecipeModal';

export default class AddRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.handleToggleModal = this.handleToggleModal.bind(this);
    this.handleNewRecipe = this.handleNewRecipe.bind(this);
  }

  handleToggleModal() {
    this.setState({
      show: !this.state.show
    });
  }

  handleNewRecipe(value) {
    this.handleToggleModal();
    this.props.onNewRecipe(value);
  }

  render() {
    return (
      <div>
        <div className="add-recipe">
          <ButtonToolbar>
            <Button
              bsStyle="primary"
              onClick={this.handleToggleModal}>
              Add Recipe
            </Button>
          </ButtonToolbar>
        </div>
        <div className="modal">
          <RecipeModal
            addRecipe={true}
            name={''}
            ingredients={''}
            show={this.state.show}
            title={"Add Recipe"}
            onCloseModal={this.handleToggleModal}
            onSaveRecipe={this.handleNewRecipe}
          />
        </div>
      </div>
    );
  }
}
