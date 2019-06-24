import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { MODAL_LOGIN_CLOSE, MODAL_LOGIN_OPEN } from "../../../actions/types";
import { modalworkFun } from "../../../actions/modalActions";

const action = { modalworkFun };

const mapState = state => ({
  modal: state.modal
});

class LoginModal extends Component {
  state = {};
  handleModalClose = () => {
    this.props.modalworkFun(MODAL_LOGIN_CLOSE);
  };
  render() {
    return (
      <Modal
        show={this.props.modal.modalLogin}
        size="lg"
        onHide={this.handleModalClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading111
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleModalClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default connect(
  mapState,
  action
)(LoginModal);
