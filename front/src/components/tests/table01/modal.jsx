import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ProductModal = (props) => {
  return (
    <React.Fragment>
      <Modal
        show={props.setShowModal}
        onHide={props.setShowModal}
        keyboard={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.dataModal}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => { props.setShowModal(false); }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  )
}

export default ProductModal

