/* eslint-disable react/prop-types */
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{ backgroundColor: '', border: 'none' }}>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{ height: '80vh', backgroundColor: '', paddingTop: 0 }}
      >
        <iframe
          src="https://firebasestorage.googleapis.com/v0/b/dev01-655aa.appspot.com/o/worksheet-math-adding-single-digit-1%2FWorksheet%20-%20Math%20-%20Adding%20-%20Single%20Digit%20-%201.pdf?alt=media&token=1e71acc8-85bd-41b4-811c-29a8fbcee30b"
          frameBorder="0"
          style={{ height: '100%', width: '100%' }}
        ></iframe>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

function PdfModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        view pdf
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default PdfModal;
