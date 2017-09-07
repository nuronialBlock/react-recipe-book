import React, { Component } from 'react';
import {
  ButtonToolbar,
  Button,
  Modal
} from 'react-bootstrap';

export default class AddRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
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
              onClick={this.toggleModal}>
              Add Recipe
            </Button>
          </ButtonToolbar>
        </div>
        <div className="modal">
          <Modal
            show={this.state.show}
            container={this}
            aria-labelledby="contained-modal-title">
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title">
                Contained Modal
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              What do you expect from this World?
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={this.toggleModal}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}
