import React, { Component } from 'react';
import {
  ButtonToolbar,
  Button
} from 'react-bootstrap';

import RecipeModal from './RecipeModal';

export default class EditRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    }
    this.handleSaveRecipe = this.handleSaveRecipe.bind(this);
    this.handleToggleModal = this.handleToggleModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleToggleModal(e) {
    this.setState({ show: !this.state.show })
  }

  handleSaveRecipe(e) {
    this.props.onUpdateRecipe(e);
  }

  handleDelete(e){
    const val = {
      name: this.props.name,
      ingredients: this.props.ingredients
    };
    this.props.onDeleteRecipe(val);
  }

  render() {
    return (
      <div>
        <ButtonToolbar>
          <Button
            bsStyle="danger"
            onClick={this.handleDelete}
          >
            Delete
          </Button>
          <Button onClick={this.handleToggleModal}>
            Edit
          </Button>
        </ButtonToolbar>
        <RecipeModal
          name={this.props.name}
          ingredients={this.props.ingredients}
          show={this.state.show}
          title={"Edit Recipe"}
          onCloseModal={this.handleToggleModal}
          onSaveRecipe={this.handleSaveRecipe}
        />
      </div>
    );
  }
}
