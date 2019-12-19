import React from "react";
import Modal from "react-modal";

export default ({ isOpen, onRequestClose, name }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Modal"
    className={{
      base: "modal-base",
      afterOpen: "modal-base_after-open",
      beforeClose: "modal-base_before-close"
    }}
    overlayClassName={{
      base: "overlay-base",
      afterOpen: "overlay-base_after-open",
      beforeClose: "overlay-base_before-close"
    }}
    shouldCloseOnOverlayClick={true}
    //closeTimeoutMS={2000}
  >
    <h1>i'm a modal {name}</h1>
    <p>------M-o-d-a-l-------</p>
    <br />

    <button onClick={onRequestClose}>Close</button>
  </Modal>
);
