import React, { Component } from 'react';
import {
  Modal,
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from 'react-bootstrap';

export default class RecipeModal extends Component {
  constructor(props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(e) {
    this.props.OnCloseModal(e);
  }

  render() {
    return (
      <Modal
        show={this.props.show}
        container={this}
        aria-labelledby="contained-modal-title">
        <Modal.Header closeButton>
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
                value={this.props.recipeName}
              />
            </FormGroup>
            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Ingredients</ControlLabel>
              <FormControl
                componentClass="textarea"
                placeholder="Enter ingredients, sperated by commas"
                value={this.props.ingredients}
              />
            </FormGroup>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={this.closeModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
