import React from "react";
import { Modal , Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const ModalFeelback = ({history}) => {
  
  const feelbackModal = useSelector(state => state.TimeFinsh)
  return (
    <Modal show={feelbackModal} backdrop="static" keyboard={false}>
      <Modal.Header>
        <Modal.Title className="text-danger">Time is Finished!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          You can try again if you want to get a Certificate.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => setTimeout(() => history.push('/'), 2000)}>Go To Home</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalFeelback;
