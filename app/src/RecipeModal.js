import React, { Component } from 'react';
import {
  Modal,
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  ButtonToolbar
} from 'react-bootstrap';

export default class RecipeModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      ingredients: this.props.ingredients
    }
    this.closeModal = this.closeModal.bind(this);
    this.saveRecipe = this.saveRecipe.bind(this);
    this.updateRecipeName = this.updateRecipeName.bind(this);
    this.updateIngredients = this.updateIngredients.bind(this);
  }

  closeModal(e) {
    this.props.onCloseModal(e);
  }

  saveRecipe() {
    this.props.onSaveRecipe(this.state);
  }

  updateRecipeName(e) {
    this.setState({
      name: e.target.value
    })
  }
  updateIngredients(e) {
    this.setState({
      ingredients: e.target.value
    })
  }

  render() {
    return (
      <Modal
        show={this.props.show}
        container={this}
        aria-labelledby="contained-modal-title">
        <Modal.Header>
          <Modal.Title id="contained-modal-title">
            {this.props.title}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form>
            <FormGroup controlId="formControlsText">
              <ControlLabel>Recipe</ControlLabel>
              <FormControl
                type="text"
                placeholder="Recipe Name"
                value={this.state.name}
                onChange={this.updateRecipeName}
              />
            </FormGroup>
            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Ingredients</ControlLabel>
              <FormControl
                componentClass="textarea"
                placeholder="Enter ingredients, sperated by commas"
                value={this.state.ingredients}
                onChange={this.updateIngredients}
              />
            </FormGroup>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <ButtonToolbar>
            <Button onClick={this.closeModal}>Close</Button>
            <Button
              onClick={this.saveRecipe}
              bsStyle="primary"
            >
              Save
            </Button>
          </ButtonToolbar>
        </Modal.Footer>
      </Modal>
    );
  }
}
