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
  }

  handleToggleModal() {
    this.setState({
      show: !this.state.show
    });
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
            show={this.state.show}
            title={"Add Recipe"}
            OnCloseModal={this.handleToggleModal}
          />
        </div>
      </div>
    );
  }
}
