import React from "react";

import { Modal, Button, Image } from "react-bootstrap";

const CarouselModal = (props) => {
  const { onHide, item } = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="d-flex justify-content-center align-items-center">
        <Image src={item} thumbnail/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => onHide(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CarouselModal;
