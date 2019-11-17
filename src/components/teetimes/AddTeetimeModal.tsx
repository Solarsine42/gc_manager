import React from "react";
import { Dropdown, Modal } from "react-bootstrap";
import { useState } from "react";
import AddTeetime from "./AddTeetime";

interface ATTMPropsTypes {
  customer: any;
  id: number;
  [key: string]: any;
}

const AddTeetimeModal: React.FC<ATTMPropsTypes> = props => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Dropdown.Item onClick={handleShow}>Add Tee Time</Dropdown.Item>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Tee Time</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddTeetime id={props.id} customer={props.customer} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddTeetimeModal;
